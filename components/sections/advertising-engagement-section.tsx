"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ADVERTISING_ENGAGEMENT } from "@/lib/data/advertising";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function AdvertisingEngagementSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hasRevealedRef = useRef(false);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-ad-engagement-reveal]");

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
      className="advertising-engagement-section"
      aria-label="Drive engagement with advertising"
    >
      <Container>
        <div className="advertising-engagement-section__layout">
          <div data-ad-engagement-reveal className="advertising-engagement-section__copy">
            <h2 className="text-ad-engagement-title m-0">{ADVERTISING_ENGAGEMENT.title}</h2>
            <h3 className="text-ad-engagement-highlight m-0">
              {ADVERTISING_ENGAGEMENT.highlight}
            </h3>
            <p className="text-ad-engagement-desc m-0">{ADVERTISING_ENGAGEMENT.description}</p>
          </div>

          <figure
            data-ad-engagement-reveal
            className="advertising-engagement-section__figure m-0"
          >
            <Image
              src={ADVERTISING_ENGAGEMENT.image.src}
              alt={ADVERTISING_ENGAGEMENT.image.alt}
              width={720}
              height={540}
              className="advertising-engagement-section__img"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
