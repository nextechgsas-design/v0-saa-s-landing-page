"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FlowDiagram } from "@/components/flow-diagram"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AutomationSection } from "@/components/automation-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <HeroSection />
        <FlowDiagram />
        <ProblemSection />
        <SolutionSection />
        <AutomationSection />
        <UseCasesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
