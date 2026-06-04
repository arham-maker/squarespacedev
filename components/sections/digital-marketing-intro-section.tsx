"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { DIGITAL_MARKETING_INTRO } from "@/lib/data/digital-marketing";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function DigitalMarketingIntroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hasRevealedRef = useRef(false);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-dm-intro-reveal]");

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(targets, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(targets, { autoAlpha: 0, y: 32 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          if (hasRevealedRef.current) return;
          hasRevealedRef.current = true;
          gsap.to(targets, {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power2.out",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="digital-marketing-intro-section"
      aria-label="Real results, real growth"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
          <h2
            data-dm-intro-reveal
            className="text-dm-intro-title m-0 font-normal"
          >
            {DIGITAL_MARKETING_INTRO.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div data-dm-intro-reveal>
            <h3 className="text-dm-intro-subtitle m-0">
              {DIGITAL_MARKETING_INTRO.subtitle}
            </h3>
            <p className="text-dm-intro-desc m-0">
              {DIGITAL_MARKETING_INTRO.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
