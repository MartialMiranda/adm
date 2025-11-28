"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
      setRipples((prev) => [...prev, newRipple])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 1000)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <>
      {/* Large gradient glow following mouse */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
            isDark
              ? "rgba(139, 92, 246, 0.12), rgba(6, 182, 212, 0.08) 40%, transparent 60%"
              : "rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.05) 40%, transparent 60%"
          })`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.15 }}
      />

      {/* Inner glow ring */}
      <motion.div
        className="pointer-events-none fixed z-40 rounded-full"
        style={{
          background: `radial-gradient(circle, ${isDark ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)"} 0%, transparent 70%)`,
        }}
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
          width: isClicking ? 80 : 120,
          height: isClicking ? 80 : 120,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
        style={{
          background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
          boxShadow: isClicking
            ? "0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(6, 182, 212, 0.6)"
            : "0 0 15px rgba(139, 92, 246, 0.5), 0 0 30px rgba(6, 182, 212, 0.3)",
        }}
        animate={{
          x: mousePosition.x - (isClicking ? 6 : 10),
          y: mousePosition.y - (isClicking ? 6 : 10),
          width: isClicking ? 12 : 20,
          height: isClicking ? 12 : 20,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Click ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="pointer-events-none fixed z-30 rounded-full border-2"
            style={{
              borderColor: isDark ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.4)",
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              width: 200,
              height: 200,
              x: -100,
              y: -100,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  )
}
