"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BrandingHeroSection } from "@/components/sections/branding-hero-section";
import { BrandingIntroSection } from "@/components/sections/branding-intro-section";
import { BrandingPortfolioSection } from "@/components/sections/branding-portfolio-section";
import { BrandingPricingSection } from "@/components/sections/branding-pricing-section";
import { BrandingStorySection } from "@/components/sections/branding-story-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";

export function BrandingPage() {
  return (
    <div className="branding-page flex min-h-full flex-1 flex-col">
      <div className="branding-hero-block">
        <SiteHeader inBanner />
        <BrandingHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <BrandingIntroSection />
        <BrandingPricingSection />
        <BrandingPortfolioSection />
        <BrandingStorySection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
