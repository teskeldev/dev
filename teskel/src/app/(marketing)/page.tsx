import { HeroSection } from "@/components/marketing/hero";
import { WorkspaceMockup } from "@/components/marketing/workspace-mockup";
import { SocialProof } from "@/components/marketing/social-proof";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { MarketplacePreview } from "@/components/marketing/marketplace-preview";
import { AISection } from "@/components/marketing/ai-section";
import { CreatorEconomySection } from "@/components/marketing/creator-economy";
import { TeamsSection } from "@/components/marketing/teams-section";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { FAQSection } from "@/components/marketing/faq";
import { CTABanner } from "@/components/marketing/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkspaceMockup />
      <SocialProof />
      <FeatureGrid />
      <MarketplacePreview />
      <AISection />
      <CreatorEconomySection />
      <TeamsSection />
      <PricingCards />
      <FAQSection />
      <CTABanner />
    </>
  );
}
