"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Flag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  { name: "Innovación", description: "Buscamos constantemente nuevas formas de resolver problemas" },
  { name: "Excelencia", description: "Nos comprometemos con la máxima calidad en cada proyecto" },
  { name: "Integridad", description: "Actuamos con honestidad y transparencia en todo momento" },
  { name: "Colaboración", description: "Trabajamos en equipo con nuestros clientes y entre nosotros" },
  { name: "Responsabilidad", description: "Asumimos el compromiso total con los resultados" },
]

const objectives = [
  "Alcanzar una facturación de $2M USD para 2025 con un crecimiento sostenido del 30% anual",
  "Expandir operaciones a 3 países de Latinoamérica (Perú, Chile, Colombia) antes de 2026",
  "Obtener certificación CMMI Nivel 3 para procesos de desarrollo de software en 2025",
  "Desarrollar y lanzar 2 productos SaaS propios para el mercado empresarial",
  "Incrementar la tasa de retención de clientes al 95% mediante programas de fidelización",
]

export function StrategicPlanningSection() {
  return (
    <section id="estrategia" className="relative py-32 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Planeación Estratégica
          </span>
          <h2 className="text-balance text-4xl font-bold md:text-5xl">Nuestra Dirección Estratégica</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-transparent shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  Desarrollar soluciones de software innovadoras y de alta calidad que transformen digitalmente a las
                  empresas, impulsando su competitividad y crecimiento sostenible a través de tecnología de vanguardia y
                  un servicio personalizado que supere las expectativas de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-transparent shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-accent-foreground shadow-lg">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  Ser reconocidos como la empresa líder en desarrollo de software en Latinoamérica para el año 2030,
                  destacando por nuestra capacidad de innovación, excelencia técnica y el impacto positivo que generamos
                  en la transformación digital de la región.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Heart className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl">Valores Corporativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {values.map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 p-5 text-center hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <h4 className="mb-2 text-lg font-bold text-primary">{value.name}</h4>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Flag className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl">Objetivos Institucionales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 rounded-lg border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 p-5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-base font-bold text-primary-foreground shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-base font-medium text-muted-foreground leading-relaxed">{objective}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
