import Image from "next/image";
import type { PricingPlan } from "@/lib/data/pricing";
import { PRICING_PACKAGE_ICON } from "@/lib/data/pricing";
import { FaCheck } from "react-icons/fa";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article className="pricing-card group">
      <div className="pricing-card__head">
        <h3 className="pricing-card__title">
          <Image
            src={PRICING_PACKAGE_ICON}
            alt=""
            width={40}
            height={40}
            className="pricing-card__icon"
            aria-hidden
          />
          {plan.title}
        </h3>
        <p className="pricing-card__price">
          {plan.price}{" "}
          <span className="pricing-card__original">
            <del>{plan.originalPrice}</del> {plan.discount}
          </span>
        </p>
      </div>
      <div className="pricing-card__body">
        <p className="pricing-card__desc">{plan.description}</p>
        <ul className="pricing-card__features">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={
                feature.startsWith("Everything in") ? "pricing-card__feature-heading" : ""
              }
            >
              <FaCheck className="pricing-card__check shrink-0" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a href="/contact" className="pricing-card__btn">
          Select Package
        </a>
      </div>
    </article>
  );
}
