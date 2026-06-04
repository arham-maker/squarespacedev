"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { GraphicDesignHeroSection } from "@/components/sections/graphic-design-hero-section";
import { GraphicDesignIntroSection } from "@/components/sections/graphic-design-intro-section";
import { GraphicDesignServicesSection } from "@/components/sections/graphic-design-services-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";

export function GraphicDesignPage() {
  return (
    <div className="graphic-design-page flex min-h-full flex-1 flex-col">
      <div className="graphic-design-hero-block">
        <SiteHeader inBanner />
        <GraphicDesignHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <GraphicDesignIntroSection />
        <GraphicDesignServicesSection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
