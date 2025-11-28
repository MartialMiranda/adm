"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Sparkles, Zap, Terminal, Braces, X } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function HeroSection() {
  const [showQRModal, setShowQRModal] = useState(false)
  const projectUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"

  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm text-primary backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            Innovación Digital desde 2020
            <motion.span
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <motion.h1 className="mb-8 text-balance text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Transformamos
            </motion.span>
            <motion.span
              className="relative mx-3 inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                ideas
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
              <motion.span
                className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ delay: 1, duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              en
            </motion.span>
            <br />
            <motion.span
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              soluciones digitales
            </motion.span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-12 max-w-2xl text-pretty text-xl text-muted-foreground md:text-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            NexusCode S.R.L. es tu socio estratégico en el desarrollo de software a medida. Creamos experiencias
            digitales innovadoras que impulsan el crecimiento de tu negocio.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <AnimatedButton variant="primary" size="lg" href="#servicios">
              <Code2 className="h-5 w-5" />
              Ver Servicios
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg" href="#empresa">
              <Zap className="h-5 w-5" />
              Conocer Empresa
            </AnimatedButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-24">
            <motion.a
              href="#empresa"
              className="group inline-flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium tracking-wide">Descubre más</span>
              <motion.div className="relative flex h-12 w-7 items-start justify-center rounded-full border-2 border-current p-1.5">
                <motion.div
                  className="h-2 w-1 rounded-full bg-current"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Floating terminal */}
          <motion.div
            className="absolute left-[5%] top-1/2 hidden lg:block"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
          >
            <div className="flex h-24 w-40 flex-col rounded-xl border border-primary/20 bg-card/40 backdrop-blur-md shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-1.5 border-b border-border/50 px-3 py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 p-3">
                <div className="flex items-center gap-2 text-xs text-primary font-mono">
                  <Terminal className="h-3 w-3" />
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    npm run dev
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating braces */}
          <motion.div
            className="absolute right-[8%] top-1/3 hidden lg:block"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -8, 0],
              x: [0, -10, 0],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut" }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 backdrop-blur-md shadow-xl shadow-accent/10">
              <Braces className="h-10 w-10 text-accent" />
            </div>
          </motion.div>

          {/* Floating gradient orb */}
          <motion.div
            className="absolute right-[15%] bottom-1/4 hidden lg:block"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
          >
            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
          </motion.div>

          {/* Code snippet */}
          <motion.div
            className="absolute left-[10%] bottom-1/3 hidden lg:block"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 9, ease: "easeInOut" }}
          >
            <div className="rounded-lg border border-primary/20 bg-card/50 p-3 backdrop-blur-md font-mono text-xs shadow-lg">
              <span className="text-accent">const</span> <span className="text-foreground">future</span>{" "}
              <span className="text-muted-foreground">=</span> <span className="text-primary">await</span>{" "}
              <span className="text-foreground">build()</span>
            </div>
          </motion.div>
        </div>

        {/* Floating QR Code - Outside pointer-events-none */}
        <motion.div
          className="absolute left-[5%] top-[20%] hidden lg:block cursor-pointer z-40 pointer-events-auto"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 9, ease: "easeInOut", delay: 0.5 }}
          onClick={() => setShowQRModal(true)}
        >
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary/30 bg-card/60 p-3 backdrop-blur-md shadow-2xl shadow-primary/20 hover:border-primary/60 hover:shadow-primary/40 transition-all">
            <QRCodeSVG
              value={projectUrl}
              size={100}
              level="H"
              includeMargin={true}
              bgColor="#ffffff"
            />
            <div className="mt-2 text-xs font-semibold text-primary">Escanea</div>
          </div>
        </motion.div>

        {/* QR Modal */}
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card to-card/50 p-8 backdrop-blur-md shadow-2xl shadow-primary/30"
            >
              <button
                onClick={() => setShowQRModal(false)}
                className="absolute right-4 top-4 p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              </button>
              
              <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl font-bold text-foreground">Escanea el código QR</h3>
                <p className="text-sm text-muted-foreground max-w-sm text-center">
                  Utiliza tu dispositivo móvil para acceder al proyecto
                </p>
                
                <div className="rounded-xl border-2 border-primary/30 bg-white p-6">
                  <QRCodeSVG
                    value={projectUrl}
                    size={280}
                    level="H"
                    includeMargin={true}
                    bgColor="#ffffff"
                  />
                </div>

                <p className="text-xs text-muted-foreground mt-4">{projectUrl}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
