"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="relative border-t border-border/50 bg-transparent py-16 px-6">
      <div className="container mx-auto">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-foreground">Nos encuentras aquí</h3>
          <div className="relative h-96 w-full overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl">
            {/* CORRECCIÓN VISUAL: */}
            {/* Se eliminó 'grayscale' (blanco y negro). */}
            {/* Se añadió 'opacity-90 hover:opacity-100' para un efecto sutil de "enfoque" al pasar el mouse. */}
            <iframe
              src="https://maps.google.com/maps?q=Torre+Mercantil+Santa+Cruz&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            {/* Tarjeta flotante del mapa */}
            <div className="absolute bottom-6 left-6 rounded-lg border-2 border-primary/30 bg-card/90 p-4 backdrop-blur-md shadow-lg max-w-xs">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold text-foreground">NexusCode S.R.L.</p>
                  <p className="text-sm text-muted-foreground">Calle René Moreno, Torre Mercantil</p>
                  <p className="text-sm text-muted-foreground">Piso 12, Oficina 1201</p>
                  <p className="text-sm text-muted-foreground">Santa Cruz de la Sierra, Bolivia</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-lg bg-primary opacity-50" />
                <div className="absolute inset-1 flex items-center justify-center rounded-md bg-background text-lg font-bold text-primary">
                  N
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-foreground">
                Nexus<span className="text-primary">Code</span>
              </span>
            </div>
            <p className="mb-4 text-base text-gray-600 dark:text-muted-foreground font-medium">
              Transformamos ideas en soluciones digitales innovadoras. Tu socio estratégico en desarrollo de software.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-foreground">Servicios</h4>
            <ul className="space-y-2 text-base text-gray-600 dark:text-muted-foreground font-medium">
              <li>
                <a href="#servicios" className="hover:text-primary">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary">
                  Desarrollo Móvil
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary">
                  Sistemas Empresariales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary">
                  Soluciones Cloud
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary">
                  Inteligencia Artificial
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-foreground">Empresa</h4>
            <ul className="space-y-2 text-base text-gray-600 dark:text-muted-foreground font-medium">
              <li>
                <a href="#empresa" className="hover:text-primary">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#organizacion" className="hover:text-primary">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#estrategia" className="hover:text-primary">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a href="#foda" className="hover:text-primary">
                  Análisis FODA
                </a>
              </li>
              <li>
                <a href="#bcg" className="hover:text-primary">
                  Portafolio
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-foreground">Contacto</h4>
            <ul className="space-y-3 text-base text-gray-600 dark:text-muted-foreground font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Torre Mercantil Santa Cruz, Piso 12, Of. 1201</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+591 74177503</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@nexuscode.bo</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-border/50 pt-8 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-muted-foreground">
            © 2025 NexusCode S.R.L. Todos los derechos reservados. | NIT: 1234567012
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-muted-foreground">
            Proyecto académico - Aspectos Administrativos, Legales y Comerciales de Empresa
          </p>
        </motion.div>
      </div>
    </footer>
  )
}