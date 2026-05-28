import { HeroSection } from "@/components/marketing/hero";
import { WorkspaceMockup } from "@/components/marketing/workspace-mockup";
import { SocialProof } from "@/components/marketing/social-proof";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { Testimonials } from "@/components/marketing/testimonials";
import { FrontierSection } from "@/components/marketing/frontier-section";
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
      <Testimonials />
      <FrontierSection />
      <PricingCards />
      <FAQSection />
      <CTABanner />
    </>
  );
}
