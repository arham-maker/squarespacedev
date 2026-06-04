"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LogoDesignHeroSection } from "@/components/sections/logo-design-hero-section";
import { LogoDesignIntroSection } from "@/components/sections/logo-design-intro-section";
import { LogoDesignPortfolioSection } from "@/components/sections/logo-design-portfolio-section";
import { LogoDesignPricingSection } from "@/components/sections/logo-design-pricing-section";
import { LogoDesignTestimonialSection } from "@/components/sections/logo-design-testimonial-section";
import { PricingTrustedPartnersSection } from "@/components/sections/pricing-trusted-partners-section";

export function LogoDesignPage() {
  return (
    <div className="logo-design-page flex min-h-full flex-1 flex-col">
      <div className="logo-design-hero-block">
        <SiteHeader inBanner />
        <LogoDesignHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <LogoDesignIntroSection />
        <LogoDesignPricingSection />
        <LogoDesignPortfolioSection />
        <LogoDesignTestimonialSection />
        <PricingTrustedPartnersSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
