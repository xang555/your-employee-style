# Employee Style Assessment

A production-grade web application that determines a user's working style based on a specific set of questions.

## Project Structure

```
your-employee-style/
├── src/
│   ├── components/          # Astro components
│   ├── layouts/
│   │   └── Layout.astro     # Main layout with OG tags
│   ├── lib/
│   │   ├── db.ts           # Database connection and models
│   │   ├── questions.ts    # Quiz questions and answers
│   │   └── validation.ts   # Zod schemas
│   ├── pages/
│   │   ├── api/
│   │   │   └── submit.ts    # API endpoint for quiz submission
│   │   ├── result/
│   │   │   └── [id].astro  # Result page with dynamic OG tags
│   │   ├── index.astro     # Landing page
│   │   ├── onboarding.astro # User input form
│   │   └── quiz.astro      # Interactive quiz interface
│   └── styles/              # Additional styles if needed
├── data/
│   └── assessment.db       # SQLite database (created on init)
├── scripts/
│   └── init-db.ts          # Database initialization script
├── db/
│   ├── config.ts           # Astro DB configuration (legacy)
│   └── seed.ts             # Seed data (legacy)
├── public/
│   └── favicon.svg         # Site favicon
├── astro.config.mjs        # Astro configuration
├── package.json
├── tailwind.config.mjs     # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  result_id INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (result_id) REFERENCES results(id)
);
```

### Results Table
```sql
CREATE TABLE results (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  definition TEXT NOT NULL,
  strengths TEXT NOT NULL,
  hr_advice TEXT NOT NULL
);
```

## Features

### 1. Landing Page (src/pages/index.astro)
- Modern hero section with gradient background
- "Discover Your Professional DNA" headline
- Animated elements and smooth transitions
- Feature cards highlighting benefits
- Call-to-action button to start assessment

### 2. User Onboarding (src/pages/onboarding.astro)
- Name and email input form
- Client-side Zod validation
- Error display with visual feedback
- Session storage for temporary data
- Clean, accessible form design

### 3. Quiz Interface (src/pages/quiz.astro)
- Interactive question-by-question UI
- Progress bar showing completion status
- Smooth transitions between questions
- Radio button answers with visual selection
- Back/Next navigation
- Session validation (redirects if user data missing)

### 4. Backend API (src/pages/api/submit.ts)
- POST endpoint for quiz submission
- Zod validation for input data
- Algorithm to calculate winner category:
  - Counts occurrences of each category ID
  - Picks the category with highest frequency
  - On ties, picks the lower ID
- Saves user data to SQLite database
- Returns user ID and result ID

### 5. Result Page (src/pages/result/[id].astro)
- Dynamic routing with user ID
- Displays user's specific employee style
- Shows: name, definition, strengths, HR advice
- Gradient header with result name
- Social sharing buttons (X/Twitter, Facebook, LinkedIn)
- Dynamic Open Graph tags for sharing:
  - Title: "I am a [Result Name]! What are you?"
  - Description includes result definition
- Copy link functionality
- Retake assessment button

## Tech Stack

- **Framework**: Astro (SSR mode)
- **Database**: SQLite with better-sqlite3
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript (strict mode)
- **Validation**: Zod
- **State Management**: SessionStorage for quiz state
- **Hosting**: Node.js standalone adapter

## Setup Instructions

1. Install dependencies:
```bash
yarn install
```

2. Initialize the database:
```bash
yarn tsx scripts/init-db.ts
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser to `http://localhost:4321`

## Build for Production

```bash
yarn build
yarn start
```

## Core Code Files

### Database Setup (src/lib/db.ts)
- SQLite database connection
- Table creation
- Result seeding (9 employee styles)
- Type definitions for User and Result

### Questions Data (src/lib/questions.ts)
- 10 questions with 4 answers each
- Each answer maps to a category ID (1-9)
- Category mapping follows the specified logic:
  - Q1: A→1, B→7, C→2, D→5
  - Q2: A→6, B→4, C→7, D→9
  - Q3: A→9, B→8, C→1, D→3
  - Q4: A→4, B→8, C→3, D→1
  - Q5: A→2, B→6, C→7, D→4
  - Q6: A→3, B→6, C→5, D→2
  - Q7: A→7, B→8, C→2, D→5
  - Q8: A→1, B→8, C→9, D→5
  - Q9: A→3, B→8, C→9, D→6
  - Q10: A→4, B→3, C→1, D→6

### Validation (src/lib/validation.ts)
- `userSchema`: Name and email validation
- `quizSubmissionSchema`: Full quiz submission validation
- TypeScript types inferred from Zod schemas

### Quiz Form Logic (src/pages/quiz.astro)
- Client-side state management
- Question navigation (back/next)
- Progress tracking
- Form submission to API endpoint
- Error handling and loading states

### API Endpoint (src/pages/api/submit.ts)
- Receives quiz answers with user info
- Calculates winning category
- Inserts user record into database
- Returns user ID for result page

### Result Display (src/pages/result/[id].astro)
- Fetches user and result data
- Dynamic OG tags for social sharing
- Social media share buttons
- Copy link functionality

## Design Principles

- Clean, corporate yet friendly aesthetic
- Responsive design (mobile-first)
- Accessibility-first approach
- Smooth animations and transitions
- Professional color scheme (primary blue/purple gradients)
- High contrast for readability
- Clear visual hierarchy

## Social Sharing

When a user shares their result, the preview will show:
- **Title**: "I am a [Result Name]! What are you?"
- **Description**: The result's definition
- **URL**: The specific result page URL

This drives engagement by showing personalized content in share previews.

## Notes

- The database is stored in `data/assessment.db`
- Session storage is used for client-side state
- No authentication required (public assessment)
- GDPR-friendly (minimal data collection)
- Production-ready with proper error handling
- MIT