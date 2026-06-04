export const DIGITAL_MARKETING_HERO = {
  label: "Digital Marketing",
  title: "Services",
  description:
    "From SEO to social media, we help you connect with the right audience on the right platforms at the right time.",
  cta: { label: "Get started", href: "/contact" },
} as const;

export const DIGITAL_MARKETING_INTRO = {
  titleLines: ["Real Results,", "Real Growth"],
  subtitle: "Focus on Business, Leave Marketing to Us",
  description:
    "Digital marketing involves more than just promotion; it requires strategic planning and execution. Our team covers everything from SEO and social media to email marketing, giving you a comprehensive service that supports growth at every turn.",
} as const;

export const DIGITAL_MARKETING_SHOWCASE = {
  titleLines: [
    "Partner with Us for",
    "Winning Digital Marketing",
    "Strategies Today!",
  ],
  subtitle: "Grow Your Brand Online with Our Help.",
} as const;

export type DigitalMarketingServiceId =
  | "web-design"
  | "logo-design"
  | "social-media"
  | "branding"
  | "graphic-design"
  | "online-advertising";

export const DIGITAL_MARKETING_SERVICES: {
  id: DigitalMarketingServiceId;
  label: string;
  image: string;
  alt: string;
}[] = [
  {
    id: "web-design",
    label: "Web Design",
    image: "/digital-marketing/web-design.webp",
    alt: "Web design project preview",
  },
  {
    id: "logo-design",
    label: "Logo Design",
    image: "/digital-marketing/logo-design.webp",
    alt: "Logo design project preview",
  },
  {
    id: "social-media",
    label: "Social Media",
    image: "/digital-marketing/social-media.webp",
    alt: "Social media marketing project preview",
  },
  {
    id: "branding",
    label: "Branding",
    image: "/digital-marketing/branding.webp",
    alt: "Branding project preview",
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    image: "/digital-marketing/graphic-design.webp",
    alt: "Graphic design project preview",
  },
  {
    id: "online-advertising",
    label: "Online Advertising",
    image: "/digital-marketing/online-advertising.webp",
    alt: "Online advertising project preview",
  },
];
