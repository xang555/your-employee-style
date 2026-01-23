import type { APIRoute } from 'astro';
import { generateAccessToken, createUser } from '../../lib/db';
import { quizSubmissionSchema } from '../../lib/validation';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const validatedData = quizSubmissionSchema.parse(body);

    const categoryCounts = new Map<number, number>();
    for (let i = 1; i <= 9; i++) {
      categoryCounts.set(i, 0);
    }

    validatedData.answers.forEach((categoryId) => {
      const currentCount = categoryCounts.get(categoryId) || 0;
      categoryCounts.set(categoryId, currentCount + 1);
    });

    let winnerCategoryId = 1;
    let maxCount = 0;

    for (let i = 1; i <= 9; i++) {
      const count = categoryCounts.get(i) || 0;
      if (count > maxCount) {
        maxCount = count;
        winnerCategoryId = i;
      }
    }

    // Generate a secure access token
    const accessToken = generateAccessToken();

    const userId = await createUser(
      validatedData.name,
      validatedData.email,
      winnerCategoryId,
      accessToken
    );

    return new Response(
      JSON.stringify({
        success: true,
        userId: userId,
        resultId: winnerCategoryId,
        accessToken: accessToken,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid input data' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.error('Submit error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
