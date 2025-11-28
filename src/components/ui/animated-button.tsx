"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  href?: string
}

export function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
}: AnimatedButtonProps) {
  const baseStyles =
    "relative overflow-hidden rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"

  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border-2 border-primary/50 text-foreground hover:border-primary",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{
        scale: 1.05,
        boxShadow: variant === "primary" ? "0 20px 40px rgba(139, 92, 246, 0.4)" : "0 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Shimmer effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{ translateX: ["100%", "-100%"] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Glow pulse on hover */}
      <motion.span
        className="absolute inset-0 rounded-xl opacity-0"
        style={{
          background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
        }}
        whileHover={{ opacity: 1 }}
      />
    </Component>
  )
}
