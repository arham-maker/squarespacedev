"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { WEB_DESIGN_PORTFOLIO } from "@/lib/data/web-design";
import {
  WEB_DESIGN_PORTFOLIO_TABS,
  getWebDesignPortfolioItemsForTab,
  type WebDesignPortfolioTabId,
} from "@/lib/data/web-design-portfolio";
import { Fancybox } from "@fancyapps/ui";
import {
  WORK_PORTFOLIO_FANCYBOX_GROUP,
  bindWorkPortfolioFancybox,
  unbindWorkPortfolioFancybox,
} from "@/lib/fancybox/work-portfolio";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function WebDesignPortfolioSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasRevealedRef = useRef(false);
  const [activeTab, setActiveTab] = useState<WebDesignPortfolioTabId>("all");

  const items = getWebDesignPortfolioItemsForTab(activeTab);
  const isAllTab = activeTab === "all";
  const enableLoop = isAllTab && items.length > 1 && !reducedMotion;

  const switchTab = useCallback(
    (tabId: WebDesignPortfolioTabId) => {
      if (tabId === activeTab) return;

      const panel = panelRef.current;
      if (!panel || reducedMotion) {
        setActiveTab(tabId);
        return;
      }

      gsap.to(panel, {
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          setActiveTab(tabId);
          gsap.fromTo(
            panel,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.35, ease: "power2.out" }
          );
        },
      });
    },
    [activeTab, reducedMotion]
  );

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const title = section.querySelector("[data-wd-portfolio-title]");
    const tabs = section.querySelector("[data-wd-portfolio-tabs]");
    const panel = panelRef.current;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set([title, tabs, panel], { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set([title, tabs, panel], { autoAlpha: 0, y: 28 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          if (hasRevealedRef.current) return;
          hasRevealedRef.current = true;
          gsap.to([title, tabs, panel], {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    bindWorkPortfolioFancybox(section);

    return () => {
      unbindWorkPortfolioFancybox(section);
      Fancybox.close(true);
    };
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="web-design-portfolio-section"
      aria-label="Our award-winning portfolio"
    >
      <Container>
        <h2
          data-wd-portfolio-title
          className="text-wd-portfolio-title mb-10 m-0 text-center"
        >
          {WEB_DESIGN_PORTFOLIO.title}
        </h2>

        <ul
          data-wd-portfolio-tabs
          className="web-design-portfolio-tabs m-0 list-none p-0"
          role="tablist"
          aria-label="Portfolio categories"
        >
          {WEB_DESIGN_PORTFOLIO_TABS.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <li key={tab.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`web-design-portfolio-tabs__tab ${isActive ? "web-design-portfolio-tabs__tab--active" : ""}`}
                  onClick={() => switchTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>

      <div
        ref={panelRef}
        className="web-design-portfolio-panel"
        role="tabpanel"
        aria-label={
          WEB_DESIGN_PORTFOLIO_TABS.find((tab) => tab.id === activeTab)?.label
        }
      >
        <Swiper
          key={activeTab}
          className={`web-design-portfolio-slider ${!isAllTab ? "web-design-portfolio-slider--centered" : ""}`}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={1000}
          loop={enableLoop}
          centeredSlides={!isAllTab}
          centeredSlidesBounds={!isAllTab}
          watchOverflow
          autoplay={
            reducedMotion
              ? false
              : {
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }
          }
          breakpoints={{
            768: {
              slidesPerView: 2,
              centeredSlides: !isAllTab,
            },
            1025: {
              slidesPerView: 3,
              centeredSlides: !isAllTab,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="web-design-portfolio-card">
                <a
                  href={item.image}
                  className="web-design-portfolio-card__media"
                  data-fancybox={WORK_PORTFOLIO_FANCYBOX_GROUP}
                  data-type="image"
                  data-src={item.image}
                  data-width={item.width}
                  data-height={item.height}
                  data-caption={item.title}
                  data-thumb={item.image}
                  aria-label={`View ${item.title} project preview`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={420}
                    height={510}
                    className="web-design-portfolio-card__img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  />
                </a>
                <div className="web-design-portfolio-card__content">
                  <h3 className="web-design-portfolio-card__title m-0">
                    {item.title}
                  </h3>
                  <p className="web-design-portfolio-card__category m-0">
                    Category: {item.categoryLabel}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
