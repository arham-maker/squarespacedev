"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  DIGITAL_MARKETING_SERVICES,
  DIGITAL_MARKETING_SHOWCASE,
} from "@/lib/data/digital-marketing";
import {
  initSectionHeadingScroll,
  SECTION_HEADING_FADED_DARK,
} from "@/lib/gsap/section-heading-scroll";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function DigitalMarketingShowcaseSection() {
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState(DIGITAL_MARKETING_SERVICES[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const hasRevealedSubtitleRef = useRef(false);

  const activeService =
    DIGITAL_MARKETING_SERVICES.find((item) => item.id === activeId) ??
    DIGITAL_MARKETING_SERVICES[0];

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const heading = section.querySelector<HTMLElement>("[data-scroll-heading]");
    const subtitle = section.querySelector<HTMLElement>("[data-dm-showcase-subtitle]");
    const showcase = section.querySelector<HTMLElement>("[data-dm-showcase-nav]");

    let headingCleanup: (() => void) | undefined;

    const ctx = gsap.context(() => {
      if (heading) {
        headingCleanup =
          initSectionHeadingScroll(heading, reducedMotion, {
            trigger: section,
            start: "top 88%",
            end: "top 28%",
            scrub: 0.9,
            staggerEach: 0.035,
            fadedColor: SECTION_HEADING_FADED_DARK,
            solidColor: "#000000",
          }) ?? undefined;
      }

      if (reducedMotion) {
        gsap.set([subtitle, showcase], { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set([subtitle, showcase], { autoAlpha: 0, y: 28 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 72%",
        once: true,
        onEnter: () => {
          if (hasRevealedSubtitleRef.current) return;
          hasRevealedSubtitleRef.current = true;
          gsap.to([subtitle, showcase], {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
          });
        },
      });
    }, section);

    return () => {
      headingCleanup?.();
      ctx.revert();
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    const preview = previewRef.current;
    if (!preview || reducedMotion) return;

    gsap.fromTo(
      preview,
      { autoAlpha: 0.35 },
      { autoAlpha: 1, duration: 0.4, ease: "power2.out", overwrite: true }
    );
  }, [activeId, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="digital-marketing-showcase-section"
      aria-label="Digital marketing services showcase"
    >
      <Container>
        <h2
          data-scroll-heading
          className="text-dm-showcase-heading mb-10 font-normal"
        >
          {DIGITAL_MARKETING_SHOWCASE.titleLines.map((line) => (
            <span key={line} className="block" data-scroll-heading-line>
              {line}
            </span>
          ))}
        </h2>

        <p
          data-dm-showcase-subtitle
          className="text-dm-showcase-subtitle m-0"
        >
          {DIGITAL_MARKETING_SHOWCASE.subtitle}
        </p>

        <nav
          data-dm-showcase-nav
          className="templates-showcase relative mt-10 min-h-[280px] sm:mt-12 sm:min-h-[360px] lg:mt-16 lg:min-h-[480px]"
          aria-label="Related services"
        >
          <ul className="templates-showcase__list m-0 list-none p-0">
            {DIGITAL_MARKETING_SERVICES.map((service) => {
              const isActive = service.id === activeId;

              return (
                <li key={service.id} className="m-0">
                  <button
                    type="button"
                    className={`templates-showcase__tab text-left py-4 ${isActive ? "is-active" : ""}`}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveId(service.id)}
                    onFocus={() => setActiveId(service.id)}
                    onClick={() => setActiveId(service.id)}
                  >
                    <span>{service.label}</span>
                    <FiArrowRight
                      className="templates-showcase__arrow h-10 w-10 shrink-0"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            ref={previewRef}
            className="templates-showcase__preview relative mt-10 w-full overflow-hidden bg-neutral-900 lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[60%]"
          >
            <Image
              key={activeService.id}
              src={activeService.image}
              alt={activeService.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={activeService.id === DIGITAL_MARKETING_SERVICES[0].id}
            />
          </div>
        </nav>
      </Container>
    </section>
  );
}
