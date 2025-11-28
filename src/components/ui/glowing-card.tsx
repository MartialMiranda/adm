"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import type { ReactNode, MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface GlowingCardProps {
  children: ReactNode
  className?: string
}

export function GlowingCard({ children, className }: GlowingCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 transition-all duration-500",
        className,
      )}
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px rgba(139, 92, 246, 0.15)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.4),
              transparent 80%
            )
          `,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
