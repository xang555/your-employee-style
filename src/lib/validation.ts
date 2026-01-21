import { z } from 'zod';
import { TOTAL_QUESTIONS } from './questions';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
});

export const quizSubmissionSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  answers: z.array(z.number().min(1).max(9)).length(TOTAL_QUESTIONS, `All ${TOTAL_QUESTIONS} questions must be answered`),
});

export type UserInput = z.infer<typeof userSchema>;
export type QuizSubmission = z.infer<typeof quizSubmissionSchema>;
