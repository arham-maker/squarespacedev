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
  var memoryKey = "__squarespacedevCrispWelcomeFlowSeen";

  function hasSeenWelcomeMessage() {
    try {
      if (window[memoryKey]) return true;
      if (window.localStorage.getItem(storageKey) === "1") return true;
      if (window.sessionStorage.getItem(storageKey) === "1") return true;
    } catch (error) {
      return Boolean(window[memoryKey]);
    }

    return false;
  }

  function markWelcomeMessageSeen() {
    window[memoryKey] = true;

    try {
      window.localStorage.setItem(storageKey, "1");
      window.sessionStorage.setItem(storageKey, "1");
    } catch (error) {
      // Keep the in-memory flag when browser storage is unavailable.
    }
  }

  if (hasSeenWelcomeMessage()) return;
  markWelcomeMessageSeen();

  function showMessage(message, delay) {
    window.setTimeout(function() {
      if (!window[memoryKey]) return;
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
