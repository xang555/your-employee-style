-- Migration: Initial schema for User, Result, and Admin tables
-- This creates the database tables for the Employee Style Quiz app

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  result_id INTEGER,
  access_token TEXT UNIQUE,
  poster_image TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Results table
CREATE TABLE IF NOT EXISTS results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  definition TEXT,
  strengths TEXT,
  hrAdvice TEXT
);

-- Admins table
CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_result_id ON users(result_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_access_token ON users(access_token);
CREATE INDEX IF NOT EXISTS idx_admins_username ON admins(username);
