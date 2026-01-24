import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { FeaturesSection } from "@/components/features-section"
import { SocialProof } from "@/components/social-proof"
import { HowItWorks } from "@/components/how-it-works"
import { GallerySection } from "@/components/gallery-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />
      <SocialProof />
      <HowItWorks />
      <GallerySection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
