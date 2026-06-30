import { ZendeskClientEffects } from "@/components/livechat/zendesk-client-effects";
import { ZENDESK_WIDGET_SRC } from "@/lib/livechat";
import Script from "next/script";

export function ZendeskWidget() {
  return (
    <>
      <Script
        id="ze-snippet"
        src={ZENDESK_WIDGET_SRC}
        strategy="beforeInteractive"
      />
      <ZendeskClientEffects />
    </>
  );
}
