"use client"

import { config, library } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faCow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { Dog, HelpCircle, Star } from "lucide-react"

config.autoAddCss = false
library.add(faCow)

const bcgProducts = [
  {
    name: "Desarrollo Web",
    quadrant: "Estrella",
    icon: Star,
    growth: 25,
    share: 35,
    color: "bg-yellow-500",
    description:
      "Mercado en alto crecimiento con fuerte participación. Requiere inversión continua para mantener liderazgo.",
    revenue: "$480,000/año",
  },
  {
    name: "Apps Móviles",
    quadrant: "Estrella",
    icon: Star,
    growth: 30,
    share: 28,
    color: "bg-yellow-500",
    description: "Demanda creciente, posición competitiva sólida. Potencial para convertirse en Vaca.",
    revenue: "$320,000/año",
  },
  {
    name: "Sistemas ERP",
    quadrant: "Vaca",
    icon: "cow",
    growth: 5,
    share: 40,
    color: "bg-green-500",
    description: "Mercado maduro con alta participación. Genera flujo de caja estable con mínima inversión.",
    revenue: "$380,000/año",
  },
  {
    name: "Consultoría Cloud",
    quadrant: "Interrogación",
    icon: HelpCircle,
    growth: 35,
    share: 12,
    color: "bg-blue-500",
    description: "Mercado de alto crecimiento pero baja participación. Requiere decisión de invertir o abandonar.",
    revenue: "$150,000/año",
  },
  {
    name: "Soluciones IA",
    quadrant: "Interrogación",
    icon: HelpCircle,
    growth: 45,
    share: 8,
    color: "bg-blue-500",
    description: "Mercado emergente con gran potencial. Oportunidad de convertirse en estrella con inversión adecuada.",
    revenue: "$120,000/año",
  },
  {
    name: "Mantenimiento Legacy",
    quadrant: "Perro",
    icon: Dog,
    growth: -5,
    share: 15,
    color: "bg-red-500",
    description: "Mercado en declive con participación decreciente. Evaluar desinversión gradual.",
    revenue: "$90,000/año",
  },
]

const bcgStrategies = [
  {
    title: "Inversión Agresiva en Soluciones IA",
    description:
      "Destinar el 30% de las utilidades a desarrollar capacidades de IA, contratando 3 especialistas y creando un laboratorio de innovación. Objetivo: pasar de Interrogación a Estrella en 2 años.",
    quadrant: "Interrogación → Estrella",
    investment: "$180,000/año",
  },
  {
    title: "Consolidación de Desarrollo Web",
    description:
      "Mantener la inversión en desarrollo web para defender la posición de estrella. Expandir a nichos específicos (e-commerce, SaaS) para aumentar participación de mercado.",
    quadrant: "Estrella (mantener)",
    investment: "$120,000/año",
  },
  {
    title: "Ordeño de Sistemas ERP",
    description:
      "Optimizar costos operativos en ERP mediante automatización y outsourcing de soporte nivel 1. Utilizar el flujo de caja generado para financiar productos interrogación.",
    quadrant: "Vaca (optimizar)",
    investment: "$40,000/año",
  },
  {
    title: "Desinversión Gradual en Legacy",
    description:
      "Migrar clientes de mantenimiento legacy hacia soluciones modernas. Reducir equipo dedicado en 50% y redirigir talento a áreas de crecimiento.",
    quadrant: "Perro (desinvertir)",
    investment: "-$30,000/año (ahorro)",
  },
  {
    title: "Escalamiento de Consultoría Cloud",
    description:
      "Obtener certificaciones AWS Professional y Google Cloud Architect para aumentar credibilidad. Establecer alianzas con proveedores cloud para acceso a leads cualificados.",
    quadrant: "Interrogación (invertir selectivamente)",
    investment: "$80,000/año",
  },
]

export function BcgSection() {
  return (
    <section id="bcg" className="relative py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Análisis de Portafolio
          </span>
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Matriz BCG de Productos</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Clasificación estratégica de nuestras líneas de negocio según crecimiento y participación de mercado
          </p>
        </motion.div>

        {/* BCG Matrix Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 mx-auto max-w-4xl"
        >
          <div className="relative aspect-square max-h-[500px] w-full rounded-2xl border border-border/50 bg-card/50 p-4">
            {/* Grid */}
            <div className="absolute inset-4 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Estrellas (Alta participación, Alto crecimiento) */}
              <div className="relative rounded-tl-xl bg-yellow-500/10 p-4">
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-yellow-500">Estrellas</span>
                </div>
                <div className="flex h-full flex-col items-center justify-center gap-2 pt-8">
                  {bcgProducts
                    .filter((p) => p.quadrant === "Estrella")
                    .map((p) => (
                      <div key={p.name} className="rounded-lg bg-yellow-500/20 px-3 py-1.5 text-xs font-medium">
                        {p.name}
                      </div>
                    ))}
                </div>
              </div>

              {/* Interrogación (Baja participación, Alto crecimiento) */}
              <div className="relative rounded-tr-xl bg-blue-500/10 p-4">
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <span className="text-sm font-semibold text-blue-500">Interrogación</span>
                  <HelpCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex h-full flex-col items-center justify-center gap-2 pt-8">
                  {bcgProducts
                    .filter((p) => p.quadrant === "Interrogación")
                    .map((p) => (
                      <div key={p.name} className="rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs font-medium">
                        {p.name}
                      </div>
                    ))}
                </div>
              </div>

              {/* Vacas (Alta participación, Bajo crecimiento) */}
              <div className="relative rounded-bl-xl bg-green-500/10 p-4">
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <FontAwesomeIcon icon="cow" />
                  <span className="text-sm font-semibold text-green-500">Vaca</span>
                </div>
                <div className="flex h-full flex-col items-center justify-center gap-2 pb-8">
                  {bcgProducts
                    .filter((p) => p.quadrant === "Vaca")
                    .map((p) => (
                      <div key={p.name} className="rounded-lg bg-green-500/20 px-3 py-1.5 text-xs font-medium">
                        {p.name}
                      </div>
                    ))}
                </div>
              </div>

              {/* Perros (Baja participación, Bajo crecimiento) */}
              <div className="relative rounded-br-xl bg-red-500/10 p-4">
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span className="text-sm font-semibold text-red-500">Perros</span>
                  <Dog className="h-5 w-5 text-red-500" />
                </div>
                <div className="flex h-full flex-col items-center justify-center gap-2 pb-8">
                  {bcgProducts
                    .filter((p) => p.quadrant === "Perro")
                    .map((p) => (
                      <div key={p.name} className="rounded-lg bg-red-500/20 px-3 py-1.5 text-xs font-medium">
                        {p.name}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Axis Labels */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-muted-foreground">
              Crecimiento del Mercado ↑
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground">
              Participación Relativa de Mercado →
            </div>
          </div>
        </motion.div>

        {/* Product Details */}
        <div className="mb-16 grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {bcgProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-xl border-2 border-border/60 bg-gradient-to-br from-card to-card/60 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${product.color}/30 ${product.color}/20 shadow-md`}>
                  {typeof product.icon === "string" ? (
                    <FontAwesomeIcon
                      icon={product.icon as any}
                      className={`h-6 w-6`}
                      style={{ color: product.color.replace("bg-", "").replace("-500", "") }}
                    />
                  ) : (
                    <product.icon
                      className={`h-6 w-6`}
                      style={{ color: product.color.replace("bg-", "").replace("-500", "") }}
                    />
                  )}
                </div>
                <span className={`rounded-full ${product.color}/20 px-3 py-1 text-sm font-bold`}>
                  {product.quadrant}
                </span>
              </div>
              <h4 className="mb-2 text-lg font-bold">{product.name}</h4>
              <p className="mb-3 text-base text-muted-foreground font-medium">{product.description}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-gradient-to-br from-primary/10 to-transparent p-3 border border-primary/20">
                  <div className="text-sm text-muted-foreground font-medium">Crecimiento</div>
                  <div className="text-lg font-bold text-primary">{product.growth}%</div>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-accent/10 to-transparent p-3 border border-accent/20">
                  <div className="text-sm text-muted-foreground font-medium">Participación</div>
                  <div className="text-lg font-bold text-accent">{product.share}%</div>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-green-500/10 to-transparent p-3 border border-green-500/20">
                  <div className="text-sm text-muted-foreground font-medium">Ingresos</div>
                  <div className="text-lg font-bold text-green-500">{product.revenue.split("/")[0]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategies */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="mb-8 text-center text-2xl font-bold">Estrategias de Portafolio BCG</h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {bcgStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border-2 border-border/60 bg-gradient-to-br from-primary/15 to-transparent p-6 hover:shadow-lg transition-all"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <h4 className="mb-2 text-lg font-bold">{strategy.title}</h4>
                <p className="mb-3 text-base text-muted-foreground font-medium">{strategy.description}</p>
                <div className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2">
                  <span className="text-xs text-muted-foreground">{strategy.quadrant}</span>
                  <span className="text-xs font-semibold text-primary">{strategy.investment}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
