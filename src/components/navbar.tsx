"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Empresa", href: "#empresa" },
  { name: "Servicios", href: "#servicios" },
  { name: "Organización", href: "#organizacion" },
  { name: "Estrategia", href: "#estrategia" },
  { name: "FODA", href: "#foda" },
  { name: "Porter", href: "#porter" },
  { name: "BCG", href: "#bcg" },
]

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-5">
        <nav className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-lg bg-primary/50" />
              <div className="absolute inset-1 flex items-center justify-center rounded-md bg-background text-lg font-bold text-primary">
                N
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Nexus<span className="text-primary">Code</span>
            </span>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg shadow-primary/5" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <motion.a
          href="#inicio"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative h-10 w-10">
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.4)",
                  "0 0 40px rgba(139, 92, 246, 0.6)",
                  "0 0 20px rgba(139, 92, 246, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="absolute inset-1 flex items-center justify-center rounded-md bg-background text-lg font-bold text-primary">
              N
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Nexus<span className="text-primary">Code</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="group relative rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{item.name}</span>
              <motion.span
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle with animation */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="relative rounded-full overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0"
                whileHover={{ opacity: 1 }}
              />
              <AnimatePresence mode="wait">
                {resolvedTheme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Cambiar tema</span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-border/50 lg:hidden overflow-hidden"
          >
            <motion.div
              className="container mx-auto flex flex-col gap-2 px-6 py-4"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: {},
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10"
                  onClick={() => setMobileMenuOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                  whileTap={{ scale: 0.98, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
