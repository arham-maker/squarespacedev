import Script from "next/script";

const ZENDESK_WIDGET_SRC =
  "https://static.zdassets.com/ekr/snippet.js?key=923e51fa-97d5-49a2-9055-0fb23e466aba";

export function ZendeskWidget() {
  return (
    <Script
      id="ze-snippet"
      src={ZENDESK_WIDGET_SRC}
      strategy="afterInteractive"
    />
  );
}
