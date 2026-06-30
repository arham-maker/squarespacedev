declare global {
  interface Window {
    zE?: (command: "messenger", action: "open") => void;
  }
}

export {};
