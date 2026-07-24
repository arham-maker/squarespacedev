import type { Metadata } from "next";
import Script from "next/script";
import { ThankYouPage } from "@/components/pages/thank-you-page";

export const metadata: Metadata = {
  title: "Thank You | Squarespacedev",
  description:
    "Thanks! We have received your request. Expect a quick reply from our Squarespace experts.",
};

export default function ThankYou() {
  return (
    <>
      {/* Event snippet for Submit lead form (1) conversion page */}
      <Script
        id="google-ads-conversion-submit-lead-form"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-18251876752/LHW1CIWXtdUcEJCTlv9D'});`,
        }}
      />
      <ThankYouPage />
    </>
  );
}
