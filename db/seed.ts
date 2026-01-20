import { db, Result } from 'astro:db';

export default async function seed() {
  await db.insert(Result).values([
    {
      id: 1,
      name: 'The Security Seeker',
      definition: 'You thrive in stable, predictable environments where you know what to expect. You value job security, clear guidelines, and consistent routines.',
      strengths: 'Reliability, consistency, risk management, thoroughness, and creating stable processes.',
      hrAdvice: 'Provide clear job descriptions, regular feedback, stable work environment, and emphasize long-term security. Avoid frequent restructuring.'
    },
    {
      id: 2,
      name: 'The Social Connector',
      definition: 'You are energized by teamwork and building strong relationships. Collaboration and interpersonal connections are at the heart of your work satisfaction.',
      strengths: 'Team building, communication, empathy, collaboration, and creating positive work culture.',
      hrAdvice: 'Encourage team projects, social events, mentorship opportunities. Create collaborative spaces and recognize relationship-building contributions.'
    },
    {
      id: 3,
      name: 'The Star Performer',
      definition: 'You are driven by achievement, recognition, and competition. You love setting ambitious goals and being acknowledged for your accomplishments.',
      strengths: 'Goal achievement, competitive drive, performance excellence, and inspiring others through results.',
      hrAdvice: 'Implement performance-based rewards, public recognition programs, clear KPIs, and advancement opportunities. Celebrate wins visibly.'
    },
    {
      id: 4,
      name: 'The Leader',
      definition: 'You have a natural inclination toward taking charge and making strategic decisions. You enjoy responsibility, influence, and guiding teams toward success.',
      strengths: 'Strategic thinking, decision-making, vision setting, team direction, and accountability.',
      hrAdvice: 'Provide leadership opportunities, decision-making authority, management training, and challenging projects requiring ownership.'
    },
    {
      id: 5,
      name: 'The Reward Seeker',
      definition: 'Financial compensation and tangible benefits are primary motivators for you. You seek fair pay, bonuses, and material rewards for your contributions.',
      strengths: 'Financial planning, ROI focus, value-driven decisions, and negotiation skills.',
      hrAdvice: 'Offer competitive compensation, clear bonus structures, transparent pay scales, and financial incentives tied to performance.'
    },
    {
      id: 6,
      name: 'The Specialist',
      definition: 'You are passionate about deep expertise in your field. You love becoming a subject matter expert and solving complex, technical problems.',
      strengths: 'Deep knowledge, problem-solving, technical excellence, continuous learning, and innovation in specialized areas.',
      hrAdvice: 'Support continuous education, certifications, specialized projects, expert recognition, and opportunities to mentor in their field.'
    },
    {
      id: 7,
      name: 'The Creative Innovator',
      definition: 'You thrive on novelty, creativity, and innovation. Routine work drains you, while fresh ideas and unconventional solutions energize you.',
      strengths: 'Innovation, creative problem-solving, adaptability, idea generation, and challenging the status quo.',
      hrAdvice: 'Provide creative freedom, innovation time, variety in projects, brainstorming sessions, and minimize repetitive tasks.'
    },
    {
      id: 8,
      name: 'The Autonomous',
      definition: 'You value independence and self-management. You work best when given freedom to decide how, when, and where you complete your work.',
      strengths: 'Self-direction, accountability, time management, independent problem-solving, and initiative.',
      hrAdvice: 'Offer flexible work arrangements, remote options, outcome-based evaluation, and minimal micromanagement. Trust their process.'
    },
    {
      id: 9,
      name: 'The Entertainer',
      definition: 'You bring energy, humor, and positivity to the workplace. You thrive when you can make work enjoyable and create a fun atmosphere for your team.',
      strengths: 'Morale boosting, positive energy, stress relief, team engagement, and creating enjoyable work environments.',
      hrAdvice: 'Allow personality expression, support social initiatives, recognize their positive impact on culture, and create space for fun.'
    }
  ]);
}
