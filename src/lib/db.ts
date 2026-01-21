import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

const dbDir = path.join(process.cwd(), 'data');
const dbPath = path.join(dbDir, 'assessment.db');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    result_id INTEGER NOT NULL,
    access_token TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (result_id) REFERENCES results(id)
  );
`);

// Add access_token column if it doesn't exist (for existing databases)
try {
  db.prepare(`ALTER TABLE users ADD COLUMN access_token TEXT UNIQUE`).run();
} catch (e) {
  // Column already exists, ignore error
}

db.exec(`
  CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    definition TEXT NOT NULL,
    strengths TEXT NOT NULL,
    hr_advice TEXT NOT NULL
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

const existingResults = db.prepare('SELECT COUNT(*) as count FROM results').get() as { count: number };

if (existingResults.count === 0) {
  const insertResult = db.prepare(`
    INSERT INTO results (id, name, definition, strengths, hr_advice)
    VALUES (?, ?, ?, ?, ?)
  `);

  const results = [
    {
      id: 1,
      name: 'The Security Seeker',
      definition: 'You thrive in stable, predictable environments where you know what to expect. You value job security, clear guidelines, and consistent routines.',
      strengths: 'Reliability, consistency, risk management, thoroughness, and creating stable processes.',
      hrAdvice: 'Provide clear job descriptions, regular feedback, stable work environment, and emphasize long-term security. Avoid frequent restructuring.'
    },
    {
      id: 2,
      name: 'The Social Connector',
      definition: 'You are energized by teamwork and building strong relationships. Collaboration and interpersonal connections are at the heart of your work satisfaction.',
      strengths: 'Team building, communication, empathy, collaboration, and creating positive work culture.',
      hrAdvice: 'Encourage team projects, social events, mentorship opportunities. Create collaborative spaces and recognize relationship-building contributions.'
    },
    {
      id: 3,
      name: 'The Star Performer',
      definition: 'You are driven by achievement, recognition, and competition. You love setting ambitious goals and being acknowledged for your accomplishments.',
      strengths: 'Goal achievement, competitive drive, performance excellence, and inspiring others through results.',
      hrAdvice: 'Implement performance-based rewards, public recognition programs, clear KPIs, and advancement opportunities. Celebrate wins visibly.'
    },
    {
      id: 4,
      name: 'The Leader',
      definition: 'You have a natural inclination toward taking charge and making strategic decisions. You enjoy responsibility, influence, and guiding teams toward success.',
      strengths: 'Strategic thinking, decision-making, vision setting, team direction, and accountability.',
      hrAdvice: 'Provide leadership opportunities, decision-making authority, management training, and challenging projects requiring ownership.'
    },
    {
      id: 5,
      name: 'The Reward Seeker',
      definition: 'Financial compensation and tangible benefits are primary motivators for you. You seek fair pay, bonuses, and material rewards for your contributions.',
      strengths: 'Financial planning, ROI focus, value-driven decisions, and negotiation skills.',
      hrAdvice: 'Offer competitive compensation, clear bonus structures, transparent pay scales, and financial incentives tied to performance.'
    },
    {
      id: 6,
      name: 'The Specialist',
      definition: 'You are passionate about deep expertise in your field. You love becoming a subject matter expert and solving complex, technical problems.',
      strengths: 'Deep knowledge, problem-solving, technical excellence, continuous learning, and innovation in specialized areas.',
      hrAdvice: 'Support continuous education, certifications, specialized projects, expert recognition, and opportunities to mentor in their field.'
    },
    {
      id: 7,
      name: 'The Creative Innovator',
      definition: 'You thrive on novelty, creativity, and innovation. Routine work drains you, while fresh ideas and unconventional solutions energize you.',
      strengths: 'Innovation, creative problem-solving, adaptability, idea generation, and challenging the status quo.',
      hrAdvice: 'Provide creative freedom, innovation time, variety in projects, brainstorming sessions, and minimize repetitive tasks.'
    },
    {
      id: 8,
      name: 'The Autonomous',
      definition: 'You value independence and self-management. You work best when given freedom to decide how, when, and where you complete your work.',
      strengths: 'Self-direction, accountability, time management, independent problem-solving, and initiative.',
      hrAdvice: 'Offer flexible work arrangements, remote options, outcome-based evaluation, and minimal micromanagement. Trust their process.'
    },
    {
      id: 9,
      name: 'The Entertainer',
      definition: 'You bring energy, humor, and positivity to the workplace. You thrive when you can make work enjoyable and create a fun atmosphere for your team.',
      strengths: 'Morale boosting, positive energy, stress relief, team engagement, and creating enjoyable work environments.',
      hrAdvice: 'Allow personality expression, support social initiatives, recognize their positive impact on culture, and create space for fun.'
    }
  ];

  const insertMany = db.transaction((results: any[]) => {
    for (const result of results) {
      insertResult.run(result.id, result.name, result.definition, result.strengths, result.hrAdvice);
    }
  });

  insertMany(results);
  console.log('Database seeded with results!');
}

export default db;

export type User = {
  id: number;
  name: string;
  email: string;
  result_id: number;
  access_token: string;
  created_at: Date;
};

export type Result = {
  id: number;
  name: string;
  definition: string;
  strengths: string;
  hr_advice: string;
};

export type Admin = {
  id: number;
  username: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
};

export function adminExists(): boolean {
  const result = db.prepare('SELECT COUNT(*) as count FROM admin').get() as { count: number };
  return result.count > 0;
}

export function getAdminByUsername(username: string): Admin | undefined {
  return db.prepare('SELECT * FROM admin WHERE username = ?').get(username) as Admin | undefined;
}

export function createAdmin(username: string, passwordHash: string): void {
  db.prepare('INSERT INTO admin (username, password_hash) VALUES (?, ?)').run(username, passwordHash);
}

export function updateAdminPassword(username: string, passwordHash: string): void {
  db.prepare('UPDATE admin SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE username = ?').run(
    passwordHash,
    username
  );
}

/**
 * Generate a cryptographically secure random access token
 * Returns a 32-character hex string (128 bits of entropy)
 */
export function generateAccessToken(): string {
  return crypto.randomBytes(16).toString('hex');
}

/**
 * Get a user by their access token
 */
export function getUserByToken(token: string): User | undefined {
  return db.prepare('SELECT * FROM users WHERE access_token = ?').get(token) as User | undefined;
}
