"use client"

import { motion } from "framer-motion"
import { User, Users, Code, Palette, Database, HeadphonesIcon, TrendingUp } from "lucide-react"

const orgData = {
  ceo: { name: "Carlos Mendoza", title: "Director General (CEO)", icon: User },
  departments: [
    {
      head: { name: "Ana García", title: "Gerente de Tecnología (CTO)", icon: Code },
      teams: [
        { name: "Equipo Frontend", members: 4 },
        { name: "Equipo Backend", members: 5 },
        { name: "DevOps", members: 2 },
      ],
    },
    {
      head: { name: "Roberto Pérez", title: "Gerente de Diseño", icon: Palette },
      teams: [
        { name: "UX Research", members: 2 },
        { name: "UI Design", members: 3 },
      ],
    },
    {
      head: { name: "María López", title: "Gerente de Datos", icon: Database },
      teams: [
        { name: "Data Engineering", members: 3 },
        { name: "Data Science", members: 2 },
      ],
    },
    {
      head: { name: "Juan Vargas", title: "Gerente Comercial", icon: TrendingUp },
      teams: [
        { name: "Ventas", members: 4 },
        { name: "Marketing", members: 3 },
      ],
    },
    {
      head: { name: "Patricia Ríos", title: "Gerente de Soporte", icon: HeadphonesIcon },
      teams: [
        { name: "Soporte Técnico", members: 4 },
        { name: "Customer Success", members: 2 },
      ],
    },
  ],
}

export function OrgChartSection() {
  return (
    <section id="organizacion" className="relative py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Estructura Organizacional
          </span>
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Organigrama de NexusCode</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Equipo multidisciplinario de más de 35 profesionales especializados
          </p>
        </motion.div>

        {/* CEO Node */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative mb-12"
          >
            <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-primary blur-lg opacity-50" />
            <div className="relative flex flex-col items-center rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10 p-8 shadow-2xl">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <User className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">{orgData.ceo.name}</h3>
              <p className="text-base font-semibold text-primary">{orgData.ceo.title}</p>
            </div>
          </motion.div>

          {/* Connection Line */}
          <div className="h-12 w-1 bg-gradient-to-b from-primary to-transparent" />
          <div className="h-1 w-full max-w-6xl bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Departments */}
          <div className="mt-4 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {orgData.departments.map((dept, index) => (
              <motion.div
                key={dept.head.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Connection */}
                <div className="h-8 w-1 bg-gradient-to-b from-primary/50 to-transparent" />

                {/* Department Head */}
                <div className="group relative w-full">
                  <div className="rounded-xl border-2 border-primary/40 bg-gradient-to-br from-card to-card/80 p-6 text-center backdrop-blur-sm transition-all hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                      <dept.head.icon className="h-7 w-7" />
                    </div>
                    <h4 className="text-base font-bold">{dept.head.name}</h4>
                    <p className="text-sm font-semibold text-primary/80">{dept.head.title}</p>
                  </div>
                </div>

                {/* Teams */}
                <div className="mt-6 space-y-3 w-full">
                  {dept.teams.map((team) => (
                    <motion.div
                      key={team.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-3 hover:border-primary/50 hover:shadow-md transition-all"
                    >
                      <span className="text-sm font-semibold text-foreground">{team.name}</span>
                      <span className="flex items-center gap-2 text-primary font-semibold text-base">
                        <Users className="h-4 w-4" />
                        {team.members} personas
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
