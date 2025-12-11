"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
// Eliminamos useTheme porque ya no dependemos de cambiar de color bruscamente (negro/blanco),
// ahora usamos variables CSS nativas de Tailwind (var(--primary)) que cambian solas.

export function MouseFollower() {
  // 1. MotionValues: Coordenadas directas al DOM (GPU), sin re-renderizar React.
  const mouseX = useMotionValue(-100) // Empezamos fuera para que no parpadee al cargar
  const mouseY = useMotionValue(-100)

  // 2. Física del Muelle (Spring):
  // "Aura" grande: Se mueve suave y lento (damping alto).
  const springConfigAura = { damping: 30, stiffness: 200, mass: 0.8 }
  const auraX = useSpring(mouseX, springConfigAura)
  const auraY = useSpring(mouseY, springConfigAura)

  // "Cursor" pequeño: Se mueve casi instantáneo pero orgánico.
  const springConfigCursor = { damping: 20, stiffness: 400, mass: 0.2 }
  const cursorX = useSpring(mouseX, springConfigCursor)
  const cursorY = useSpring(mouseY, springConfigCursor)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      
      {/* 1. EL AURA (Círculo grande de luz) 
          Justificación: Da profundidad y resalta el área donde el usuario mira.
          Usa 'hsl(var(--primary))' para adaptarse automáticamente al tema violeta.
      */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          width: 300,
          height: 300,
          // Un gradiente sutil usando el color primario de la marca
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* 2. EL CURSOR (Anillo pequeño)
          Justificación: Reemplaza el punto negro sólido. 
          Es un anillo fino con el color de la marca. Se ve tecnológico y limpio.
      */}
      <motion.div
        className="absolute h-4 w-4 rounded-full border border-primary/50 bg-primary/20 backdrop-blur-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Pequeño núcleo brillante en el centro para precisión */}
        <div className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
      </motion.div>

    </div>
  )
}