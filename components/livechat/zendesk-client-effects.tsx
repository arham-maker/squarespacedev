"use client";

import { useEffect } from "react";
import { openLiveChat, setupZendeskAgentReplyListener } from "@/lib/livechat";

const AUTO_OPEN_DELAY_MS = 2000;

export function ZendeskClientEffects() {
  useEffect(() => {
    const cancelListenerSetup = setupZendeskAgentReplyListener();
    const autoOpenTimer = window.setTimeout(openLiveChat, AUTO_OPEN_DELAY_MS);

    return () => {
      window.clearTimeout(autoOpenTimer);
      cancelListenerSetup();
    };
  }, []);

  return null;
}
