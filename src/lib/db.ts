/**
 * Cloudflare D1 Database Module
 * Provides SQLite-compatible interface for Cloudflare D1
 */

// Types
export interface User {
  id: number;
  name: string;
  email: string | null;
  result_id: number;
  created_at: string;
}

export interface Result {
  id: number;
  name: string;
  definition: string | null;
  strengths: string | null;
  hrAdvice: string | null;
}

export interface Admin {
  id: number;
  username: string;
  password_hash: string;
}

// Get D1 database from context
function getDB(): D1Database {
  // @ts-ignore - Cloudflare runtime provides this
  return Astro.locals.runtime?.env?.DB;
}

// SQLite-compatible Database class
class Database {
  private db: D1Database;

  constructor() {
    this.db = getDB();
  }

  prepare(sql: string) {
    const db = this.db;

    return {
      async bind(...params: any[]) {
        const statement = db.prepare(sql);

        return {
          async run(): Promise<D1Result> {
            return statement.bind(...params).run();
          },
          async all<T = any>(): Promise<{ results: T[] }> {
            return statement.bind(...params).all();
          },
          async first<T = any>(): Promise<T | null> {
            return statement.bind(...params).first() as Promise<T | null>;
          },
          async get<T = any>(): Promise<T | null> {
            return statement.bind(...params).first() as Promise<T | null>;
          }
        };
      },

      async run(...params: any[]): Promise<D1Result> {
        return db.prepare(sql).bind(...params).run();
      },

      async all<T = any>(...params: any[]): Promise<{ results: T[] }> {
        return db.prepare(sql).bind(...params).all();
      },

      async first<T = any>(...params: any[]): Promise<T | null> {
        return db.prepare(sql).bind(...params).first() as Promise<T | null>;
      },

      async get<T = any>(...params: any[]): Promise<T | null> {
        return db.prepare(sql).bind(...params).first() as Promise<T | null>;
      }
    };
  }
}

// Default export - SQLite-compatible db instance
export const db = new Database();
export default db;

// Admin functions
export function getAdminByUsername(username: string): Admin | null {
  // This won't work synchronously with D1
  // API routes need to be updated to async
  return null;
}

export async function getAdminByUsernameAsync(username: string): Promise<Admin | null> {
  const result = await getDB().prepare(
    'SELECT * FROM admins WHERE username = ?'
  ).first<Admin>();
  return result || null;
}

export async function adminExists(): Promise<boolean> {
  const result = await getDB().prepare(
    'SELECT COUNT(*) as count FROM admins'
  ).first<{ count: number }>();
  return (result?.count || 0) > 0;
}

export async function createAdmin(username: string, passwordHash: string): Promise<number> {
  const result = await getDB().prepare(
    'INSERT INTO admins (username, password_hash) VALUES (?, ?)'
  ).bind(username, passwordHash).run();
  return result.meta.last_row_id;
}

export async function updateAdminPassword(username: string, passwordHash: string): Promise<void> {
  await getDB().prepare(
    'UPDATE admins SET password_hash = ? WHERE username = ?'
  ).bind(passwordHash, username).run();
}

// Generate access token for quiz results
export function generateAccessToken(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

// Helper functions for API routes
export async function createUser(name: string, email: string | null, resultId: number, accessToken: string): Promise<number> {
  const result = await getDB().prepare(
    'INSERT INTO users (name, email, result_id, access_token) VALUES (?, ?, ?, ?)'
  ).bind(name, email, resultId, accessToken).run();
  return result.meta.last_row_id;
}

export async function getUserByAccessToken(token: string): Promise<(User & { result?: Result }) | null> {
  const result = await getDB().prepare(`
    SELECT u.*, r.name as result_name, r.definition as result_definition,
           r.strengths as result_strengths, r.hrAdvice as result_hrAdvice
    FROM users u
    LEFT JOIN results r ON u.result_id = r.id
    WHERE u.access_token = ?
  `).bind(token).first() as any;
  return result || null;
}

export async function getUserById(id: number): Promise<(User & { result?: Result }) | null> {
  const result = await getDB().prepare(`
    SELECT u.*, r.name as result_name, r.definition as result_definition,
           r.strengths as result_strengths, r.hrAdvice as result_hrAdvice
    FROM users u
    LEFT JOIN results r ON u.result_id = r.id
    WHERE u.id = ?
  `).bind(id).first() as any;
  return result || null;
}

export async function getAllUsers(): Promise<(User & { result_name: string; result_definition: string })[]> {
  const result = await getDB().prepare(`
    SELECT u.*, r.name as result_name, r.definition as result_definition
    FROM users u
    LEFT JOIN results r ON u.result_id = r.id
    ORDER BY u.created_at DESC
  `).all();
  return result.results as any;
}

export async function getResultById(id: number): Promise<Result | null> {
  return await getDB().prepare('SELECT * FROM results WHERE id = ?').bind(id).first<Result>();
}

export async function getUserByToken(token: string): Promise<(User & { result_id: number; poster_image?: string }) | null> {
  const result = await getDB().prepare(
    'SELECT * FROM users WHERE access_token = ?'
  ).bind(token).first() as any;
  return result || null;
}

export async function updateUserPosterImage(userId: number, posterUrl: string): Promise<void> {
  await getDB().prepare(
    'UPDATE users SET poster_image = ? WHERE id = ?'
  ).bind(posterUrl, userId).run();
}
