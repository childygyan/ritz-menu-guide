/**
 * Redirect non-canonical hostnames to the main custom domain.
 * - ritz-menu-guide.pages.dev -> https://ritzmenuguide.org (301, path-preserving)
 * - www.ritzmenuguide.org -> https://ritzmenuguide.org (301, path-preserving)
 * Preview deployments (*.hash.pages.dev) pass through untouched for testing.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (
    url.hostname === "ritz-menu-guide.pages.dev" ||
    url.hostname === "www.ritzmenuguide.org"
  ) {
    url.hostname = "ritzmenuguide.org";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
