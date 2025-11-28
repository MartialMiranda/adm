import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { CompanyInfoSection } from "@/components/sections/company-info-section"
import { ServicesSection } from "@/components/sections/services-section"
import { OrgChartSection } from "@/components/sections/org-chart-section"
import { StrategicPlanningSection } from "@/components/sections/strategic-planning-section"
import { SwotSection } from "@/components/sections/swot-section"
import { PorterSection } from "@/components/sections/porter-section"
import { BcgSection } from "@/components/sections/bcg-section"
import { FooterSection } from "@/components/sections/footer-section"
import { MouseFollower } from "@/components/mouse-follower"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="relative min-h-screen overflow-x-hidden bg-background">
        <ParticleBackground />
        <MouseFollower />
        <Navbar />
        <main>
          <HeroSection />
          <CompanyInfoSection />
          <ServicesSection />
          <OrgChartSection />
          <StrategicPlanningSection />
          <SwotSection />
          <PorterSection />
          <BcgSection />
        </main>
        <FooterSection />
      </div>
    </ThemeProvider>
  )
}
