import Image from "next/image";
import type { AdvertisingPlan } from "@/lib/data/advertising";
import { ADVERTISING_PACKAGE_ICON } from "@/lib/data/advertising";
import { FaCheck } from "react-icons/fa";

type AdvertisingPricingCardProps = {
  plan: AdvertisingPlan;
  packageIcon?: string;
};

export function AdvertisingPricingCard({
  plan,
  packageIcon = ADVERTISING_PACKAGE_ICON,
}: AdvertisingPricingCardProps) {
  return (
    <article className="pricing-card group">
      <div className="pricing-card__head">
        <h3 className="pricing-card__title">
          <Image
            src={packageIcon}
            alt=""
            width={40}
            height={40}
            className="pricing-card__icon"
            aria-hidden
          />
          {plan.title}
        </h3>
        <p className="pricing-card__price advertising-pricing-card__price">
          {plan.price}{" "}
          <span className="advertising-pricing-card__period">{plan.period}</span>
        </p>
      </div>
      <div className="pricing-card__body">
        <ul className="pricing-card__features">
          {plan.features.map((feature) =>
            feature.kind === "heading" ? (
              <li key={feature.label} className="pricing-card__feature-heading">
                {feature.label}
              </li>
            ) : (
              <li key={feature.label}>
                <FaCheck className="pricing-card__check shrink-0" aria-hidden />
                <span>{feature.label}</span>
              </li>
            )
          )}
        </ul>
        <a href="/contact" className="pricing-card__btn">
          Select Package
        </a>
      </div>
    </article>
  );
}
