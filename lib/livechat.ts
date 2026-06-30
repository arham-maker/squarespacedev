function openZendeskMessenger(attempt = 0) {
  if (typeof window === "undefined") return;

  if (window.zE) {
    window.zE("messenger", "open");
    return;
  }

  if (attempt >= 20) return;

  window.setTimeout(() => openZendeskMessenger(attempt + 1), 100);
}

export function openLiveChat() {
  openZendeskMessenger();
}
