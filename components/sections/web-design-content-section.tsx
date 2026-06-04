"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { WEB_DESIGN_CONTENT } from "@/lib/data/web-design";
import {
  initSectionHeadingScroll,
  SECTION_HEADING_FADED_DARK,
} from "@/lib/gsap/section-heading-scroll";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function WebDesignContentSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hasRevealedRef = useRef(false);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-wd-content-reveal]");
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
      className="web-design-content-section"
      aria-label="Build a website that attracts customers"
    >
      <Container>
        <div className="web-design-content-section__inner">
          <h2
            data-scroll-heading
            className="text-wd-content-heading m-0 text-center font-normal"
          >
            {WEB_DESIGN_CONTENT.titleLines.map((line) => (
              <span key={line} className="block" data-scroll-heading-line>
                {line}
              </span>
            ))}
          </h2>

          <p
            data-wd-content-reveal
            className="text-wd-content-desc m-0 text-center"
          >
            {WEB_DESIGN_CONTENT.description}
          </p>

          <div data-wd-content-reveal className="web-design-content-section__highlight">
            <h3 className="text-wd-content-highlight-title m-0 text-center">
              {WEB_DESIGN_CONTENT.highlightTitle}
            </h3>
            <p className="text-wd-content-desc m-0 text-center">
              {WEB_DESIGN_CONTENT.highlightDescription}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
