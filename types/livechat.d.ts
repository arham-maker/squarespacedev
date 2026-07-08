type ZendeskWebWidgetAction = "open" | "close" | "show" | "hide";

type ZendeskUserEvent = {
  action?: string;
  [key: string]: unknown;
};

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
    command: "webWidget:on",
    event: "userEvent",
    callback: (userEvent: ZendeskUserEvent) => void
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
        offset?: {
          horizontal?: string;
          vertical?: string;
        };
      };
    };
  }
}

export {};
