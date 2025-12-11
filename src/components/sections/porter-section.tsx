"use client"

import { motion } from "framer-motion"
import { Users, Package, ShoppingCart, Sword, Building } from "lucide-react"

const porterForces = [
  {
    icon: Sword,
    title: "Rivalidad entre Competidores",
    level: "Alta",
    levelColor: "bg-red-500",
    description:
      "El mercado de desarrollo de software en Bolivia tiene múltiples competidores locales y empresas internacionales con presencia remota.",
    factors: [
      "Más de 50 empresas de desarrollo en santa cruz",
      "Competencia en precio de freelancers",
      "Diferenciación por especialización técnica",
    ],
  },
  {
    icon: Package,
    title: "Amenaza de Nuevos Entrantes",
    level: "Media-Alta",
    levelColor: "bg-amber-500",
    description:
      "Las barreras de entrada son relativamente bajas en tecnología, aunque la especialización y reputación son difíciles de construir.",
    factors: [
      "Baja inversión inicial requerida",
      "Disponibilidad de herramientas open source",
      "Dificultad en construir portafolio de clientes",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Poder de Negociación de Clientes",
    level: "Media",
    levelColor: "bg-yellow-500",
    description:
      "Los clientes corporativos tienen poder de negociación, pero valoran la calidad y confiabilidad sobre el precio.",
    factors: [
      "Clientes pueden comparar múltiples proveedores",
      "Costos de cambio moderados por documentación",
      "Dependencia de soluciones a medida reduce poder",
    ],
  },
  {
    icon: Users,
    title: "Poder de Negociación de Proveedores",
    level: "Baja",
    levelColor: "bg-green-500",
    description:
      "Los principales proveedores son plataformas cloud (AWS, GCP, Azure) con precios competitivos y alternativas disponibles.",
    factors: [
      "Múltiples opciones de proveedores cloud",
      "Herramientas de desarrollo mayormente gratuitas",
      "Talento humano es el recurso más escaso",
    ],
  },
  {
    icon: Building,
    title: "Amenaza de Productos Sustitutos",
    level: "Media",
    levelColor: "bg-yellow-500",
    description: "Las plataformas no-code/low-code y SaaS genéricos representan alternativas para soluciones básicas.",
    factors: [
      "Plataformas no-code como Bubble, Webflow",
      "SaaS genéricos (Salesforce, HubSpot)",
      "IA generativa para código básico",
    ],
  },
]

const porterStrategies = [
  {
    title: "Diferenciación por Especialización Vertical",
    description:
      "Enfocarse en industrias específicas (fintech, salud, logística) para crear soluciones especializadas que sean difíciles de replicar por competidores generalistas o plataformas no-code.",
    impact: "Reduce rivalidad competitiva y amenaza de sustitutos",
  },
  {
    title: "Ecosistema de Partners Tecnológicos",
    description:
      "Establecer alianzas estratégicas con proveedores cloud (AWS Partner, Google Cloud Partner) para acceder a recursos, capacitación y referencias de clientes que fortalezcan nuestra posición.",
    impact: "Reduce poder de proveedores y crea barreras de entrada",
  },
  {
    title: "Modelo de Suscripción y Mantenimiento",
    description:
      "Ofrecer contratos de mantenimiento y soporte continuo que generen ingresos recurrentes y aumenten los costos de cambio para los clientes.",
    impact: "Reduce poder de clientes y rivalidad competitiva",
  },
  {
    title: "Academia NexusCode de Talento",
    description:
      "Crear un programa de formación de desarrolladores junior que asegure flujo de talento calificado y reduzca dependencia del mercado laboral escaso.",
    impact: "Reduce poder de proveedores (talento) y amenaza de entrantes",
  },
  {
    title: "Integración de IA en Servicios Core",
    description:
      "Incorporar capacidades de IA generativa y automatización en nuestras soluciones para ofrecer valor agregado que las plataformas no-code básicas no pueden igualar.",
    impact: "Reduce amenaza de sustitutos y nuevos entrantes",
  },
]

export function PorterSection() {
  return (
    <div className="relative py-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Análisis Competitivo
          </span>
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl text-gray-900 dark:text-foreground">
            Modelo de las 5 Fuerzas de Porter
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-muted-foreground">
            Análisis del entorno competitivo para identificar oportunidades estratégicas
          </p>
        </motion.div>

        {/* Porter Diagram */}
        <div className="mb-16">
          <div className="relative mx-auto max-w-4xl">
            {/* Center - Rivalry (AHORA CONTIENE LA DESCRIPCIÓN) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mb-8 w-full max-w-md"
            >
              <div className="relative rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-white to-gray-50 dark:from-card dark:to-card/50 p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all">
                <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-primary opacity-20 blur-xl" />
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                    <Sword className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-foreground">Rivalidad entre Competidores</h3>
                  <span className="inline-block rounded-full bg-red-500/20 px-4 py-2 text-base font-bold text-red-500 mb-4">
                    Alta
                  </span>
                  
                  {/* CORRECCIÓN: Agregamos la descripción y factores que faltaban */}
                  <p className="mb-3 text-base text-gray-600 dark:text-muted-foreground font-medium">
                    {porterForces[0].description}
                  </p>
                  <ul className="space-y-2 text-left bg-background/50 p-3 rounded-lg border border-border/50">
                    {porterForces[0].factors.map((factor, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-muted-foreground font-medium">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {factor}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </motion.div>

            {/* Surrounding Forces */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {porterForces.slice(1).map((force, index) => (
                <motion.div
                  key={force.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-xl border-2 border-gray-200 dark:border-border/60 bg-white dark:bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-primary/20 text-primary shadow-md">
                      <force.icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`rounded-full ${force.levelColor}/20 px-3 py-1 text-sm font-bold`}
                      style={{ color: force.levelColor.replace("bg-", "") }}
                    >
                      {force.level}
                    </span>
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-foreground">{force.title}</h4>
                  <p className="mb-3 text-base text-gray-600 dark:text-muted-foreground font-medium">{force.description}</p>
                  <ul className="space-y-2">
                    {force.factors.map((factor, i) => (
                      <li key={i} className="flex items-start gap-2 text-base text-gray-600 dark:text-muted-foreground font-medium">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-foreground">Estrategias Competitivas Derivadas</h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {porterStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border-2 border-gray-200 dark:border-border/60 bg-white/50 dark:bg-primary/12 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-base font-bold text-primary">
                  {index + 1}
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-foreground">{strategy.title}</h4>
                <p className="mb-3 text-base text-gray-600 dark:text-muted-foreground font-medium">{strategy.description}</p>
                <div className="rounded-lg bg-accent/10 px-3 py-2">
                  <span className="text-xs font-medium text-accent">{strategy.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}