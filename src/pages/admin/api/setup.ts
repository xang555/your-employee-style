import type { APIRoute } from 'astro';
import { z } from 'zod';
import { adminExists, createAdmin } from '../../../lib/db';
import { hashPassword, createSession } from '../../../lib/auth';

const setupSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(100),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('Setup request received');

    const hasAdmin = await adminExists();
    if (hasAdmin) {
      console.log('Admin already exists');
      return new Response(
        JSON.stringify({ success: false, error: 'Admin already exists' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    console.log('Request body:', { username: body.username, password: '***' });

    const validatedData = setupSchema.parse(body);
    console.log('Validation passed');

    const passwordHash = await hashPassword(validatedData.password);
    console.log('Password hashed');

    await createAdmin(validatedData.username, passwordHash);
    console.log('Admin created');

    const sessionToken = createSession(validatedData.username);
    console.log('Session created, token:', sessionToken.substring(0, 10) + '...');

    return new Response(
      JSON.stringify({
        success: true,
        username: validatedData.username,
        token: sessionToken,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      console.log('Validation error:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid input data' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.error('Setup error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
