"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Lightbulb, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const swotData = {
  strengths: [
    "Equipo técnico altamente capacitado con certificaciones internacionales",
    "Metodologías ágiles implementadas (Scrum, Kanban)",
    "Portafolio diversificado de soluciones tecnológicas",
    "Alta tasa de retención de clientes (92%)",
    "Infraestructura cloud moderna y escalable",
  ],
  weaknesses: [
    "Dependencia de mercado local boliviano",
    "Limitada presencia de marca en redes sociales",
    "Falta de productos propios tipo SaaS",
    "Rotación de personal técnico junior",
    "Procesos de documentación por mejorar",
  ],
  opportunities: [
    "Crecimiento del mercado de transformación digital post-pandemia",
    "Demanda creciente de soluciones de IA en empresas",
    "Expansión a mercados latinoamericanos en crecimiento",
    "Alianzas estratégicas con proveedores cloud",
    "Nearshoring como alternativa para empresas estadounidenses",
  ],
  threats: [
    "Competencia de empresas internacionales con precios bajos",
    "Escasez de talento técnico especializado en el mercado",
    "Inestabilidad económica regional",
    "Rápida obsolescencia tecnológica",
    "Ciberataques y brechas de seguridad",
  ],
}

const strategies = [
  {
    type: "FO (Fortalezas-Oportunidades)",
    title: "Estrategia de Expansión Regional",
    description:
      "Aprovechar el equipo técnico certificado y la alta retención de clientes para expandir operaciones a Perú y Chile, capitalizando la demanda de transformación digital en la región andina.",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    type: "DO (Debilidades-Oportunidades)",
    title: "Desarrollo de Productos SaaS",
    description:
      "Crear productos de software propios para el mercado empresarial, reduciendo la dependencia de proyectos a medida y aprovechando la demanda de soluciones de IA como plataforma de chatbots empresariales.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    type: "FA (Fortalezas-Amenazas)",
    title: "Programa de Retención de Talento",
    description:
      "Implementar un programa de desarrollo profesional con certificaciones y plan de carrera para retener talento técnico, diferenciándonos de la competencia que ofrece solo salarios.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    type: "DA (Debilidades-Amenazas)",
    title: "Fortalecimiento de Marca Digital",
    description:
      "Invertir en marketing digital y presencia en redes sociales técnicas (LinkedIn, GitHub) para posicionar la marca y atraer tanto clientes como talento técnico en un mercado competitivo.",
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/30",
  },
  {
    type: "Integrada",
    title: "Centro de Innovación e I+D",
    description:
      "Crear un laboratorio de innovación que investigue tecnologías emergentes (IA, Blockchain, IoT), mejore la documentación de procesos y genere contenido técnico para posicionar a NexusCode como líder de opinión.",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
  },
]

export function SwotSection() {
  return (
    <section id="foda" className="relative py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Análisis Estratégico
          </span>
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">Análisis FODA</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-medium">
            Evaluación integral de factores internos y externos para la toma de decisiones estratégicas
          </p>
        </motion.div>

        {/* SWOT Matrix */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Strengths */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-green-500/50 bg-gradient-to-br from-green-500/15 to-transparent shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/30 to-green-400/20 text-green-500 shadow-md">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-500">Fortalezas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {swotData.strengths.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground font-medium">
                      <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Weaknesses */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-red-500/50 bg-gradient-to-br from-red-500/15 to-transparent shadow-lg hover:shadow-xl hover:shadow-red-500/20 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/30 to-red-400/20 text-red-500 shadow-md">
                    <TrendingDown className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-red-500">Debilidades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {swotData.weaknesses.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground font-medium">
                      <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Opportunities */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/15 to-transparent shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-400/20 text-blue-500 shadow-md">
                    <Lightbulb className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-500">Oportunidades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {swotData.opportunities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground font-medium">
                      <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Threats */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="h-full border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/15 to-transparent shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-400/20 text-amber-500 shadow-md">
                    <AlertTriangle className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-amber-500">Amenazas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {swotData.threats.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground font-medium">
                      <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Strategies */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="mb-8 text-center text-2xl font-bold">Estrategias Derivadas del FODA</h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${strategy.borderColor} bg-gradient-to-br ${strategy.color}`}>
                  <CardHeader>
                    <span className="mb-2 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {strategy.type}
                    </span>
                    <CardTitle className="text-lg">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
