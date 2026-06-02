"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Container } from "@/components/layout/container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CONTACT_FORM, CONTACT_PARTNER_LOGOS } from "@/lib/data/contact";
import { revealOnScroll } from "@/lib/gsap/animations";
import { registerGsapPlugins } from "@/lib/gsap/register";
import { SITE } from "@/lib/data/site";

export function ContactFormSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const reveals = section.querySelectorAll("[data-contact-reveal]");
    reveals.forEach((el) => {
      revealOnScroll(el, el, { y: 40, duration: 0.85, start: "top 92%" });
    });
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="contact-section" id="contact-form">
      <div className="contact-section__partners-wrap">
        <Container>
          <div
            data-contact-reveal
            className="contact-partners"
            aria-label="Trusted partners"
          >
            {CONTACT_PARTNER_LOGOS.map((logo) => (
              <figure key={logo.id} className="contact-partners__item m-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="contact-partners__logo"
                  style={{
                    width: logo.width,
                    height: logo.height,
                    maxWidth: "100%",
                  }}
                  sizes={`${logo.width}px`}
                  priority
                />
              </figure>
            ))}
          </div>
        </Container>
      </div>

      <div className="contact-section__body">
        <Container>
          <div
            data-contact-reveal
            className="contact-form-card mx-auto max-w-[1036px]"
          >
            <h2 className="text-contact-form-title m-0">
              {CONTACT_FORM.title}
            </h2>
            <p className="text-contact-form-desc m-0 mt-4">
              {CONTACT_FORM.description}
            </p>

            <form
              className="contact-form mt-8"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="contact-field">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Full Name *"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="contact-field">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    autoComplete="family-name"
                  />
                </div>
                <div className="contact-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="contact-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="contact-field md:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                  />
                </div>
              </div>

              <ul className="contact-checkboxes m-0 mt-6 list-none p-0">
                <li className="contact-checkbox">
                  <input
                    id="contact-consent-marketing"
                    name="contact-consent-marketing"
                    type="checkbox"
                    required
                  />
                  <label htmlFor="contact-consent-marketing">
                    I provide my consent to receive B2B marketing communications
                    from Squarespacedev
                  </label>
                </li>
                <li className="contact-checkbox">
                  <input
                    id="contact-consent-sms"
                    name="contact-consent-sms"
                    type="checkbox"
                    required
                  />
                  <label htmlFor="contact-consent-sms">
                    Message and data rates may apply. Reply STOP to opt out. Text
                    &apos;HELP&apos; for help. 4 messages/month.
                  </label>
                </li>
                <li className="contact-checkbox">
                  <input
                    id="contact-consent-terms"
                    name="contact-consent-terms"
                    type="checkbox"
                    required
                  />
                  <label htmlFor="contact-consent-terms">
                    I agree and accept the{" "}
                    <Link href={CONTACT_FORM.termsHref} className="contact-link">
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href={CONTACT_FORM.privacyHref}
                      className="contact-link"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </li>
              </ul>

              <button type="submit" className="btn btn-primary mt-6 gap-3">
                {CONTACT_FORM.submitLabel}
                <FaArrowRight
                  className="h-5 w-5 shrink-0"
                  aria-hidden
                />
              </button>
            </form>
          </div>

          <div
            data-contact-reveal
            className="contact-details mx-auto mt-8 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10"
          >
            <a href={SITE.phoneHref} className="contact-details__item">
              <FaPhoneAlt className="shrink-0 text-xl" aria-hidden />
              <span>{SITE.phone}</span>
            </a>
            <a href={SITE.emailHref} className="contact-details__item">
              <FaEnvelope className="shrink-0 text-xl" aria-hidden />
              <span>{SITE.email}</span>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
