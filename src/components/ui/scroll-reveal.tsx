"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "scale"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({ children, direction = "up", delay = 0, duration = 0.6, className }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directions = {
    up: { y: 80, x: 0, scale: 1 },
    down: { y: -80, x: 0, scale: 1 },
    left: { x: 80, y: 0, scale: 1 },
    right: { x: -80, y: 0, scale: 1 },
    scale: { x: 0, y: 0, scale: 0.8 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
        filter: "blur(10px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
