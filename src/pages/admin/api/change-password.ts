import type { APIRoute } from 'astro';
import { z } from 'zod';
import { getAdminByUsername, updateAdminPassword } from '../../../lib/db';
import { getSession, hashPassword, verifyPassword } from '../../../lib/auth';

const changePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(8).max(100),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const sessionToken = request.headers.get('authorization')?.replace('Bearer ', '');
    const session = getSession(sessionToken || '');

    if (!session) {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const validatedData = changePasswordSchema.parse(body);

    const admin = getAdminByUsername(session.username);
    if (!admin) {
      return new Response(
        JSON.stringify({ success: false, error: 'Admin not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const isCurrentPasswordValid = await verifyPassword(
      validatedData.currentPassword,
      admin.password_hash
    );

    if (!isCurrentPasswordValid) {
      return new Response(
        JSON.stringify({ success: false, error: 'Current password is incorrect' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const newPasswordHash = await hashPassword(validatedData.newPassword);
    updateAdminPassword(session.username, newPasswordHash);

    return new Response(
      JSON.stringify({ success: true, message: 'Password updated successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid input data' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.error('Change password error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
