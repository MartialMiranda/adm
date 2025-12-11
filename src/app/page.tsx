import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { CompanyInfoSection } from "@/components/sections/company-info-section"
import { ServicesSection } from "@/components/sections/services-section"
import { OrgChartSection } from "@/components/sections/org-chart-section"
// Importamos SOLO la sección maestra de estrategia
import { StrategicPlanningSection } from "@/components/sections/strategic-planning-section"
import { FooterSection } from "@/components/sections/footer-section"
import { MouseFollower } from "@/components/mouse-follower"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div className="relative min-h-screen overflow-x-hidden bg-background">
        <ParticleBackground />
        <MouseFollower />
        <Navbar />
        <main>
          <HeroSection />
          <CompanyInfoSection />
          <ServicesSection />
          <OrgChartSection />
          {/* Esta sección ahora es el "Contenedor Maestro".
             Dentro de ella ya se cargan el FODA, Porter y BCG cuando haces clic en los botones.
          */}
          <StrategicPlanningSection />
        </main>
        <FooterSection />
      </div>
    </ThemeProvider>
  )
}