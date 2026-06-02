"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";

export function ContactPage() {
  return (
    <div className="contact-page flex min-h-full flex-1 flex-col">
      <div className="contact-hero-block">
        <SiteHeader inBanner />
        <ContactHeroSection />
      </div>
      <main className="relative z-10 flex flex-1 flex-col">
        <ContactFormSection />
      </main>
      <div className="relative z-20">
        <SiteFooter />
      </div>
    </div>
  );
}
