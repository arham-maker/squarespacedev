"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { PRICING_HERO } from "@/lib/data/pricing";
import { revealImmediate } from "@/lib/gsap/animations";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function PricingHeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-pricing-hero-reveal]");
    revealImmediate(targets, reducedMotion, { y: 48, duration: 1, stagger: 0.12 });
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="pricing-inner-banner"
      aria-label="Our pricing"
    >
      <Container>
        <div className="pricing-inner-banner__text">
          <h1
            data-pricing-hero-reveal
            className="text-pricing-hero-title m-0"
          >
            {PRICING_HERO.title}
          </h1>
        </div>
      </Container>
    </section>
  );
}
