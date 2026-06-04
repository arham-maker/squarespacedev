"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AllInOneCtaSection } from "@/components/sections/all-in-one-cta-section";
import { AllInOneFeaturesSection } from "@/components/sections/all-in-one-features-section";
import { AllInOneHeroSection } from "@/components/sections/all-in-one-hero-section";
import { AllInOneSoftwareSection } from "@/components/sections/all-in-one-software-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";

export function YourAllInOnePage() {
  return (
    <div className="all-in-one-page flex min-h-full flex-1 flex-col">
      <div className="all-in-one-hero-block">
        <SiteHeader inBanner />
        <AllInOneHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <AllInOneSoftwareSection />
        <AllInOneFeaturesSection />
        <AllInOneCtaSection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
