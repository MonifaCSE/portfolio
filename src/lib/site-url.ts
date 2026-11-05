/**
 * Utility to retrieve base path for GitHub Pages deployment.
 * Example: "/portfolio" or "" if running in development.
 */
export function getBasePath(): string {
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/portfolio" : "");
  if (!rawBasePath) return "";
  const formatted = rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`;
  return formatted.endsWith("/") ? formatted.slice(0, -1) : formatted;
}

/**
 * Utility to retrieve the configured production site URL.
 * Automatically supplied by GitHub Actions deployment workflow (steps.pages.outputs.base_url)
 * or process.env.NEXT_PUBLIC_SITE_URL.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
  }
  
  // Safe canonical fallback for local build/dev with repository base path
  const basePath = getBasePath();
  return `https://monifacse.github.io${basePath}`;
}
