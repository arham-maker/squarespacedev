"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PrivacyContentSection } from "@/components/sections/privacy-content-section";
import { PrivacyHeroSection } from "@/components/sections/privacy-hero-section";

export function PrivacyPage() {
  return (
    <div className="terms-page flex min-h-full flex-1 flex-col">
      <div className="terms-hero-block">
        <SiteHeader inBanner />
        <PrivacyHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col bg-white">
        <PrivacyContentSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
