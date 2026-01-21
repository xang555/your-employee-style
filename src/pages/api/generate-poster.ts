import type { APIRoute } from 'astro';
import { createCanvas } from 'canvas';
import { promises as fs } from 'fs';
import path from 'path';
import { getUserByToken, updateUserPosterImage } from '../../lib/db';
import { getTranslations } from '../../lib/translations';
import { getStyleIconSVG, getStyleIconColor } from '../../lib/icons';

const POSTER_WIDTH = 1200;
const POSTER_HEIGHT = 630;
const POSTERS_DIR = path.join(process.cwd(), 'public', 'posters');

// Ensure posters directory exists
async function ensurePostersDir() {
  try {
    await fs.mkdir(POSTERS_DIR, { recursive: true });
  } catch (err) {
    // Directory already exists or error
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { token, locale = 'th' } = body;

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing token' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const user = getUserByToken(token);
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid token' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const trans = getTranslations(locale as 'th' | 'en');
    const styleId = user.result_id;

    // Check if poster already exists
    if (user.poster_image) {
      return new Response(
        JSON.stringify({
          success: true,
          posterUrl: user.poster_image
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate new poster
    await ensurePostersDir();

    const canvas = createCanvas(POSTER_WIDTH, POSTER_HEIGHT);
    const ctx = canvas.getContext('2d');

    // Get style color
    const colorMap: Record<number, string> = {
      1: '#3B82F6', // blue
      2: '#22C55E', // green
      3: '#EAB308', // yellow
      4: '#A855F7', // purple
      5: '#10B981', // emerald
      6: '#F97316', // orange
      7: '#EC4899', // pink
      8: '#06B6D4', // cyan
      9: '#F43F5E'  // rose
    };

    const primaryColor = colorMap[styleId] || '#3B82F6';
    const gradientStart = primaryColor;
    const gradientEnd = '#8B5CF6'; // purple

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, POSTER_WIDTH, POSTER_HEIGHT);
    gradient.addColorStop(0, gradientStart);
    gradient.addColorStop(1, gradientEnd);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    // Add subtle pattern overlay (dots)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let x = 0; x < POSTER_WIDTH; x += 30) {
      for (let y = 0; y < POSTER_HEIGHT; y += 30) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Add white card in center
    const cardPadding = 60;
    const cardX = cardPadding;
    const cardY = cardPadding;
    const cardWidth = POSTER_WIDTH - (cardPadding * 2);
    const cardHeight = POSTER_HEIGHT - (cardPadding * 2);
    const cardRadius = 20;

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardWidth, cardHeight, cardRadius);
    ctx.fill();

    // Add shadow effect
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetY = 10;

    // Draw icon circle
    const iconCircleSize = 120;
    const iconX = (POSTER_WIDTH - iconCircleSize) / 2;
    const iconY = 120;

    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.arc(POSTER_WIDTH / 2, iconY + (iconCircleSize / 2), iconCircleSize / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowColor = 'transparent';

    // Draw icon (simple circle for now, can be enhanced)
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(POSTER_WIDTH / 2, iconY + (iconCircleSize / 2), 40, 0, Math.PI * 2);
    ctx.fill();

    // Style name
    const styleTrans = trans.styles[styleId as keyof typeof trans.styles];
    const styleName = styleTrans?.name || 'Style';

    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 56px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(styleName, POSTER_WIDTH / 2, 320);

    // Subtitle
    const subtitle = locale === 'th'
      ? 'ค้นพบสไตล์การทำงานของคุณ'
      : 'Discover Your Work Style';

    ctx.fillStyle = '#6B7280';
    ctx.font = '32px sans-serif';
    ctx.fillText(subtitle, POSTER_WIDTH / 2, 380);

    // "Take the assessment" text
    const ctaText = locale === 'th'
      ? 'ทำแบบประเมินเพื่อค้นพบสไตล์ของคุณ'
      : 'Take the assessment to discover your style';

    ctx.fillStyle = '#9CA3AF';
    ctx.font = '24px sans-serif';
    ctx.fillText(ctaText, POSTER_WIDTH / 2, 430);

    // Branding at bottom
    const brandText = locale === 'th' ? 'Your Employee Style' : 'Your Employee Style';
    ctx.fillStyle = primaryColor;
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText(brandText, POSTER_WIDTH / 2, 530);

    // Generate filename
    const filename = `poster-${user.access_token}.png`;
    const filePath = path.join(POSTERS_DIR, filename);
    const posterUrl = `/posters/${filename}`;

    // Save canvas to file
    const buffer = canvas.toBuffer('image/png');
    await fs.writeFile(filePath, buffer);

    // Update database
    updateUserPosterImage(user.id, posterUrl);

    return new Response(
      JSON.stringify({
        success: true,
        posterUrl: posterUrl
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Poster generation error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to generate poster' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
