import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
});

export const quizSubmissionSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  answers: z.array(z.number().min(1).max(9)).length(10, 'All 10 questions must be answered'),
});

export type UserInput = z.infer<typeof userSchema>;
export type QuizSubmission = z.infer<typeof quizSubmissionSchema>;
