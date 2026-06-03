import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/privacy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Squarespacedev",
  description:
    "Learn how Squarespacedev collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return <PrivacyPage />;
}
