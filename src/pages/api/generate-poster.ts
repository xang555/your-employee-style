import type { APIRoute } from 'astro';

/**
 * Poster Generation API - DISABLED for Cloudflare Pages
 *
 * This endpoint is disabled because it requires 'canvas' and 'fs' modules
 * which are not compatible with Cloudflare Pages/Workers runtime.
 *
 * Poster generation would require:
 * - Client-side canvas generation, OR
 * - External image service (Cloudflare Images, etc.), OR
 * - Cloudflare Workers with R2 storage
 */
export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({
      success: false,
      error: 'Poster generation is not available on this platform'
    }),
    {
      status: 501, // Not Implemented
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
