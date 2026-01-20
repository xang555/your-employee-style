export interface Answer {
  id: string;
  text: string;
  categoryId: number;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What motivates you most in your career?",
    answers: [
      { id: "1a", text: "Job security and stability", categoryId: 1 },
      { id: "1b", text: "Creating innovative solutions", categoryId: 7 },
      { id: "1c", text: "Building strong relationships", categoryId: 2 },
      { id: "1d", text: "Financial rewards and benefits", categoryId: 5 }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to work?",
    answers: [
      { id: "2a", text: "Becoming a deep expert in my field", categoryId: 6 },
      { id: "2b", text: "Leading and making decisions", categoryId: 4 },
      { id: "2c", text: "With creative freedom and variety", categoryId: 7 },
      { id: "2d", text: "In a fun, energetic environment", categoryId: 9 }
    ]
  },
  {
    id: 3,
    text: "What work environment suits you best?",
    answers: [
      { id: "3a", text: "Lively with lots of social interaction", categoryId: 9 },
      { id: "3b", text: "Independent with minimal supervision", categoryId: 8 },
      { id: "3c", text: "Stable with clear expectations", categoryId: 1 },
      { id: "3d", text: "Competitive with recognition opportunities", categoryId: 3 }
    ]
  },
  {
    id: 4,
    text: "What role energizes you most?",
    answers: [
      { id: "4a", text: "Being in charge and directing others", categoryId: 4 },
      { id: "4b", text: "Working autonomously on my own schedule", categoryId: 8 },
      { id: "4c", text: "Achieving goals and winning", categoryId: 3 },
      { id: "4d", text: "Having predictable responsibilities", categoryId: 1 }
    ]
  },
  {
    id: 5,
    text: "What matters most to you at work?",
    answers: [
      { id: "5a", text: "Collaborative team dynamics", categoryId: 2 },
      { id: "5b", text: "Developing specialized expertise", categoryId: 6 },
      { id: "5c", text: "Doing creative, varied work", categoryId: 7 },
      { id: "5d", text: "Having authority and influence", categoryId: 4 }
    ]
  },
  {
    id: 6,
    text: "What reward do you value most?",
    answers: [
      { id: "6a", text: "Public recognition and awards", categoryId: 3 },
      { id: "6b", text: "Opportunities to learn and specialize", categoryId: 6 },
      { id: "6c", text: "Competitive salary and bonuses", categoryId: 5 },
      { id: "6d", text: "Strong workplace friendships", categoryId: 2 }
    ]
  },
  {
    id: 7,
    text: "How do you handle routine tasks?",
    answers: [
      { id: "7a", text: "I find them boring; I need variety", categoryId: 7 },
      { id: "7b", text: "I prefer complete control over my workflow", categoryId: 8 },
      { id: "7c", text: "I enjoy them when done with the team", categoryId: 2 },
      { id: "7d", text: "I tolerate them if the pay is right", categoryId: 5 }
    ]
  },
  {
    id: 8,
    text: "What's your ideal work culture?",
    answers: [
      { id: "8a", text: "Safe, predictable, and consistent", categoryId: 1 },
      { id: "8b", text: "Flexible with freedom to choose", categoryId: 8 },
      { id: "8c", text: "Fun, upbeat, and entertaining", categoryId: 9 },
      { id: "8d", text: "Results-focused with clear compensation", categoryId: 5 }
    ]
  },
  {
    id: 9,
    text: "What professional achievement excites you most?",
    answers: [
      { id: "9a", text: "Being recognized as the best performer", categoryId: 3 },
      { id: "9b", text: "Complete independence in my role", categoryId: 8 },
      { id: "9c", text: "Creating a positive, fun atmosphere", categoryId: 9 },
      { id: "9d", text: "Becoming a renowned expert", categoryId: 6 }
    ]
  },
  {
    id: 10,
    text: "What drives your career decisions?",
    answers: [
      { id: "10a", text: "Leadership opportunities", categoryId: 4 },
      { id: "10b", text: "Potential for awards and recognition", categoryId: 3 },
      { id: "10c", text: "Long-term stability", categoryId: 1 },
      { id: "10d", text: "Depth of expertise I can gain", categoryId: 6 }
    ]
  }
];
