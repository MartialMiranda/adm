"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Eye, Heart, Flag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// Importamos los componentes que convertimos en el paso 2
import { SwotSection } from "./swot-section"
import { PorterSection } from "./porter-section"
import { BcgSection } from "./bcg-section"

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
  const [activeTab, setActiveTab] = useState("identidad")

  const tabs = [
    { id: "identidad", label: "Identidad & Objetivos" },
    { id: "foda", label: "Análisis FODA" },
    { id: "porter", label: "5 Fuerzas Porter" },
    { id: "bcg", label: "Matriz BCG" },
  ]

  return (
    // CORRECCIÓN AQUÍ: Se cambió 'bg-muted/30' por 'bg-transparent'
    // Esto elimina el recuadro gris y deja ver las partículas limpiamente.
    <section id="estrategia" className="relative py-24 px-6 bg-transparent min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Inteligencia Corporativa
          </span>
          <h2 className="text-balance text-4xl font-bold md:text-5xl">Dirección Estratégica</h2>
          <div className="mt-4 h-1 w-24 mx-auto bg-primary rounded-full"></div>
        </motion.div>

        {/* Sistema de Pestañas (Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`text-lg px-8 py-6 rounded-full transition-all duration-300 ${
                activeTab === tab.id 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105" 
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/50 bg-background/50 backdrop-blur-sm" // Agregué un pequeño fondo al botón inactivo para legibilidad
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Contenido Dinámico */}
        {/* Aquí mantenemos el bg-background/50 para que el TEXTO sea legible (efecto vidrio), 
            pero el fondo general de la sección ya es transparente */}
        <div className="min-h-[600px] bg-background/50 backdrop-blur-sm rounded-3xl border border-border/50 p-4 md:p-8 shadow-2xl">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: IDENTIDAD */}
            {activeTab === "identidad" && (
              <motion.div
                key="identidad"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-8 lg:grid-cols-2 mb-12">
                  <Card className="h-full border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-transparent">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                        <Target className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-3xl">Misión</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                        Desarrollar soluciones de software innovadoras y de alta calidad que transformen digitalmente a las empresas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="h-full border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-transparent">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary text-accent-foreground">
                        <Eye className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-3xl">Visión</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                        Ser reconocidos como la empresa líder en desarrollo de software en Latinoamérica para el año 2030.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mb-12">
                   <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                     <Heart className="text-primary"/> Valores Corporativos
                   </h3>
                   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                      {values.map((value) => (
                        <div key={value.name} className="rounded-xl border border-primary/20 bg-card/60 p-4 text-center hover:border-primary/50 transition-colors">
                           <h4 className="font-bold text-primary mb-1">{value.name}</h4>
                           <p className="text-xs text-muted-foreground">{value.description}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div>
                   <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                     <Flag className="text-primary"/> Objetivos Estratégicos
                   </h3>
                   <div className="space-y-3">
                      {objectives.map((obj, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
                           <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                             {i + 1}
                           </span>
                           <p className="text-muted-foreground">{obj}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: FODA */}
            {activeTab === "foda" && (
              <motion.div
                key="foda"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <SwotSection />
              </motion.div>
            )}

            {/* TAB 3: PORTER */}
            {activeTab === "porter" && (
              <motion.div
                key="porter"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <PorterSection />
              </motion.div>
            )}

            {/* TAB 4: BCG */}
            {activeTab === "bcg" && (
              <motion.div
                key="bcg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <BcgSection />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}