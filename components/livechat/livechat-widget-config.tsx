"use client";

import { useEffect } from "react";
import { LIVECHAT_WIDGET } from "@/lib/data/livechat-widget";

export function LiveChatWidgetConfig() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--livechat-maximized-height",
      `${LIVECHAT_WIDGET.maximizedHeightPx}px`
    );

    const onVisibilityChanged = (data: { visibility?: string }) => {
      document.body.classList.toggle(
        "livechat-maximized",
        data.visibility === "maximized"
      );
    };

    const bindVisibilityListener = () => {
      const widget = window.LiveChatWidget;
      if (!widget) return;

      widget.on("visibility_changed", onVisibilityChanged);
      return () => {
        widget.off("visibility_changed", onVisibilityChanged);
        document.body.classList.remove("livechat-maximized");
      };
    };

    const widget = window.LiveChatWidget;
    if (widget) {
      return bindVisibilityListener();
    }

    let cleanup: (() => void) | undefined;
    window.LiveChatWidget?.once("ready", () => {
      cleanup = bindVisibilityListener();
    });

    return () => {
      cleanup?.();
      document.body.classList.remove("livechat-maximized");
    };
  }, []);

  return null;
}
