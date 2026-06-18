type CrispCommand = [string, string, unknown?];

function pushCrispCommand(command: CrispCommand) {
  window.$crisp = window.$crisp || [];
  window.$crisp.push(command);
}

export function openLiveChat() {
  if (typeof window === "undefined") return;

  pushCrispCommand(["do", "chat:open"]);
}
