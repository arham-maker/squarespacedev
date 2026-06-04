import type { Metadata } from "next";
import { GraphicDesignPage } from "@/components/pages/graphic-design-page";

export const metadata: Metadata = {
  title: "Professional Graphic Design Services | Squarespacedev",
  description:
    "Eye-catching graphics for print and digital. From logos and business cards to brochures, flyers, banners, and social media—we help your brand speak visually.",
};

export default function GraphicDesign() {
  return <GraphicDesignPage />;
}
