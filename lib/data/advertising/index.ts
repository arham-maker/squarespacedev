import { ADVERTISING_SEM_PLANS } from "@/lib/data/advertising/sem-plans";
import { ADVERTISING_SEO_PLANS } from "@/lib/data/advertising/seo-plans";
import { ADVERTISING_SMM_PLANS } from "@/lib/data/advertising/smm-plans";
import type { AdvertisingPlan, AdvertisingTabId } from "@/lib/data/advertising/types";

export type { AdvertisingPlan, AdvertisingPlanFeature, AdvertisingTabId } from "@/lib/data/advertising/types";

export const ADVERTISING_HERO = {
  label: "Drive Traffic with",
  title: "Creative Advertising",
  descriptionLines: [
    "Stop wasting time on generic ads that don't work. Our innovative advertising services grab attention and leave a lasting impression.",
    "From eye-catching visuals to compelling messaging, we craft campaigns that engage and convert. Ready to make your mark? Let's talk!",
  ],
  cta: { label: "Get Started", href: "/contact" },
} as const;

export const ADVERTISING_INTRO = {
  titleLines: ["Looking for Effective", "Advertising Solutions?"],
  description:
    "We focus on connecting you with the right audience and creating genuine engagement that resonates. By showcasing what makes your brand memorable, we develop strategies that make your brand stand out. With our expert team, we'll help you create a lasting impression with:",
  bullets: [
    "Customized advertising strategies (Google Ads, Social Media Ads, and more)",
    "Professional content creation in multiple languages, including English and Spanish",
    "Engaging visuals and unique design for maximum brand impact",
  ],
} as const;

export const ADVERTISING_PRICING_INTRO = {
  title: "Prices That Fit Your Budget",
  description:
    "Explore our budget-friendly options and find the perfect package for your brand.",
} as const;

export const ADVERTISING_TABS = [
  { id: "seo" as const, label: "SEO" },
  { id: "smm" as const, label: "SMM" },
  { id: "sem" as const, label: "SEM" },
] as const;

export const ADVERTISING_PACKAGE_ICON = "/advertising/package-icon.webp";

export const ADVERTISING_PLANS: Record<AdvertisingTabId, AdvertisingPlan[]> = {
  seo: ADVERTISING_SEO_PLANS,
  smm: ADVERTISING_SMM_PLANS,
  sem: ADVERTISING_SEM_PLANS,
};

export const ADVERTISING_ENGAGEMENT = {
  title: "Drive Engagement with Advertising That Speaks to Your Audience",
  highlight: "Are you ready to see real results?",
  description:
    "Our targeted advertising strategies are designed to connect with your audience and drive meaningful engagement. We'll help you create campaigns that resonate and encourage your customers to choose your brand.",
  image: {
    src: "/advertising/26.webp",
    alt: "Advertising campaign strategy preview",
  },
} as const;
