"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "./theme-provider"

export function MouseFollower() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // 1. Usamos MotionValues en lugar de useState
  // Esto evita re-renderizar el componente con cada pixel que se mueve el mouse
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // 2. Creamos un efecto de "muelle" (spring) suave para el círculo grande
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Actualizamos los valores directamente (sin React Render Cycle)
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Ocultamos en móviles para ahorrar recursos
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Círculo Principal (Sigue suavemente) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%", // Centrar
          translateY: "-50%", // Centrar
          width: 400, // Tamaño fijo es mejor para rendimiento que cambiar width dinámicamente
          height: 400,
          background: `radial-gradient(circle, ${
            isDark ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0.05)"
          } 0%, transparent 60%)`,
        }}
      />

      {/* Punto Central (Sigue instantáneamente) */}
      <motion.div
        className="absolute h-3 w-3 rounded-full mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isDark ? "#fff" : "#000",
          boxShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
        }}
      />
    </div>
  )
}