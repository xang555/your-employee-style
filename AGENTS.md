# AI Agent Guidelines for your-employee-style

## Build & Development Commands

```bash
# Start development server (port 4321)
yarn dev

# Build for production (includes type checking)
yarn build

# Preview production build
yarn preview

# Initialize/re-seed database (required before first use)
yarn tsx scripts/init-db.ts

# Note: Use yarn, not npm (npm has permission issues on this system)
```

## Internationalization (i18n)

### Supported Languages
- **Thai (th)** - Default language
- **English (en)** - Optional language

### Locale Detection
1. URL parameter: `?lang=en` or `?lang=th`
2. Cookie: `locale` cookie (1 year expiration)
3. Default: Thai if no cookie or URL parameter

### Using Translations
```typescript
// In pages
const locale = Astro.cookies.get('locale')?.value || 'th';
const { getTranslations } = await import('../lib/translations');
const trans = getTranslations(locale);

// Helper function for dot notation
function t(key: string): string {
  const keys = key.split('.');
  let value = trans;
  for (const k of keys) {
    value = value[k];
  }
  return value;
}

// Example
t('landing.heroTitle') // Returns translated string based on locale
```

### Translation Keys
All translations are in `src/lib/translations.ts` with these sections:
- `common` - Shared UI text
- `landing` - Landing page
- `onboarding` - User form
- `quiz` - Assessment questions
- `result` - Results page
- `admin` - Admin dashboard
- `errors` - Error pages

### Language Switcher
Import the language switcher component:
```astro
import LanguageSwitcher from '../components/LanguageSwitcher.astro';
<LanguageSwitcher />
```

### Middleware Setup
The middleware in `src/middleware.ts` handles:
- Locale detection from URL params or cookies
- Setting locale cookie
- Providing `Astro.locals.locale` and `Astro.locals.t` to pages
- Admin authentication protection

## Admin Dashboard

The application includes a production-grade admin dashboard at `/admin` with:
- **First-time setup**: Create admin account on first visit to `/admin/login`
- **Authentication**: Secure login with bcrypt password hashing and session management
- **Dashboard**: Overview with assessment statistics and quick actions
- **Reports**: View all user assessments with results and timestamps
- **Settings**: Change admin password with validation

### Admin Routes
- `/admin` - Redirects to login (or dashboard if authenticated)
- `/admin/login` - Login or first-time setup
- `/admin/dashboard` - Main dashboard
- `/admin/reports` - User assessment results table
- `/admin/settings` - Password change

### Admin API Endpoints
- `POST /admin/api/setup` - Create initial admin account
- `POST /admin/api/login` - Authenticate and get session token
- `POST /admin/api/logout` - Invalidate session
- `POST /admin/api/change-password` - Update admin password
- `GET /admin/api/reports` - Get all user results (authenticated)
- `GET /admin/api/check-auth` - Verify authentication status

### Admin Security
- Password hashing with bcrypt (10 salt rounds)
- Session tokens stored in memory (server-side) and HTTP-only cookies
- 24-hour session expiration
- Middleware protection for all admin routes except `/admin/login`
- Automatic redirect if not authenticated

### Style Type Icons
Each of the 9 employee styles has a unique SVG icon and color scheme:
- Security Seeker: Shield (blue)
- Social Connector: Network (green)
- Star Performer: Star (yellow)
- Leader: Crown (purple)
- Reward Seeker: Coin (emerald)
- Specialist: Target/Badge (orange)
- Creative Innovator: Lightbulb (pink)
- Autonomous: Compass (cyan)
- Entertainer: Performance mask (rose)

Icons are available in `src/lib/icons.ts` with helper functions for easy integration.

## Testing

No automated test suite exists. Manual testing steps:
1. Start dev server: `yarn dev`
2. Complete full user flow: landing → onboarding → quiz → result
3. Test different answer combinations
4. Verify scoring algorithm (frequency count, ties → lower ID wins)
5. Test social sharing and copy link functionality

## Code Style Guidelines

### TypeScript & Types
- **Strict mode enabled** - All code must pass `astro check`
- Use interfaces for component props
- Export types alongside implementations
- Infer types from Zod schemas when possible: `export type UserInput = z.infer<typeof userSchema>`
- Avoid `any` - use proper typing or unknown

### Import Style
- Use ES modules (`import ... from ...`)
- Relative imports with `../../lib/` pattern
- Group imports: third-party first, then local modules
- Named exports preferred: `export const userSchema = ...`

### Formatting & Structure
- **2-space indentation**
- No trailing whitespace
- Trailing commas in multi-line arrays/objects
- Newline between logical sections (imports, variables, functions)
- Max line length: ~100 characters (soft limit)

### Naming Conventions
- **Variables/Functions**: camelCase (`userName`, `handleSubmit`)
- **Components**: PascalCase (`Layout.astro`, `QuizInterface`)
- **Types/Interfaces**: PascalCase (`User`, `QuizSubmission`)
- **Constants**: SCREAMING_SNAKE_CASE for truly global constants (rare)
- **Database Tables**: snake_case (`user_sessions`)
- **File Names**: kebab-case for folders, PascalCase for components

### Error Handling
- API routes: wrap in try-catch, return appropriate HTTP status codes
- Use `console.error()` for server-side error logging
- Never expose sensitive errors to client
- Zod validation with `.parse()` - catches schema errors automatically
- Return JSON error objects: `{ success: false, error: 'message' }`

### Database (better-sqlite3)
- Use prepared statements: `db.prepare('SELECT * FROM users WHERE id = ?')`
- WAL mode enabled: `db.pragma('journal_mode = WAL')`
- Type database results: `.get() as { count: number }`
- Use transactions for bulk operations: `const insertMany = db.transaction(...)`
- Store database in `data/` directory

### Authentication (Admin)
- bcrypt for password hashing (10 salt rounds)
- Session tokens stored in memory (Map) and HTTP-only cookies
- 24-hour session expiration with automatic cleanup
- Middleware-based route protection in `src/middleware.ts`
- Session validation on each protected route

### Astro Components
- Frontmatter (`---`) for imports, logic, and props
- Define props interface at top of frontmatter
- Use `Astro.props` to destructure props
- Pass data to scripts with `define:vars={{ variableName }}`
- SessionStorage for client-side state management
- Validate session data on page load, redirect if missing

### API Routes
- Type request: `export const POST: APIRoute = async ({ request }) => {`
- Parse JSON body: `const body = await request.json()`
- Validate before processing
- Return Response objects with proper headers:
  ```typescript
  return new Response(
    JSON.stringify({ success: true, data }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
  ```

### Styling (Tailwind CSS)
- Use Tailwind utility classes exclusively
- Custom colors via `primary` scale (50-900)
- Responsive classes: `md:p-10` (mobile-first)
- Gradients: `bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50`
- Transitions: `transition-all duration-300`
- Focus states for accessibility: `focus:ring-2 focus:ring-primary-500`
- Button hierarchy: primary (blue), secondary (gray), disabled (opacity-50)

### File Organization
```
src/
├── layouts/
│   ├── Layout.astro           # Base HTML structure for main site
│   └── AdminLayout.astro     # Admin dashboard layout with sidebar
├── lib/                      # Shared utilities
│   ├── db.ts                # Database connection & models
│   ├── auth.ts              # Admin authentication utilities
│   ├── questions.ts         # Data/constants
│   └── validation.ts       # Zod schemas
├── pages/
│   ├── admin/
│   │   ├── api/           # Admin API endpoints
│   │   ├── dashboard.astro
│   │   ├── reports.astro
│   │   ├── settings.astro
│   │   └── login.astro
│   ├── api/                # Main API endpoints (POST/GET)
│   ├── 404.astro           # 404 error page
│   ├── 500.astro           # 500 error page
│   └── *.astro             # Page components
```

## Important Constraints

- **No ESLint/Prettier configured** - Follow these style guidelines manually
- **No authentication** - Public assessment, minimal data collection
- **SessionStorage is temporary** - Quiz state lost on browser refresh
- **Database persistence** - SQLite file in `data/assessment.db`
- **Production URL** - Currently `localhost:4321`, update before deployment

## Common Patterns

### Fetching Data (Server-Side)
```typescript
const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId) as User | undefined;
```

### Client-Side Validation (Zod)
```typescript
const result = userSchema.safeParse(formData);
if (!result.success) {
  // Handle errors
}
```

### Dynamic Routes
- Use `[id].astro` pattern
- Access via `Astro.params.id`
- Fetch data in frontmatter

### Session Management
```typescript
// Store
sessionStorage.setItem('userName', name);
// Retrieve
const userName = sessionStorage.getItem('userName');
// Validate and redirect
if (!userName) {
  window.location.href = '/onboarding';
}
```

## Before Deploying

1. Update `site` in `astro.config.mjs` from localhost to production URL
2. Ensure database initialization script works in production
3. Set environment variables for database path if needed
4. Test full user flow with production build: `yarn build && yarn preview`
