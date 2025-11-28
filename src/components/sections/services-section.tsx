"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Database, Cloud, Shield, Cpu, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { GlowingCard } from "@/components/ui/glowing-card"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, responsivas y escalables utilizando las últimas tecnologías como React, Next.js y Node.js.",
    features: ["Single Page Applications", "Progressive Web Apps", "E-commerce", "Portales corporativos"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    description: "Apps nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.",
    features: ["React Native", "Flutter", "iOS nativo (Swift)", "Android nativo (Kotlin)"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    description: "Software ERP, CRM y sistemas de gestión personalizados que optimizan los procesos de tu empresa.",
    features: ["ERP a medida", "CRM personalizado", "Gestión documental", "Business Intelligence"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Migración, arquitectura y gestión de infraestructura en la nube para máxima disponibilidad.",
    features: ["AWS", "Google Cloud", "Microsoft Azure", "DevOps & CI/CD"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protección integral de sistemas, auditorías de seguridad y consultoría en protección de datos.",
    features: ["Pentesting", "Auditorías de seguridad", "GDPR compliance", "SOC 2"],
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Implementación de soluciones de IA, machine learning y automatización de procesos.",
    features: ["Chatbots", "Análisis predictivo", "Computer Vision", "NLP"],
    gradient: "from-violet-500 to-purple-500",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />

      <div className="container mx-auto relative">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <motion.span
              className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nuestros Servicios
            </motion.span>
            <h2 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              Soluciones Tecnológicas{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Integrales</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ofrecemos un portafolio completo de servicios de desarrollo de software y consultoría tecnológica
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <GlowingCard className="h-full">
                <div className="flex flex-col h-full">
                  <motion.div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <service.icon className="h-7 w-7" />
                  </motion.div>

                  <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold">
                    {service.title}
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-primary"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <motion.div
                          className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
