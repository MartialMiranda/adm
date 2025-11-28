"use client"

import { useEffect, useRef, useState } from "react"
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
  PARTICLE_COUNT: 80,
  PARTICLE_SIZE: 3,
  PARTICLE_OPACITY: 0.5,
  PARTICLE_SPEED: 6,
  CONNECTION_DISTANCE: 150,
  CONNECTION_OPACITY: 0.4,
  MOUSE_GRAB_DISTANCE: 400,
  MOUSE_GRAB_OPACITY: 1,
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const particlesRef = useRef<Particle[]>([])
  const [particleCount, setParticleCount] = useState(0)
  const { resolvedTheme } = useTheme()
  const animationIdRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: CONFIG.PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
        vy: (Math.random() - 0.5) * CONFIG.PARTICLE_SPEED,
        size: Math.random() * 3 + 1,
        opacity: CONFIG.PARTICLE_OPACITY,
        life: Math.random(),
      }))
      setParticleCount(particlesRef.current.length)
    }

    initParticles()

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const handleClick = (e: MouseEvent) => {
      // Add particles on click
      for (let i = 0; i < 4; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 3 + 1,
          opacity: CONFIG.PARTICLE_OPACITY,
          life: Math.random(),
        })
      }
    }

    // Animation loop
    const animate = () => {
      const isDark = resolvedTheme === "dark"

      // Clear canvas with fade effect
      ctx.fillStyle = isDark ? "rgba(15, 15, 35, 0.1)" : "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particlesRef.current.forEach((particle) => {
        // Apply velocity
        particle.x += particle.vx
        particle.y += particle.vy

        // Mouse interaction - grab effect
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONFIG.MOUSE_GRAB_DISTANCE) {
            const force = (CONFIG.MOUSE_GRAB_DISTANCE - distance) / CONFIG.MOUSE_GRAB_DISTANCE
            particle.vx += (dx / distance) * force * 0.5
            particle.vy += (dy / distance) * force * 0.5
          }
        }

        // Boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Fade out over time
        particle.life -= 0.001
        if (particle.life < 0) particle.life = 1

        const opacity = particle.opacity * Math.max(0, particle.life)

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3,
        )
        gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`)
        gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * 0.5})`)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONFIG.CONNECTION_DISTANCE) {
            const opacity = CONFIG.CONNECTION_OPACITY * (1 - distance / CONFIG.CONNECTION_DISTANCE)
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Remove dead particles (keep only recent ones for performance)
      if (particlesRef.current.length > CONFIG.PARTICLE_COUNT + 100) {
        particlesRef.current = particlesRef.current.slice(-CONFIG.PARTICLE_COUNT - 50)
      }

      setParticleCount(particlesRef.current.length)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("click", handleClick)
    window.addEventListener("resize", resizeCanvas)

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("resize", resizeCanvas)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [resolvedTheme])

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 bg-black" />
    </>
  )
}
