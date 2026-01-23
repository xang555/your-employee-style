import type { APIRoute } from 'astro';
import { z } from 'zod';
import { adminExists } from '../../../lib/db';
import { authenticateAdmin, createSession } from '../../../lib/auth';

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const hasAdmin = await adminExists();
    if (!hasAdmin) {
      return new Response(
        JSON.stringify({ success: false, error: 'Admin not setup' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const validatedData = loginSchema.parse(body);

    const admin = await authenticateAdmin(validatedData.username, validatedData.password);
    if (!admin) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid credentials' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const sessionToken = createSession(admin.username);

    return new Response(
      JSON.stringify({
        success: true,
        username: admin.username,
        token: sessionToken,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid input data' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.error('Login error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
