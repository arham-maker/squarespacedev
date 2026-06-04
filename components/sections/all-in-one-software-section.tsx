"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ALL_IN_ONE_SOFTWARE } from "@/lib/data/your-all-in-one";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function AllInOneSoftwareSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const hasRevealedRef = useRef(false);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-aio-software-reveal]");

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
      className="all-in-one-software-section"
      aria-label="Booking software overview"
    >
      <Container>
        <div className="all-in-one-software-section__layout">
          <figure
            data-aio-software-reveal
            className="all-in-one-software-section__figure m-0"
          >
            <Image
              src={ALL_IN_ONE_SOFTWARE.image.src}
              alt={ALL_IN_ONE_SOFTWARE.image.alt}
              width={720}
              height={540}
              className="all-in-one-software-section__img"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>

          <div data-aio-software-reveal className="all-in-one-software-section__copy">
            <h2 className="text-aio-software-label mb-10 m-0">{ALL_IN_ONE_SOFTWARE.label}</h2>
            <h3 className="text-aio-software-title mb-10 m-0">{ALL_IN_ONE_SOFTWARE.title}</h3>
            <p className="text-aio-software-desc m-0">{ALL_IN_ONE_SOFTWARE.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
