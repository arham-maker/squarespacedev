"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BRANDING_INTRO } from "@/lib/data/branding";
import {
  initSectionHeadingScroll,
  SECTION_HEADING_FADED_DARK,
} from "@/lib/gsap/section-heading-scroll";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function BrandingIntroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hasRevealedRef = useRef(false);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-brand-intro-reveal]");
    const heading = section.querySelector<HTMLElement>("[data-scroll-heading]");

    const headingCleanup = heading
      ? initSectionHeadingScroll(heading, reducedMotion, {
          trigger: section,
          start: "top 90%",
          end: "top 18%",
          scrub: 0.9,
          staggerEach: 0.025,
          fadedColor: SECTION_HEADING_FADED_DARK,
          solidColor: "#000000",
        })
      : undefined;

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

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      headingCleanup?.();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="branding-intro-section"
      aria-label="Why professional branding is necessary"
    >
      <Container>
        <h2
          data-scroll-heading
          className="text-brand-intro-title mb-10 m-0 text-left font-normal"
        >
          {BRANDING_INTRO.titleLines.map((line) => (
            <span key={line} className="block" data-scroll-heading-line>
              {line}
            </span>
          ))}
        </h2>

        <div data-brand-intro-reveal className="branding-intro-section__content">
          <h3 className="text-brand-intro-subtitle mb-6 m-0">
            {BRANDING_INTRO.subtitleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="text-brand-intro-desc mb-6 m-0">{BRANDING_INTRO.paragraph}</p>
          <ul className="branding-intro-section__list m-0">
            {BRANDING_INTRO.bullets.map((item) => (
              <li key={item} className="text-brand-intro-list-item mb-6 m-0">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-brand-intro-desc m-0">{BRANDING_INTRO.closing}</p>
        </div>
      </Container>
    </section>
  );
}
