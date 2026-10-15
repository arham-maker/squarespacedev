export const PRICING_HERO = {
  title: "Budget-friendly Packages",
} as const;

export const PRICING_INTRO = {
  title: "Prices That Fit Your Budget",
  description:
    "Explore our budget-friendly options and find the perfect package for your brand.",
} as const;

export const PRICING_TABS = [
  { id: "promotional", label: "Promotional Website" },
  { id: "ecommerce", label: "E-Commerce Website" },
] as const;

export type PricingTabId = (typeof PRICING_TABS)[number]["id"];

export type PricingPlan = {
  id: string;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  description: string;
  features: string[];
};

export const PRICING_PACKAGE_ICON = "/pricing/package-icon.png";

const promotionalPlans: PricingPlan[] = [
  {
    id: "starter",
    title: "Starter",
    price: "$199",
    originalPrice: "$995",
    discount: "80% off!",
    description: "Deliverables",
    features: [
      "1–2 Page Website",
      "Modern Design Template",
      "Contact Form",
      "Social Media Links",
      "Delivery in 1–2 Weeks",
    ],
  },
  {
    id: "essential",
    title: "Essential",
    price: "$449",
    originalPrice: "$2245",
    discount: "80% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Starter, plus:",
      "Up to 5 Custom-Designed Pages",
      "Cross Browser Compatible",
      "Image Optimization",
      "Custom Favicon",
      "Delivery in 2–3 Weeks",
    ],
  },
  {
    id: "growth",
    title: "Growth",
    price: "$849",
    originalPrice: "$4245",
    discount: "80% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Essential, plus:",
      "Up to 8 Pages",
      "Unlimited Design Revisions",
      "Mobile Responsive Designs",
      "Embedded Video (Customer will provide)",
      "Click-to-Call and WhatsApp Chat",
      "Delivery in 2–4 Weeks",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    price: "$1399",
    originalPrice: "$6995",
    discount: "80% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Growth, plus:",
      "Up to 10 Pages",
      "Analytics Integration",
      "Advanced Animations & Scroll Effects",
      "Lead Capture Forms",
      "Google Maps",
      "Priority Support",
      "Delivery in 2–4 Weeks",
    ],
  },
  {
    id: "elite",
    title: "Elite",
    price: "$1899",
    originalPrice: "$9495",
    discount: "80% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Pro, plus:",
      "Booking System or Calendar Integration",
      "Sliding Banners",
      "Email Auto Responder",
      "Multi-language Setup (Up to 2 Languages)",
      "Blog & Newsletter Integration",
      "30 Days Post-Launch Support",
      "1 Hour Strategy Call Included",
      "Delivery in 3–5 Weeks",
    ],
  },
  {
    id: "ultimate",
    title: "Ultimate",
    price: "$2699",
    originalPrice: "$13495",
    discount: "80% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Elite, plus:",
      "Unlimited Pages",
      "Custom Illustrations or Icons",
      "Membership/Portal Access (If Required)",
      "Custom Animations",
      "3 Months Free Maintenance",
      "VIP Support Access",
      "Delivery in 3–6 Weeks",
    ],
  },
];

const ecommercePlans: PricingPlan[] = [
  {
    id: "basic-store",
    title: "Basic Store",
    price: "$599",
    originalPrice: "$2995",
    discount: "80% off!",
    description: "Deliverables",
    features: [
      "Up to 10 Products",
      "Mobile & Tablet Friendly",
      "Payment Gateway Setup",
      "Product Categories",
      "Basic Checkout Flow",
      "Email Notifications",
      "Social Media Links",
      "Delivery in 2–4 Weeks",
    ],
  },
  {
    id: "pro-store",
    title: "Pro Store",
    price: "$1399",
    originalPrice: "$6995",
    discount: "50% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Basic Store, plus:",
      "Up to 50 Products",
      "Product Variants (Size, Color, etc.)",
      "Discount Coupons & Gift Cards",
      "Abandoned Cart Recovery",
      "Google Analytics",
      "Blog Setup (Optional)",
      "Delivery in 3–5 Weeks",
    ],
  },
  {
    id: "advanced-store",
    title: "Advanced Store",
    price: "$2999",
    originalPrice: "$14995",
    discount: "50% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Pro Store, plus:",
      "Up to 200 Products",
      "Digital Downloads or Subscriptions",
      "Facebook Pixel",
      "Wishlist & Product Quick View",
      "Instagram Shop Integration",
      "CRM or Email Marketing Integration",
      "Conversion-Focused Design",
      "Priority Launch Support",
      "Delivery in 4–6 Weeks",
    ],
  },
  {
    id: "enterprise-store",
    title: "Enterprise Store",
    price: "$4499",
    originalPrice: "$22495",
    discount: "50% off!",
    description: "Deliverables",
    features: [
      "Includes everything in Advanced Store, plus:",
      "Unlimited Products",
      "Marketplace/Multi-vendor Capable",
      "POS & Inventory Sync",
      "Multilingual Store Setup",
      "Sales Funnel or Upsell Integration",
      "Automated Email Campaigns",
      "3 Months Premium Support & Maintenance",
      "Launch Strategy & Marketing Checklist",
      "Delivery in 6–7 Weeks",
    ],
  },
];

export const PRICING_PLANS: Record<PricingTabId, PricingPlan[]> = {
  promotional: promotionalPlans,
  ecommerce: ecommercePlans,
};

export const PRICING_TRUSTED_PARTNERS = {
  title: "OUR TRUSTED PARTNERS WORLDWIDE",
  titleLines: ["OUR TRUSTED PARTNERS WORLDWIDE"] as const,
  badges: [
    { src: "/pricing/partners/1.webp", alt: "UpCity Best of Michigan", width: 143, height: 149 },
    { src: "/pricing/partners/2.webp", alt: "Squarespace Partner Legend", width: 106, height: 105 },
    {
      src: "/pricing/partners/3.webp",
      alt: "Premier Squarespace Web Designer Award",
      width: 106,
      height: 101,
    },
    { src: "/pricing/partners/4.webp", alt: "Clutch Top Creative Agency", width: 86, height: 91 },
    {
      src: "/pricing/partners/5.webp",
      alt: "Best Rated Facebook Marketing Agencies 2023",
      width: 106,
      height: 105,
    },
    { src: "/pricing/partners/7.webp", alt: "Featured on UpCity", width: 202, height: 50 },
    { src: "/pricing/partners/8.webp", alt: "GoDaddy Pro Plus", width: 176, height: 56 },
    {
      src: "/pricing/partners/10.webp",
      alt: "Expertise Best Advertising Agencies 2020",
      width: 122,
      height: 96,
    },
    { src: "/pricing/partners/11.webp", alt: "Alignable Highly Recommended", width: 115, height: 87 },
    { src: "/pricing/partners/12.webp", alt: "Jobber Partner", width: 87, height: 87 },
    {
      src: "/pricing/partners/13.webp",
      alt: "Meta Certified Creative Strategy Professional",
      width: 92,
      height: 91,
    },
    { src: "/pricing/partners/14.webp", alt: "Best Search TOPSEOs", width: 106, height: 105 },
    { src: "/pricing/partners/15.webp", alt: "Yext", width: 57, height: 57 },
  ],
} as const;
