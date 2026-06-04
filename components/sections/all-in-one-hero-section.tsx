"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ALL_IN_ONE_HERO } from "@/lib/data/your-all-in-one";
import { revealImmediate } from "@/lib/gsap/animations";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function AllInOneHeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-aio-hero-reveal]");
    revealImmediate(targets, reducedMotion, { y: 48, duration: 1, stagger: 0.14 });
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="all-in-one-inner-banner"
      aria-label="Your all-in-one booking solution"
    >
      <Container>
        <div className="all-in-one-inner-banner__text">
          <p data-aio-hero-reveal className="text-dm-hero-label m-0">
            {ALL_IN_ONE_HERO.label}
          </p>
          <h1 data-aio-hero-reveal className="text-dm-hero-title m-0">
            {ALL_IN_ONE_HERO.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p data-aio-hero-reveal className="text-dm-hero-desc all-in-one-hero-desc m-0">
            {ALL_IN_ONE_HERO.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
