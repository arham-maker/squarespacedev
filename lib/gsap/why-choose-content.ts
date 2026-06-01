import gsap from "gsap";
import { ScrollTrigger } from "./register";

export function initWhyChooseContentScroll(
  section: HTMLElement,
  reducedMotion: boolean
): () => void {
  const items = gsap.utils.toArray<HTMLElement>(
    section.querySelectorAll("[data-why-choose-reveal]")
  );

  if (!items.length) {
    return () => {};
  }

  if (reducedMotion) {
    gsap.set(items, { autoAlpha: 1, y: 0 });
    return () => {};
  }

  const triggers: ScrollTrigger[] = [];

  items.forEach((item) => {
    gsap.set(item, { autoAlpha: 0, y: 48 });

    const tween = gsap.to(item, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 88%",
        once: true,
        invalidateOnRefresh: true,
      },
    });

    if (tween.scrollTrigger) {
      triggers.push(tween.scrollTrigger);
    }
  });

  return () => {
    triggers.forEach((st) => st.kill());
    gsap.set(items, { clearProps: "transform,opacity" });
  };
}
