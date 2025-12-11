"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
}

const CONFIG = {
  PARTICLE_COUNT: 60,
  PARTICLE_SIZE: 3,
  PARTICLE_OPACITY: 0.5,
  PARTICLE_SPEED: 0.5,
  CONNECTION_DISTANCE: 140,
  CONNECTION_OPACITY: 0.3,
  MOUSE_GRAB_DISTANCE: 300,
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const particlesRef = useRef<Particle[]>([])
  const { resolvedTheme } = useTheme()
  
  // 1. TRUCO DE REFERENCIA: Guardamos el tema en una ref para leerlo sin reiniciar el efecto
  const themeRef = useRef(resolvedTheme)
  const animationIdRef = useRef<number | undefined>(undefined)

  // 2. Actualizamos la referencia cuando el tema cambia
  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Solo inicializamos partículas UNA vez
    const initParticles = () => {
      particlesRef.current = Array.from({ length: CONFIG.PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
        vy: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
        size: Math.random() * 2 + 1,
        opacity: CONFIG.PARTICLE_OPACITY,
        life: Math.random(),
      }))
    }
    initParticles()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const handleClick = (e: MouseEvent) => {
      if (particlesRef.current.length > 100) return
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 2 + 1,
          opacity: CONFIG.PARTICLE_OPACITY,
          life: 1,
        })
      }
    }

    const animate = () => {
      // 3. Leemos el tema desde la referencia (no causa re-render)
      const isDark = themeRef.current === "dark"

      // Color de fondo con transparencia para el efecto estela
      ctx.fillStyle = isDark ? "rgba(15, 15, 35, 0.2)" : "rgba(255, 255, 255, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebote
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Mouse interaction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distSq = dx * dx + dy * dy

          if (distSq < CONFIG.MOUSE_GRAB_DISTANCE * CONFIG.MOUSE_GRAB_DISTANCE) {
            const force = (CONFIG.MOUSE_GRAB_DISTANCE - Math.sqrt(distSq)) / CONFIG.MOUSE_GRAB_DISTANCE
            particle.vx += dx * force * 0.001
            particle.vy += dy * force * 0.001
          }
        }

        // Dibujar Partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        // Usamos el color primario (violeta) para ambos temas para consistencia visual
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`
        ctx.fill()

        // Conexiones
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j]
          const dx = particle.x - p2.x
          const dy = particle.y - p2.y

          if (Math.abs(dx) > CONFIG.CONNECTION_DISTANCE || Math.abs(dy) > CONFIG.CONNECTION_DISTANCE) continue

          const distSq = dx * dx + dy * dy
          if (distSq < CONFIG.CONNECTION_DISTANCE * CONFIG.CONNECTION_DISTANCE) {
            ctx.beginPath()
            // Ajustamos el color de la línea según el tema
            ctx.strokeStyle = isDark
              ? `rgba(139, 92, 246, ${0.2 * (1 - Math.sqrt(distSq) / CONFIG.CONNECTION_DISTANCE)})`
              : `rgba(139, 92, 246, ${0.2 * (1 - Math.sqrt(distSq) / CONFIG.CONNECTION_DISTANCE)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      animationIdRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("click", handleClick)
    window.addEventListener("resize", resizeCanvas)

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("resize", resizeCanvas)
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
    }
  }, []) // 4. Dependencia vacía: Solo se ejecuta AL MONTAR, no al cambiar tema.

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />
}