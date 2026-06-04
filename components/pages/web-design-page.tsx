"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PricingPlansSection } from "@/components/sections/pricing-plans-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";
import { WebDesignConsultationSection } from "@/components/sections/web-design-consultation-section";
import { WebDesignContentSection } from "@/components/sections/web-design-content-section";
import { WebDesignEcommerceSection } from "@/components/sections/web-design-ecommerce-section";
import { WebDesignHeroSection } from "@/components/sections/web-design-hero-section";
import { WebDesignIntroSection } from "@/components/sections/web-design-intro-section";
import { WebDesignPortfolioSection } from "@/components/sections/web-design-portfolio-section";
import { WebDesignServicesSection } from "@/components/sections/web-design-services-section";

export function WebDesignPage() {
  return (
    <div className="web-design-page flex min-h-full flex-1 flex-col">
      <div className="web-design-hero-block">
        <SiteHeader inBanner />
        <WebDesignHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <WebDesignIntroSection />
        <PricingPlansSection />
        <WebDesignServicesSection />
        <WebDesignPortfolioSection />
        <WebDesignEcommerceSection />
        <WebDesignContentSection />
        <WebDesignConsultationSection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
