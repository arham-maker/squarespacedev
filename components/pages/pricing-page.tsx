"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PricingHeroSection } from "@/components/sections/pricing-hero-section";
import { PricingPlansSection } from "@/components/sections/pricing-plans-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";

export function PricingPage() {
  return (
    <div className="pricing-page flex min-h-full flex-1 flex-col">
      <div className="pricing-hero-block">
        <SiteHeader inBanner />
        <PricingHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <PricingPlansSection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
