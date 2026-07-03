import { HeroSection } from '@/components/home/HeroSection'
import { StatsBar } from '@/components/home/StatsBar'
import { FeatureCards } from '@/components/home/FeatureCards'
import { HowItWorks } from '@/components/home/HowItWorks'
import { TemplateCarousel } from '@/components/home/TemplateCarousel'
import { TrustBadges } from '@/components/home/TrustBadges'
import { FAQ } from '@/components/home/FAQ'
import { CTASection } from '@/components/home/CTASection'
import { RevealSection } from '@/components/home/RevealSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <RevealSection>
        <StatsBar />
      </RevealSection>
      <RevealSection>
        <FeatureCards />
      </RevealSection>
      <RevealSection>
        <HowItWorks />
      </RevealSection>
      <RevealSection>
        <TemplateCarousel />
      </RevealSection>
      <RevealSection>
        <TrustBadges />
      </RevealSection>
      <RevealSection>
        <FAQ />
      </RevealSection>
      <RevealSection>
        <CTASection />
      </RevealSection>
    </>
  )
}
