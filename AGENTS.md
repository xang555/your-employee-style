# AI Agent Guidelines for your-employee-style

## Project Overview

**Your Employee Style** is a bilingual (Thai/English) professional assessment web application that helps users discover their work style through a 12-question quiz. The app features 9 distinct employee styles with detailed results, social sharing capabilities, and an admin dashboard.

**Tech Stack:**
- Astro 5 (SSR)
- TypeScript
- SQLite (better-sqlite3)
- Tailwind CSS
- Canvas (image generation)
- Zod (validation)

## Build & Development Commands

```bash
# Start development server (port 4321)
yarn dev

# Build for production (includes type checking)
yarn build

# Preview production build
yarn preview

# Install dependencies
yarn add <package-name>

# Note: Use yarn, not npm (npm has permission issues on this system)
```

## Project Structure

```
src/
├── layouts/
│   ├── Layout.astro           # Base HTML structure for main site
│   └── AdminLayout.astro     # Admin dashboard layout with sidebar
├── lib/                      # Shared utilities
│   ├── db.ts                # Database connection, models, migrations
│   ├── auth.ts              # Admin authentication utilities
│   ├── questions.ts         # Quiz questions and style data
│   ├── translations.ts      # Thai/English translations
│   ├── icons.ts             # Style icon SVG generators
│   └── validation.ts        # Zod schemas
├── pages/
│   ├── admin/
│   │   ├── api/            # Admin API endpoints
│   │   │   ├── setup.ts
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   ├── change-password.ts
│   │   │   ├── reports.ts
│   │   │   └── check-auth.ts
│   │   ├── dashboard.astro
│   │   ├── reports.astro
│   │   ├── settings.astro
│   │   └── login.astro
│   ├── api/
│   │   ├── submit.ts       # Quiz submission endpoint
│   │   └── generate-poster.ts  # Poster image generation
│   ├── result/
│   │   └── [id].astro       # Result page (uses access token)
│   ├── index.astro         # Landing page
│   ├── onboarding.astro    # User name/email collection
│   ├── quiz.astro          # Quiz questions interface
│   ├── 404.astro           # 404 error page
│   └── 500.astro           # 500 error page
├── components/
│   └── LanguageSwitcher.astro
├── middleware.ts           # Locale detection & admin auth
└── layouts/
    ├── Layout.astro
    └── AdminLayout.astro

public/
└── posters/               # Generated poster images (gitignored)

data/
└── assessment.db          # SQLite database (gitignored)
```

## Security Features

### Access Token System (IDOR Prevention)
**Critical:** Result pages use cryptographically secure access tokens instead of sequential IDs.

**Why:** Prevents users from guessing other users' results by incrementing IDs (e.g., `/result/123` → `/result/124`).

**Implementation:**
```typescript
// Database schema includes:
access_token TEXT UNIQUE NOT NULL,  // 32-char hex token (128-bit entropy)
poster_image TEXT                   // Path to generated poster

// Token generation
import { generateAccessToken } from '../lib/db';
const accessToken = generateAccessToken(); // Uses crypto.randomBytes(16)

// Result page URL format
/result/{accessToken}  // NOT /result/{sequentialId}

// Token validation in result page
const tokenRegex = /^[a-f0-9]{32}$/i;
if (!tokenRegex.test(id)) {
  return Astro.redirect('/');
}
const user = getUserByToken(id);
```

**Helper Functions:**
- `generateAccessToken()` - Generate secure 32-char hex token
- `getUserByToken(token)` - Look up user by access token
- `updateUserPosterImage(userId, imagePath)` - Store generated poster path

## Database Schema

### users table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  result_id INTEGER NOT NULL,           -- Style type (1-9)
  access_token TEXT UNIQUE NOT NULL,   -- Secure token for result URL
  poster_image TEXT,                    -- Path to generated poster
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (result_id) REFERENCES results(id)
);
```

### results table
```sql
CREATE TABLE results (
  id INTEGER PRIMARY KEY,               -- Style type ID (1-9)
  name TEXT NOT NULL,
  definition TEXT NOT NULL,
  strengths TEXT NOT NULL,
  hr_advice TEXT NOT NULL
);
```

### admin table
```sql
CREATE TABLE admin (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Internationalization (i18n)

### Supported Languages
- **Thai (th)** - Default language
- **English (en)** - Optional language

### Locale Detection Priority
1. URL parameter: `?lang=en` or `?lang=th`
2. Cookie: `locale` cookie (1 year expiration)
3. Default: Thai if no cookie or URL parameter

### Translation Keys Structure
All translations in `src/lib/translations.ts`:
- `common` - Shared UI text, buttons, labels
- `landing` - Landing page hero, features
- `onboarding` - User form inputs
- `quiz` - Quiz interface, navigation
- `result` - Results page, sharing, styles
- `admin` - Admin dashboard all sections
- `styles` - 9 style type descriptions (1-9)
- `errors` - Error pages

### Using Translations

**Server-side (Astro frontmatter):**
```typescript
const locale = (Astro.cookies.get('locale')?.value || 'th') as 'th' | 'en';
const trans = getTranslations(locale);

function t(key: string): string {
  const keys = key.split('.');
  let value: any = trans;
  for (const k of keys) {
    value = value[k];
    if (value === undefined) return key;
  }
  return value as string;
}

// Usage
t('landing.heroTitle')
t('result.share')
```

**Client-side (with define:vars):**
```astro
<script define:vars={{ translations: trans, locale }}>
  function getT(key) {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }
    return value;
  }

  // Usage
  const title = getT('result.title');
</script>
```

**HTML with data attribute (avoiding serialization issues):**
```astro
<div data-translations={JSON.stringify(trans)}>
  <!-- Client-side parse with JSON.parse() -->
</div>
```

### Questions Data (src/lib/questions.ts)
Each question has bilingual text:
```typescript
{
  id: 1,
  text: "What motivates you most in your career?",     // English
  textTh: "อะไรคือแรงบันดาลใจสำคัญที่สุดของคุณในอาชีพ?",  // Thai
  answers: [
    {
      id: "1a",
      text: "Job security...",      // English
      textTh: "ความมั่นคง...",      // Thai
      categoryId: 1                 // Maps to style type
    }
  ]
}
```

## API Endpoints

### POST /api/submit
Submits quiz answers and creates user record.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "answers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]  // 12 answers, style IDs 1-9
}
```

**Response:**
```json
{
  "success": true,
  "userId": 123,
  "resultId": 2,           // Winning style type (1-9)
  "accessToken": "a1b2c3d4e5f6..."  // Secure token for result page
}
```

**Scoring Algorithm:**
1. Count frequency of each style ID in answers
2. Winner = highest count
3. Tie breaker = lowest ID wins

### POST /api/generate-poster
Generates shareable poster image for social media.

**Request:**
```json
{
  "token": "a1b2c3d4e5f6...",
  "locale": "th"
}
```

**Response:**
```json
{
  "success": true,
  "posterUrl": "/posters/poster-a1b2c3d4e5f6....png"
}
```

**Features:**
- 1200x630px (optimized for Facebook, LinkedIn, Twitter)
- Style-specific gradient colors
- White card with rounded corners
- Style name (bilingual)
- Branding and tagline
- One-time generation (cached in database)
- Saved to `/public/posters/`

## Admin Dashboard

### Authentication & Security
- **Setup:** First visit to `/admin/login` creates admin account
- **Password hashing:** bcrypt with 10 salt rounds
- **Session management:** In-memory Map + HTTP-only cookies
- **Session expiration:** 24 hours with auto-cleanup
- **Middleware protection:** All `/admin/*` routes except `/admin/login`

### Admin Routes
- `/admin` - Redirects to login or dashboard
- `/admin/login` - Login or first-time setup
- `/admin/dashboard` - Main dashboard with stats
- `/admin/reports` - User assessments table with "View Result" buttons
- `/admin/settings` - Change admin password

### Admin API Endpoints
- `POST /admin/api/setup` - Create initial admin
- `POST /admin/api/login` - Authenticate, get session token
- `POST /admin/api/logout` - Invalidate session
- `POST /admin/api/change-password` - Update password
- `GET /admin/api/reports` - Get all user results (authenticated)
- `GET /admin/api/check-auth` - Verify authentication

### Reports Page Features
- Table showing all user assessments
- Columns: Style icon, Name, Email, Result type, Date, Actions
- **"View Result" button** - Opens user's result page in new tab using access token
- **Export CSV button** - Downloads all user assessments as CSV file with bilingual headers
- Supports both Thai and English
- Real-time data fetching
- Refresh button to reload data

**CSV Export Implementation:**
```javascript
// Client-side CSV generation
function exportToCSV() {
  const headers = [tableName, tableEmail, tableResult, tableDate];
  let csvContent = headers.join(',') + '\n';

  reports.forEach(report => {
    const row = [
      `"${report.name}"`,
      `"${report.email}"`,
      `"${getStyleName(report.result_id)}"`,
      `"${new Date(report.created_at).toLocaleString()}"`
    ];
    csvContent += row.join(',') + '\n';
  });

  // Create download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `employee-style-reports-${date}.csv`;
  link.click();
}
```

## Social Sharing Features

### Poster Image Generation (Server-Side)
**Location:** `src/pages/result/[id].astro` (generates on page load)

**User flow:**
1. User completes quiz, gets result page
2. Server automatically generates 1200x630px poster if not exists
3. Poster is cached in database for future visits
4. Open Graph meta tags include poster URL for social media crawlers

**Implementation:**
```typescript
// Server-side generation in result page
const POSTER_WIDTH = 1200;
const POSTER_HEIGHT = 630;
const canvas = createCanvas(POSTER_WIDTH, POSTER_HEIGHT);
const ctx = canvas.getContext('2d');

// Style-specific colors
const colorMap = {
  1: '#3B82F6',  // blue
  2: '#22C55E',  // green
  3: '#EAB308',  // yellow
  4: '#A855F7',  // purple
  5: '#10B981',  // emerald
  6: '#F97316',  // orange
  7: '#EC4899',  // pink
  8: '#06B6D4',  // cyan
  9: '#F43F5E'   // rose
};

// Draw gradient, card, icon, text
// Save to /public/posters/
// Update database with poster path
const ogImage = new URL(posterImageUrl, Astro.url).href;
```

### Share Buttons (src/pages/result/[id].astro)

**Link Sharing with Open Graph:**
- **X (Twitter)**: Shares link with pre-filled text
- **Facebook**: Shares link - Facebook crawler pulls OG tags (shows poster image)
- **WhatsApp**: Shares link with pre-filled text and URL
- **Telegram**: Shares link with pre-filled text and URL

**Share Button Implementation:**
```astro
<!-- X (Twitter) -->
<a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}>
  {t('result.shareX')}
</a>

<!-- Facebook -->
<a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}>
  {t('result.shareFacebook')}
</a>

<!-- WhatsApp -->
<a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}>
  {t('result.shareWhatsApp')}
</a>

<!-- Telegram -->
<a href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}>
  {t('result.shareTelegram')}
</a>
```

**Important:** Social platforms (Facebook, LinkedIn, etc.) crawl the URL and extract Open Graph meta tags to display image previews. The poster image URL must be absolute (full URL) for crawlers to access it.

### Copy Link Button
```javascript
// Copy link functionality
async function copyLink() {
  const shareUrl = window.location.href;
  await navigator.clipboard.writeText(shareUrl);
  // Show "Copied!" feedback
}
```

## Employee Style Types (9 Types)

Each style has:
- Unique ID (1-9)
- Name (Thai/English)
- Definition
- Strengths
- HR advice
- Icon SVG
- Color scheme

**Styles:**
1. **Security Seeker** - Stability, procedures, security (Blue)
2. **Social Connector** - Teamwork, relationships (Green)
3. **Star Performer** - Achievement, competition (Yellow)
4. **Leader** - Strategy, decision-making (Purple)
5. **Reward Seeker** - Compensation, benefits (Emerald)
6. **Specialist** - Deep expertise, technical (Orange)
7. **Creative Innovator** - Innovation, novelty (Pink)
8. **Autonomous** - Independence, flexibility (Cyan)
9. **Entertainer** - Fun, energy, positivity (Rose)

**Icon system** (`src/lib/icons.ts`):
- `getStyleIconSVG(styleId)` - Returns SVG string
- `getStyleIconColor(styleId)` - Returns Tailwind color class
- `getStyleIconName(styleId, locale)` - Returns localized name

## Testing Guidelines

### Manual Testing Checklist

**User Flow:**
1. Landing page → Language switch works
2. Start assessment → Onboarding form validates
3. Quiz questions:
   - All 12 questions display correctly
   - Thai/English switching works
   - Progress bar accurate (rounded %)
   - Back/Next navigation works
   - Submit button appears on last question
4. Result submission → Redirects to result page
5. Result page:
   - Shows correct style
   - All translations correct
   - Social sharing buttons work
   - Download poster works
   - Copy link works
   - Native share works (mobile)

**Admin Flow:**
1. First-time setup creates admin
2. Login works
3. Dashboard shows correct stats
4. Reports table loads
5. View Result buttons work
6. Password change works

**Security Tests:**
1. Try accessing `/result/123` → Should redirect
2. Try accessing `/result/invalid-token` → Should redirect
3. Try accessing `/admin/*` without auth → Should redirect to login
4. Verify sequential IDs don't work

### Test Data
```bash
# Reset database
rm data/assessment.db
# Restart dev server to reinitialize
yarn dev
```

## Code Style Guidelines

### TypeScript & Types
- **Strict mode enabled** - Must pass `astro check`
- Export types with implementations
- Use `as` for type assertions sparingly
- Avoid `any` - use `unknown` or proper types
- Database results: `.get() as User | undefined`

### Import Style
```typescript
// Third-party first
import { createCanvas } from 'canvas';
import type { APIRoute } from 'astro';

// Then local modules
import db from '../../lib/db';
import { generateAccessToken } from '../../lib/db';
import { getTranslations } from '../../lib/translations';
```

### Formatting
- **2-space indentation**
- No trailing whitespace
- Trailing commas in multi-line arrays/objects
- Max line length: ~100 characters (soft limit)

### Naming Conventions
- **Variables/Functions**: camelCase (`userName`, `handleSubmit`)
- **Components**: PascalCase (`Layout.astro`)
- **Types/Interfaces**: PascalCase (`User`, `QuizSubmission`)
- **Constants**: SCREAMING_SNAKE_CASE (rare, mostly for truly global)
- **Database tables**: snake_case (`user_sessions`)
- **Files**: kebab-case for folders, PascalCase for components

### Error Handling
```typescript
// API routes pattern
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    // Process...
    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
```

### Database Patterns
```typescript
// Prepared statements (mandatory)
const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId) as User | undefined;

// Type assertions for results
const count = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };

// Transactions for bulk ops
const insertMany = db.transaction((items: any[]) => {
  for (const item of items) {
    stmt.run(item.id, item.name);
  }
});
```

### Astro Component Patterns
```astro
---
// Frontmatter for server-side code
import Layout from '../../layouts/Layout.astro';
import { getTranslations } from '../../lib/translations';

const locale = Astro.cookies.get('locale')?.value || 'th';
const trans = getTranslations(locale);
// Fetch data, validate, redirect...
-->

<Layout title="Page Title">
  <!-- Template -->
</Layout>

<script define:vars={{ locale, trans }}>
  // Client-side code
  // Can use server variables passed via define:vars
</script>
```

## Important Constraints

- **Package manager:** Use `yarn`, not `npm` (permission issues)
- **No ESLint/Prettier** - Follow style guidelines manually
- **SessionStorage is temporary** - Quiz state lost on refresh
- **Database:** SQLite in `data/assessment.db` (gitignored)
- **Generated images:** `/public/posters/*.png` (gitignored)
- **Production URL:** Update `astro.config.mjs` before deploying
- **Canvas requires native dependencies** - May need rebuild on different systems

## Deployment Checklist

1. **Update environment:**
   - `site` URL in `astro.config.mjs`
   - Set NODE_ENV=production
   - Verify database path permissions

2. **Build & test:**
   ```bash
   yarn build
   yarn preview
   ```

3. **Verify:**
   - All pages load
   - Quiz flow works
   - Admin authentication works
   - Poster generation works
   - Social sharing works

4. **Security:**
   - Verify access token system works
   - Test admin auth
   - Check database permissions

## Common Tasks

### Add a new translation key
1. Open `src/lib/translations.ts`
2. Add to `Translations` interface type
3. Add to `translations.th` object
4. Add to `translations.en` object

### Add a new API endpoint
1. Create file in `src/pages/api/`
2. Use `export const POST: APIRoute` or `GET`
3. Validate input with Zod
4. Return proper Response objects

### Add new admin page
1. Create `.astro` file in `src/pages/admin/`
2. Use `AdminLayout` component
3. Pass `username` prop
4. Add API endpoint in `src/pages/admin/api/`
5. Middleware automatically protects route

### Modify quiz questions
1. Edit `src/lib/questions.ts`
2. Ensure `categoryId` maps to style 1-9
3. Provide both `text` (EN) and `textTh` (TH)
4. Update `TOTAL_QUESTIONS` if adding/removing

### Change style type colors/icons
1. Edit `src/lib/icons.ts`
2. Update `colorMap` for Tailwind classes
3. Update SVG strings in icon functions
4. Update `colorMap` in `generate-poster.ts` for poster generation

## Troubleshooting

### Canvas installation issues
```bash
# If canvas fails to build, try:
yarn add canvas --ignore-scripts
# Or use system package manager for native dependencies
```

### Database locked
```bash
# WAL mode should prevent this, but if needed:
rm data/assessment.db-shm
rm data/assessment.db-wal
```

### Translations not showing
- Check cookie is set: `document.cookie`
- Verify locale passed correctly to components
- Check translation key exists in both languages

### Poster generation fails
- Check `/public/posters/` directory exists
- Verify canvas is installed
- Check server logs for errors
- Ensure access token is valid

### Admin session issues
- Sessions stored in-memory (lost on server restart)
- Check cookie is being set
- Verify session token in localStorage matches server

## Recent Changes (2026-01)

### Added
- ✅ Access token security system (replaces sequential IDs)
- ✅ Server-side poster image generation (automatic on result page load)
- ✅ Open Graph meta tags for social media sharing
- ✅ Link sharing buttons (X, Facebook, WhatsApp, Telegram)
- ✅ "View Result" buttons in admin reports table
- ✅ **Export CSV functionality** in admin reports page
- ✅ **Language switcher dropdown** in admin sidebar (with logout)
- ✅ Database migration support for new columns
- ✅ Git ignore for generated poster images

### Fixed
- ✅ Progress percentage rounding (no more decimals)
- ✅ Thai translation typos and improvements
- ✅ Admin reports table syntax errors
- ✅ WhatsApp and Telegram icons (correct brand logos)
- ✅ Facebook share URL (removed quote parameter, uses only URL)
- ✅ Social sharing - changed from file sharing to link sharing with OG tags
- ✅ TypeScript errors in AdminLayout

### Database Migrations
The app automatically handles schema changes:
- `access_token` column added for security
- `poster_image` column added for caching
- Uses ALTER TABLE with try/catch for existing databases

## Admin Dashboard Features

### Language Switcher
- Located in sidebar bottom (settings icon dropdown)
- Shows current language (ไทย/English) with checkmark
- Click to change language - updates all admin pages
- Includes logout button in same dropdown
- Auto-closes when clicking outside

### Translation Keys (Admin)
```typescript
admin: {
  // ... existing keys
  exportCSV: string;          // "ส่งออก CSV" / "Export CSV"
  exportCSVSuccess: string;   // "ส่งออกข้อมูลสำเร็จแล้ว" / "Data exported successfully"
  shareX: string;             // "แชร์บน X" / "Share on X"
  shareFacebook: string;      // "แชร์บน Facebook" / "Share on Facebook"
  shareWhatsApp: string;      // "แชร์บน WhatsApp" / "Share on WhatsApp"
  shareTelegram: string;      // "แชร์บน Telegram" / "Share on Telegram"
}
```


## Notes for Future Development

1. **Session storage issue:** Quiz state lost on refresh - consider server-side session
2. **Image enhancements:** Poster could use actual style icons instead of simple circles
3. **Email notifications:** Could email results to users
4. **Export features:** Add PDF export option in admin (CSV already implemented)
5. **Analytics:** Track completion rate, style distribution
6. **A/B testing:** Test different question orders
7. **Mobile app:** Could be wrapped as PWA or native app
8. **Bulk actions:** Add ability to delete multiple reports at once

