"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CONTACT_HERO } from "@/lib/data/contact";
import { revealImmediate } from "@/lib/gsap/animations";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function ContactHeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-contact-hero-reveal]");
    revealImmediate(targets, reducedMotion, { y: 48, duration: 1, stagger: 0.18 });
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="contact-inner-banner"
      aria-label="Contact us"
    >
      <Container>
        <div className="contact-inner-banner__text">
          <h1
            data-contact-hero-reveal
            className="text-contact-hero-title m-0"
          >
            {CONTACT_HERO.title}
          </h1>
          <p
            data-contact-hero-reveal
            className="text-contact-hero-subtitle m-0"
          >
            {CONTACT_HERO.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
