"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { WEB_DESIGN_SERVICES } from "@/lib/data/web-design";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function WebDesignServicesSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hasRevealedRef = useRef(false);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-wd-services-reveal]");

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
      className="web-design-services-section"
      aria-label="Professional Squarespace websites"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-x-16">
          <div data-wd-services-reveal>
            <h2 className="text-wd-services-title mb-10 m-0">{WEB_DESIGN_SERVICES.title}</h2>
            <h3 className="text-wd-services-subtitle mb-10 m-0">
              {WEB_DESIGN_SERVICES.subtitle}
            </h3>
            <p className="text-wd-services-desc m-0">
              {WEB_DESIGN_SERVICES.description}
            </p>
            <ul className="web-design-services-section__list m-0">
              {WEB_DESIGN_SERVICES.bullets.map((item) => (
                <li key={item} className="text-wd-services-bullet m-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure
            data-wd-services-reveal
            className="web-design-services-section__figure m-0"
          >
            <Image
              src={WEB_DESIGN_SERVICES.image.src}
              alt={WEB_DESIGN_SERVICES.image.alt}
              width={720}
              height={540}
              className="web-design-services-section__img"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
