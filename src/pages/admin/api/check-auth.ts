import type { APIRoute } from 'astro';
import { getSession } from '../../../lib/auth';

export const GET: APIRoute = async ({ request }) => {
  const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');

  if (!sessionToken) {
    return new Response(
      JSON.stringify({ authenticated: false }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const session = getSession(sessionToken);
  if (!session) {
    return new Response(
      JSON.stringify({ authenticated: false }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ authenticated: true, username: session.username }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
