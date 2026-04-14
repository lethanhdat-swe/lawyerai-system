const DEFAULT_CLIENT_API_BASE_URL = "http://localhost:8000";
const DEFAULT_SERVER_API_BASE_URL = "http://lawyerai-api:8000";

function normalizeBaseUrl(value: string): string {
  return value.replace(/\/$/, "");
}

export function getApiBaseUrl(): string {
  if (typeof window === "undefined") {
    const serverUrl =
      process.env.API_BASE_URL_SERVER?.trim() || DEFAULT_SERVER_API_BASE_URL;
    return normalizeBaseUrl(serverUrl);
  }

  const clientUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || DEFAULT_CLIENT_API_BASE_URL;
  return normalizeBaseUrl(clientUrl);
}
