import type { APIRoute } from 'astro';
import { getSession } from '../../../lib/auth';
import { getAllUsers } from '../../../lib/db';

export const GET: APIRoute = async ({ request }) => {
  try {
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    const session = getSession(sessionToken || '');

    if (!session) {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const users = await getAllUsers();

    return new Response(
      JSON.stringify({ success: true, data: users }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Reports error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
