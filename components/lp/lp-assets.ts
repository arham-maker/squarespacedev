export const LP_ASSETS = "/lp/assets";

export const LP_SSD_LOGO = `${LP_ASSETS}/${encodeURIComponent("SSD Logo (1).png")}`;

export const LP_TRUSTPILOT_EXCELLENT = `${LP_ASSETS}/trustpilot_excellent.svg`;

export function lpImage(path: string) {
  return `${LP_ASSETS}/images/${path}`;
}
