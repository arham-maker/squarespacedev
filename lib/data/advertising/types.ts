export type AdvertisingPlanFeature =
  | { kind: "heading"; label: string }
  | { kind: "feature"; label: string };

export type AdvertisingPlan = {
  id: string;
  title: string;
  price: string;
  period: string;
  features: AdvertisingPlanFeature[];
};

export type AdvertisingTabId = "seo" | "smm" | "sem";

export const h = (label: string): AdvertisingPlanFeature => ({ kind: "heading", label });
export const f = (label: string): AdvertisingPlanFeature => ({ kind: "feature", label });
