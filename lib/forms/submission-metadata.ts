import type { FormSubmissionMetadata } from "@/lib/forms/types";

type IpWhoIsResponse = {
  success?: boolean;
  country?: string | null;
  city?: string | null;
  connection?: {
    isp?: string | null;
    org?: string | null;
  } | null;
};

const IP_HEADERS = [
  "x-forwarded-for",
  "x-real-ip",
  "cf-connecting-ip",
  "true-client-ip",
  "x-client-ip",
] as const;

function normalizeIp(value: string): string | null {
  const ip = value.trim().replace(/^"|"$/g, "");
  if (!ip || ip.toLowerCase() === "unknown") return null;

  const bracketedIpv6 = ip.match(/^\[([^\]]+)\](?::\d+)?$/);
  if (bracketedIpv6) return bracketedIpv6[1];

  const ipv4WithPort = ip.match(/^(\d{1,3}(?:\.\d{1,3}){3}):\d+$/);
  if (ipv4WithPort) return ipv4WithPort[1];

  if (ip.startsWith("::ffff:")) return ip.slice("::ffff:".length);

  return ip;
}

function getClientIp(headers: Headers): string | null {
  for (const header of IP_HEADERS) {
    const value = headers.get(header);
    if (!value) continue;

    for (const candidate of value.split(",")) {
      const ip = normalizeIp(candidate);
      if (ip) return ip;
    }
  }

  return null;
}

function isPrivateIp(ip: string): boolean {
  const lowerIp = ip.toLowerCase();
  if (
    lowerIp === "localhost" ||
    lowerIp === "::1" ||
    lowerIp.startsWith("fc") ||
    lowerIp.startsWith("fd") ||
    lowerIp.startsWith("fe80:")
  ) {
    return true;
  }

  const parts = ip.split(".").map((part) => Number(part));
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) {
    return false;
  }

  const [first, second] = parts;
  return (
    first === 10 ||
    first === 127 ||
    first === 0 ||
    (first === 100 && second >= 64 && second <= 127) ||
    (first === 169 && second === 254) ||
    (first === 172 && second >= 16 && second <= 31) ||
    (first === 192 && second === 168)
  );
}

async function lookupGeoIp(
  ipAddress: string
): Promise<FormSubmissionMetadata["geo"] | undefined> {
  if (!ipAddress || ipAddress === "Unknown" || isPrivateIp(ipAddress)) {
    return undefined;
  }

  try {
    const response = await fetch(
      `https://ipwho.is/${encodeURIComponent(ipAddress)}`,
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(1500),
      }
    );

    if (!response.ok) return undefined;

    const data = (await response.json()) as IpWhoIsResponse;
    if (data.success === false) return undefined;

    const geo = {
      country: data.country?.trim() || undefined,
      city: data.city?.trim() || undefined,
      isp:
        data.connection?.isp?.trim() ||
        data.connection?.org?.trim() ||
        undefined,
    };

    return Object.values(geo).some(Boolean) ? geo : undefined;
  } catch (error) {
    console.warn("GeoIP lookup failed:", error);
    return undefined;
  }
}

export async function buildSubmissionMetadata(
  request: Request
): Promise<FormSubmissionMetadata> {
  const ipAddress = getClientIp(request.headers) ?? "Unknown";
  const userAgent = request.headers.get("user-agent")?.trim() || "Unknown";
  const submittedAt = new Date().toISOString();
  const geo = await lookupGeoIp(ipAddress);

  return {
    ipAddress,
    userAgent,
    submittedAt,
    ...(geo ? { geo } : {}),
  };
}
