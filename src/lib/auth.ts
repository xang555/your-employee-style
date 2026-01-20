import bcrypt from 'bcrypt';
import { type Admin, getAdminByUsername } from './db';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function authenticateAdmin(
  username: string,
  password: string
): Promise<Admin | null> {
  const admin = getAdminByUsername(username);
  if (!admin) {
    return null;
  }
  const isValid = await verifyPassword(password, admin.password_hash);
  return isValid ? admin : null;
}

export function generateSessionToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

const sessions = new Map<string, { username: string; expiresAt: number }>();

const SESSION_DURATION = 24 * 60 * 60 * 1000;

export function createSession(username: string): string {
  const token = generateSessionToken();
  const expiresAt = Date.now() + SESSION_DURATION;
  sessions.set(token, { username, expiresAt });
  return token;
}

export function getSession(token: string): { username: string } | null {
  const session = sessions.get(token);
  if (!session) {
    return null;
  }
  if (Date.now() > session.expiresAt) {
    sessions.delete(token);
    return null;
  }
  return { username: session.username };
}

export function deleteSession(token: string): void {
  sessions.delete(token);
}

export function cleanupExpiredSessions(): void {
  const now = Date.now();
  for (const [token, session] of sessions.entries()) {
    if (now > session.expiresAt) {
      sessions.delete(token);
    }
  }
}
