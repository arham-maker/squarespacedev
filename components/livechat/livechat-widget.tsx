import Script from "next/script";

const CRISP_INIT = `
window.$crisp = window.$crisp || [];
window.$crisp.push(["config", "position:reverse", [false]]);
window.$crisp.push(["on", "message:received", function(message) {
  if (message && message.from && message.from !== "operator") return;
  window.$crisp.push(["do", "chat:open"]);
}]);
window.$crisp.push(["on", "session:loaded", function() {
  var storageKey = "squarespacedev-crisp-welcome-flow-seen";

  try {
    if (window.sessionStorage.getItem(storageKey)) return;
    window.sessionStorage.setItem(storageKey, "1");
  } catch (error) {
    // Continue without persistence if browser storage is unavailable.
  }

  function showMessage(message, delay) {
    window.setTimeout(function() {
      window.$crisp.push(["do", "message:show", ["text", message]]);
      window.$crisp.push(["do", "chat:open"]);
    }, delay);
  }

  showMessage("Hello there! Are you looking to create a custom Square Space website?", 0);
}]);
window.CRISP_WEBSITE_ID = "6667cdcf-5e18-4742-a7b2-1bccade8273b";

(function() {
  var d = document;
  var s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();
`.trim();

export function LiveChatWidget() {
  return (
    <Script
      id="crisp-chat-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: CRISP_INIT }}
    />
  );
}
