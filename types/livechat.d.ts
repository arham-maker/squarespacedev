type ZendeskWebWidgetAction = "open" | "close" | "show" | "hide";

type ZendeskApi = {
  (command: "webWidget", action: ZendeskWebWidgetAction): void;
  (
    command: "webWidget:on",
    event: "open" | "close",
    callback: () => void
  ): () => void;
  (
    command: "webWidget:on",
    event: "chat:unreadMessages",
    callback: (count: number) => void
  ): () => void;
  (
    command: "webWidget:get",
    property: "display"
  ): string;
};

declare global {
  interface Window {
    zE?: ZendeskApi;
    zESettings?: {
      webWidget?: {
        zIndex?: number;
      };
    };
  }
}

export {};
