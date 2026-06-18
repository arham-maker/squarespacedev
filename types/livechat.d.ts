declare global {
  interface Window {
    $crisp?: Array<[string, string, unknown?]>;
    CRISP_WEBSITE_ID?: string;
  }
}

export {};
