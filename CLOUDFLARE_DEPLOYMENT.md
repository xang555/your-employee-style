# Cloudflare Pages Deployment Guide (Dashboard)

This guide explains how to deploy your Astro project with D1 database using the Cloudflare Dashboard.

## Prerequisites

- Cloudflare account (free tier works)
- GitHub repository with your code
- D1 database migrations in `migrations/0001_initial.sql`

## Step 1: Create D1 Database

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Storage & Databases** → **D1**
3. Click **Create database**
4. Name it `your-employee-style-db`
5. Click **Create**

### Run Migrations

1. After creating, click on your database
2. Go to **Settings** tab
3. Find **D1 migrations** section
4. Copy your migration SQL from `migrations/0001_initial.sql`
5. Paste and run the SQL in the console:
   ```sql
   CREATE TABLE IF NOT EXISTS users (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     email TEXT,
     result_id INTEGER,
     access_token TEXT UNIQUE,
     poster_image TEXT,
     created_at TEXT DEFAULT (datetime('now'))
   );

   CREATE TABLE IF NOT EXISTS results (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     definition TEXT,
     strengths TEXT,
     hrAdvice TEXT
   );

   CREATE TABLE IF NOT EXISTS admins (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     username TEXT UNIQUE NOT NULL,
     password_hash TEXT NOT NULL
   );

   CREATE INDEX IF NOT EXISTS idx_users_result_id ON users(result_id);
   CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
   CREATE INDEX IF NOT EXISTS idx_users_access_token ON users(access_token);
   CREATE INDEX IF NOT EXISTS idx_admins_username ON admins(username);
   ```

### Insert Results Data

Run this SQL to populate the results table:
```sql
INSERT OR IGNORE INTO results (id, name, definition, strengths, hrAdvice) VALUES
(1, 'The Strategist', 'Long-term visionary planner', 'Strategic thinking, Planning, Analysis', 'Give them complex problems to solve'),
(2, 'The Executor', 'Gets things done efficiently', 'Execution, Efficiency, Results-driven', 'Provide clear goals and resources'),
(3, 'The Communicator', 'Great with people and ideas', 'Communication, Collaboration, Empathy', 'Let them lead team meetings'),
(4, 'The Innovator', 'Creative problem solver', 'Creativity, Innovation, Flexibility', 'Give them freedom to experiment'),
(5, 'The Analyst', 'Detail-oriented and precise', 'Analysis, Accuracy, Research', 'Assign data-heavy projects'),
(6, 'The Diplomat', 'Brings people together', 'Diplomacy, Mediation, Harmony', 'Use them in conflict resolution'),
(7, 'The Entrepreneur', 'Risk-taker and opportunity seeker', 'Risk-taking, Opportunity-focused', 'Let them pitch new ideas'),
(8, 'The Supporter', 'Reliable team player', 'Reliability, Support, Loyalty', 'Recognize their contributions publicly'),
(9, 'The Perfectionist', 'Quality-focused improver', 'Quality, Standards, Improvement', 'Put them in QA/optimization roles');
```

### Get Database Binding Info

1. In your D1 database, go to **Settings**
2. Note your **Database ID** (you'll need this for binding)

## Step 2: Deploy to Cloudflare Pages

### Option A: Connect GitHub Repository (Recommended)

1. In Cloudflare Dashboard, go to **Workers & Pages**
2. Click **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Configure build settings:
   - **Project name**: `your-employee-style`
   - **Production branch**: `main` (or your branch)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**

### Option B: Direct Upload

1. Run locally: `npm run build`
2. In Cloudflare Dashboard, go to **Workers & Pages**
3. Click **Create application** → **Pages** → **Upload assets**
4. Upload the `dist` folder
5. Name your project `your-employee-style`

## Step 3: Bind D1 Database

1. After deployment, go to your Pages project
2. Click **Settings** → **Functions**
3. Scroll to **D1 database bindings**
4. Click **Add binding**
5. Configure:
   - **Variable name**: `DB`
   - **D1 database**: Select `your-employee-style-db`
6. Click **Save**

## Step 4: Set Environment Variables (Optional)

If you need environment variables:

1. Go to **Settings** → **Environment variables**
2. Add any needed variables (for production)

## Step 5: Configure Custom Domain (Optional)

1. Go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `quiz.yourdomain.com`)
4. Follow DNS instructions

## Step 6: Redeploy (After Binding)

After adding D1 binding, you need to redeploy:

1. Go to **Deployments**
2. Click **Retry deployment** on the latest deployment
   OR
3. Push a new commit to trigger automatic deployment

## Testing Your Deployment

1. Visit your Pages URL: `https://your-employee-style.pages.dev`
2. Test the quiz submission
3. Test admin setup at `/admin`
4. Verify database is working

## Important Notes

### Poster Generation Disabled
Poster generation has been **disabled** for Cloudflare Pages compatibility. The app now uses a default OG image (`/og-default.png`) for social media sharing. The poster generation endpoint returns a 501 (Not Implemented) error.

If you want to re-enable poster generation in the future, you'll need to:
- Use client-side canvas generation, OR
- Use an external image service (Cloudflare Images, etc.), OR
- Use Cloudflare Workers with R2 storage

### Local Development
For local development with D1, you'll still need Wrangler CLI:
```bash
npm install -g wrangler
```

Then create a local `wrangler.toml`:
```toml
name = "your-employee-style"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "your-employee-style-db"
database_id = "your-database-id-here"
```

Run local dev server:
```bash
wrangler pages dev dist --compatibility-date=2024-01-01 --d1 DB=your-employee-style-db
```

## Troubleshooting

### Database Errors
- Check that D1 binding is correctly configured
- Verify migrations were run successfully
- Check the Functions logs in Cloudflare Dashboard

### Build Errors
- Check build logs in Pages dashboard
- Verify all dependencies are in package.json
- Ensure `@astrojs/cloudflare` is installed

### Runtime Errors
- Check browser console and Network tab
- View Functions logs in Cloudflare Dashboard
- Verify D1 database is accessible

## Database Management

To view/edit your D1 database:

1. Go to **Storage & Databases** → **D1**
2. Click on your database
3. Use the console to run SQL queries

Example queries:
```sql
-- View all users
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

-- View admins
SELECT * FROM admins;

-- Count total users
SELECT COUNT(*) as total FROM users;
```
