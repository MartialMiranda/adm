"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export function FooterSection() {
  return (
    // CORRECCIÓN: Se cambió 'bg-muted/30' por 'bg-transparent'
    <footer className="relative border-t border-border/50 bg-transparent py-16 px-6">
      <div className="container mx-auto">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="mb-6 text-center text-3xl font-bold">Nos encuentras aquí</h3>
          <div className="relative h-96 w-full overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474.89874972859246!2d-63.183946001207914!3d-17.782765484017798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e80c45fa70fd%3A0xb773db2779a79946!2sCentro%20Comercial%20Casco%20Viejo!5e0!3m2!1ses!2sbo!4v1764308264331!5m2!1ses!2sbo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Tarjeta flotante del mapa: Se mantiene bg-card/90 para legibilidad sobre el mapa */}
            <div className="absolute bottom-6 left-6 rounded-lg border-2 border-primary/30 bg-card/90 p-4 backdrop-blur-md shadow-lg">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-bold text-foreground">NexusCode S.R.L.</p>
                  <p className="text-sm text-muted-foreground">Centro Comercial Casco Viejo</p>
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
              <span className="text-xl font-bold">
                Nexus<span className="text-primary">Code</span>
              </span>
            </div>
            <p className="mb-4 text-base text-muted-foreground font-medium">
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
            <h4 className="mb-4 text-lg font-bold">Servicios</h4>
            <ul className="space-y-2 text-base text-muted-foreground font-medium">
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
            <h4 className="mb-4 text-lg font-bold">Empresa</h4>
            <ul className="space-y-2 text-base text-muted-foreground font-medium">
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
            <h4 className="mb-4 text-lg font-bold">Contacto</h4>
            <ul className="space-y-3 text-base text-muted-foreground font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Av. Junin #1440, Edificio Alameda, Piso 12, Santa Cruz de la Sierra, Bolivia</span>
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
          <p className="text-sm text-muted-foreground">
            © 2025 NexusCode S.R.L. Todos los derechos reservados. | NIT: 1234567012
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Proyecto académico - Aspectos Administrativos, Legales y Comerciales de Empresa
          </p>
        </motion.div>
      </div>
    </footer>
  )
}