import type { APIRoute } from 'astro';
import { getSession } from '../../../lib/auth';
import db from '../../../lib/db';
import type { User, Result } from '../../../lib/db';

interface UserWithResult extends User {
  result_name: string;
  result_definition: string;
}

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

    const users = db
      .prepare(`
        SELECT u.*, r.name as result_name, r.definition as result_definition
        FROM users u
        LEFT JOIN results r ON u.result_id = r.id
        ORDER BY u.created_at DESC
      `)
      .all() as UserWithResult[];

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
