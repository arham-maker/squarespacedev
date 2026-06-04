export type GraphicDesignServiceVariant = "light" | "pattern";

export type GraphicDesignCategory = {
  id: string;
  title: string;
  titleLines?: readonly string[];
  variant: GraphicDesignServiceVariant;
  twoColumns?: boolean;
  items: readonly string[];
};

export const GRAPHIC_DESIGN_HERO = {
  label: "Capture Attention with",
  title: "Eye-Catching Graphics",
  description:
    "In a visual world, captivating graphics are key. Our design creates eye-catching visuals that engage and attract your target audience. Whether it's for print or digital, we've got you covered.",
  cta: { label: "Get Started", href: "/contact" },
} as const;

export const GRAPHIC_DESIGN_INTRO = {
  titleLines: ["Connect with Us", "Today!"],
  subtitle:
    "Let us help your brand speak visually, building connections with every design.",
  description:
    "From logos and business cards to brochures, flyers, and banners, we create designs that leave a lasting impression. Whether you need eye-catching social media graphics or trade show displays, our creative solutions capture your brand's personality and purpose.",
} as const;

export const GRAPHIC_DESIGN_CATEGORIES: GraphicDesignCategory[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    variant: "light",
    items: [
      "Sketch and Graphics",
      "Vector Illustrations",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
    ],
  },
  {
    id: "print-design",
    title: "Print Design",
    variant: "pattern",
    twoColumns: true,
    items: [
      "Flyers",
      "Postcards",
      "Brochures",
      "Packaging",
      "Posters",
      "Envelopes",
      "Book Covers",
      "Advertisements",
      "Calendars",
      "Catalogs",
      "Greeting Cards",
      "Invitations",
      "Magazines",
      "Menus",
      "Newspaper Ads",
      "Print",
    ],
  },
  {
    id: "digital-design",
    title: "Digital Design",
    titleLines: ["Digital Design", "Services"],
    variant: "pattern",
    twoColumns: true,
    items: [
      "Websites",
      "Banners Ads",
      "Icons",
      "Facebook",
      "Twitter",
      "Blogs",
      "Email Marketing",
      "Mobile",
      "Newsletter",
      "Online Ads",
    ],
  },
  {
    id: "corporate-identity",
    title: "Corporate Identity & Branding",
    titleLines: ["Corporate Identity", "& Branding"],
    variant: "light",
    twoColumns: true,
    items: [
      "Logos",
      "Business Cards",
      "T-shirts",
      "Stationary",
      "Labels",
      "Letterheads",
      "Name Cards",
      "Signage",
    ],
  },
];
