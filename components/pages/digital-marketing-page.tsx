"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DigitalMarketingHeroSection } from "@/components/sections/digital-marketing-hero-section";
import { DigitalMarketingIntroSection } from "@/components/sections/digital-marketing-intro-section";
import { DigitalMarketingShowcaseSection } from "@/components/sections/digital-marketing-showcase-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";

export function DigitalMarketingPage() {
  return (
    <div className="digital-marketing-page flex min-h-full flex-1 flex-col">
      <div className="digital-marketing-hero-block">
        <SiteHeader inBanner />
        <DigitalMarketingHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <DigitalMarketingIntroSection />
        <DigitalMarketingShowcaseSection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
