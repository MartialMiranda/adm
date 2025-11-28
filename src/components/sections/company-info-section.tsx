"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, Scale, FileText, BadgeCheck } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { GlowingCard } from "@/components/ui/glowing-card"

const companyData = [
  {
    icon: Building2,
    title: "Rótulo Comercial",
    content: "NexusCode S.R.L.",
    description: "Sociedad de Responsabilidad Limitada constituida bajo las leyes de Bolivia",
  },
  {
    icon: MapPin,
    title: "Ubicación Geográfica",
    content: "Santa Cruz De La Sierra, Bolivia",
    description: "Av. Junin #1440, Edificio Alameda, Piso 12, Oficina 1201, Zona Central",
  },
  {
    icon: Scale,
    title: "Tipo de Sociedad",
    content: "S.R.L. - Sociedad de Responsabilidad Limitada",
    description: "Capital social: Bs. 500,000 dividido en 5,000 cuotas de Bs. 100 cada una",
  },
  {
    icon: FileText,
    title: "Registro Legal",
    content: "FUNDEMPRESA: 00234567",
    description: "NIT: 1234567012 | Licencia de Funcionamiento: SZ-2020-45678",
  },
  {
    icon: BadgeCheck,
    title: "Certificaciones",
    content: "ISO 9001:2015 | ISO 27001",
    description: "Certificados en gestión de calidad y seguridad de la información",
  },
]

export function CompanyInfoSection() {
  return (
    <section id="empresa" className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <motion.span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
              Información Corporativa
            </motion.span>
            <h2 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              Aspectos Administrativos,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Legales y Comerciales
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="scale">
          <div className="mb-20 flex flex-col items-center">
            <motion.div
              className="relative mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Outer glow rings */}
              <motion.div
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Main logo */}
              <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl border border-primary/30 bg-card shadow-2xl shadow-primary/20">
                <motion.span
                  className="text-7xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.5)",
                      "0 0 40px rgba(139, 92, 246, 0.8)",
                      "0 0 20px rgba(139, 92, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  N
                </motion.span>
                <motion.div
                  className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-sm font-bold text-white shadow-lg"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {"</>"}
                </motion.div>
              </div>
            </motion.div>

            <motion.h3
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nexus<span className="text-primary">Code</span>
            </motion.h3>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Conectando ideas con código
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companyData.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1} direction="up">
              <GlowingCard className="h-full">
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 1)",
                    color: "white",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="font-semibold text-lg text-foreground mb-2">{item.content}</p>
                <p className="text-base text-muted-foreground">{item.description}</p>
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
