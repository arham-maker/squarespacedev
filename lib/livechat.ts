export const ZENDESK_WIDGET_SRC =
  "https://static.zdassets.com/ekr/snippet.js?key=923e51fa-97d5-49a2-9055-0fb23e466aba";

let isWidgetOpen = false;
let listenersRegistered = false;

function showZendeskWidget() {
  window.zE?.("webWidget", "show");
}

function openZendeskWidget() {
  showZendeskWidget();
  window.zE?.("webWidget", "open");
}

export function runWhenWebWidgetReady(
  callback: () => void | (() => void)
): () => void {
  let cancelled = false;
  let attempt = 0;
  let timer: number | undefined;
  let innerCleanup: (() => void) | void;

  const tryReady = () => {
    if (cancelled) return;

    if (typeof window.zE === "function") {
      innerCleanup = callback();
      return;
    }

    if (attempt >= 150) return;

    attempt += 1;
    timer = window.setTimeout(tryReady, 100);
  };

  tryReady();

  return () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);
    innerCleanup?.();
  };
}

export function openLiveChat() {
  runWhenWebWidgetReady(openZendeskWidget);
}

export function setupZendeskAgentReplyListener(): () => void {
  return runWhenWebWidgetReady(() => {
    if (listenersRegistered) return;

    listenersRegistered = true;
    showZendeskWidget();

    const unsubscribers: Array<() => void> = [];

    try {
      unsubscribers.push(
        window.zE!("webWidget:on", "open", () => {
          isWidgetOpen = true;
        })
      );

      unsubscribers.push(
        window.zE!("webWidget:on", "close", () => {
          isWidgetOpen = false;
        })
      );

      let previousUnreadCount = 0;
      unsubscribers.push(
        window.zE!("webWidget:on", "chat:unreadMessages", (count) => {
          if (count > previousUnreadCount && !isWidgetOpen) {
            openZendeskWidget();
          }

          previousUnreadCount = count;
        })
      );
    } catch (error) {
      console.warn("Unable to register Zendesk listeners:", error);
      listenersRegistered = false;
    }

    return () => {
      unsubscribers.forEach((unsubscribe) => unsubscribe());
      listenersRegistered = false;
      isWidgetOpen = false;
    };
  });
}
