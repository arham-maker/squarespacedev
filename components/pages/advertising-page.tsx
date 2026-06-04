"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AdvertisingEngagementSection } from "@/components/sections/advertising-engagement-section";
import { AdvertisingHeroSection } from "@/components/sections/advertising-hero-section";
import { AdvertisingIntroSection } from "@/components/sections/advertising-intro-section";
import { AdvertisingPricingSection } from "@/components/sections/advertising-pricing-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";

export function AdvertisingPage() {
  return (
    <div className="advertising-page flex min-h-full flex-1 flex-col">
      <div className="advertising-hero-block">
        <SiteHeader inBanner />
        <AdvertisingHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <AdvertisingIntroSection />
        <AdvertisingPricingSection />
        <AdvertisingEngagementSection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
