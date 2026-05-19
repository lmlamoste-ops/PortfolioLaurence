import { HeroSection, AboutSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ContactSection, Footer } from "@/components/portfolio/contact-section"
import { AnimatedBackground } from "@/components/portfolio/animated-background"
import { Sidebar } from "@/components/portfolio/sidebar"

export default function Portfolio() {
  return (
    <>
      <AnimatedBackground />
      <Sidebar />
      <main className="ml-20 md:ml-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
