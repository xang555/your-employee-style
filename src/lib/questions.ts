export type Locale = 'en' | 'th';

export interface Answer {
  id: string;
  text: string;
  textTh: string;
  categoryId: number;
}

export interface Question {
  id: number;
  text: string;
  textTh: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What motivates you most in your career?",
    textTh: "อะไรคือแรงบันดาลใจสำคัญที่สุดของคุณในอาชีพ?",
    answers: [
      { id: "1a", text: "Job security and stability", textTh: "ความมั่นคงและความเสถียรในงาน", categoryId: 1 },
      { id: "1b", text: "Creating innovative solutions", textTh: "การสร้างนวัตกรรมใหม่ๆ", categoryId: 7 },
      { id: "1c", text: "Building strong relationships", textTh: "การสร้างความสัมพันธ์ที่แข็งแกร่ง", categoryId: 2 },
      { id: "1d", text: "Financial rewards and benefits", textTh: "ผลตอบแทนและสวัสดิการ", categoryId: 5 }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to work?",
    textTh: "คุณชอบทำงานอย่างไร?",
    answers: [
      { id: "2a", text: "Becoming a deep expert in my field", textTh: "กลายเป็นผู้เชี่ยวชาญในสาขาของตนเอง", categoryId: 6 },
      { id: "2b", text: "Leading and making decisions", textTh: "เป็นผู้นำและการตัดสินใจ", categoryId: 4 },
      { id: "2c", text: "With creative freedom and variety", textTh: "ทำงานด้วยเสรีภาพและความหลากหลาย", categoryId: 7 },
      { id: "2d", text: "In a fun, energetic environment", textTh: "ในสภาพแวดล้อมที่สนุกสนาน", categoryId: 9 }
    ]
  },
  {
    id: 3,
    text: "What work environment suits you best?",
    textTh: "สภาพแวดล้อมงานแบบไหนเหมาะกับคุณ?",
    answers: [
      { id: "3a", text: "Lively with lots of social interaction", textTh: "คึกคักและมีปฏิสัมพันธ์กับผู้อื่น", categoryId: 9 },
      { id: "3b", text: "Independent with minimal supervision", textTh: "ทำงานอย่างอิสระโดยไม่ต้องมีผู้ควบคุม", categoryId: 8 },
      { id: "3c", text: "Stable with clear expectations", textTh: "เสถียรและมีการคาดหวังชัดเจน", categoryId: 1 },
      { id: "3d", text: "Competitive with recognition opportunities", textTh: "มีการแข่งขันและโอกาสได้รับการยอมรับ", categoryId: 3 }
    ]
  },
  {
    id: 4,
    text: "What role energizes you most?",
    textTh: "บทบาทใดทำให้คุณรู้สึกมีพลังมากที่สุด?",
    answers: [
      { id: "4a", text: "Being in charge and directing others", textTh: "เป็นผู้รับผิดชอบและชี้นำผู้อื่น", categoryId: 4 },
      { id: "4b", text: "Working autonomously on my own schedule", textTh: "ทำงานอย่างอิสระตามตารางของตนเอง", categoryId: 8 },
      { id: "4c", text: "Achieving goals and winning", textTh: "บรรลุเป้าหมายและชนะ", categoryId: 3 },
      { id: "4d", text: "Having predictable responsibilities", textTh: "มีหน้าที่ชัดเจนและสามารถคาดเดาได้", categoryId: 1 }
    ]
  },
  {
    id: 5,
    text: "What matters most to you at work?",
    textTh: "สิ่งใดสำคัญที่สุดสำหรับคุณในการทำงาน?",
    answers: [
      { id: "5a", text: "Collaborative team dynamics", textTh: "การทำงานเป็นทีมที่มีความสัมพันธ์", categoryId: 2 },
      { id: "5b", text: "Developing specialized expertise", textTh: "การพัฒนาความเชี่ยวชาญเฉพาะทาง", categoryId: 6 },
      { id: "5c", text: "Doing creative, varied work", textTh: "การทำงานสร้างสรรค์และหลากหลาย", categoryId: 7 },
      { id: "5d", text: "Having authority and influence", textTh: "มีอำนาจและอิทธิพลต่อผู้อื่น", categoryId: 4 }
    ]
  },
  {
    id: 6,
    text: "What reward do you value most?",
    textTh: "คุณให้ความสำคัญกับรางวัลใดที่สุด?",
    answers: [
      { id: "6a", text: "Public recognition and awards", textTh: "การยอมรับในสาธารณะและรางวัล", categoryId: 3 },
      { id: "6b", text: "Opportunities to learn and specialize", textTh: "โอกาสในการเรียนรู้และพัฒนาความเชี่ยวชาญ", categoryId: 6 },
      { id: "6c", text: "Competitive salary and bonuses", textTh: "เงินเดือนที่แข่งขันได้และโบนัส", categoryId: 5 },
      { id: "6d", text: "Strong workplace friendships", textTh: "มีมิตรภาพที่ดีกับเพื่อนร่วมงาน", categoryId: 2 }
    ]
  },
  {
    id: 7,
    text: "How do you handle routine tasks?",
    textTh: "คุณจัดการกับงานประจำเป็นอย่างไร?",
    answers: [
      { id: "7a", text: "I find them boring; I need variety", textTh: "ฉันรู้สึกน่าเบื่อ ฉันต้องการความหลากหลาย", categoryId: 7 },
      { id: "7b", text: "I prefer complete control over my workflow", textTh: "ฉันชอบมีการควบคุมงานของตนเองอย่างเต็มที่", categoryId: 8 },
      { id: "7c", text: "I enjoy them when done with the team", textTh: "ฉันชอบเมื่อทำร่วมกับทีม", categoryId: 2 },
      { id: "7d", text: "I tolerate them if the pay is right", textTh: "ฉันยอมรับได้ถ้าเงินดี", categoryId: 5 }
    ]
  },
  {
    id: 8,
    text: "What's your ideal work culture?",
    textTh: "วัฒนธรรมการทำงานที่เหมาะสมกับคุณ?",
    answers: [
      { id: "8a", text: "Safe, predictable, and consistent", textTh: "ปลอดภัย คาดการณ์ได้ และสม่ำเสมอ", categoryId: 1 },
      { id: "8b", text: "Flexible with freedom to choose", textTh: "ยืดหยุ่นด้วยอิสระในการเลือกงาน", categoryId: 8 },
      { id: "8c", text: "Fun, upbeat, and entertaining", textTh: "สนุก ร่าเริง และบันเทิง", categoryId: 9 },
      { id: "8d", text: "Results-focused with clear compensation", textTh: "มุ่งเน้นผลลัพธ์และมีค่าตอบแทนที่ชัดเจน", categoryId: 5 }
    ]
  },
  {
    id: 9,
    text: "What professional achievement excites you most?",
    textTh: "ความสำเร็จด้านอาชีพอะไรที่ทำให้คุณตื่นเต้นมากที่สุด?",
    answers: [
      { id: "9a", text: "Being recognized as the best performer", textTh: "ได้รับการยอมรับว่าเป็นพนักงานที่ดีที่สุด", categoryId: 3 },
      { id: "9b", text: "Complete independence in my role", textTh: "อิสระในบทบาทของตนเอง", categoryId: 8 },
      { id: "9c", text: "Creating a positive, fun atmosphere", textTh: "สร้างบรรยากาศที่เป็นบวกและสนุกสนาน", categoryId: 9 },
      { id: "9d", text: "Becoming a renowned expert", textTh: "กลายเป็นผู้เชี่ยวชาญที่มีชื่อเสียง", categoryId: 6 }
    ]
  },
  {
    id: 10,
    text: "What drives your career decisions?",
    textTh: "สิ่งใดที่ขับเคลื่อนการตัดสินใจอาชีพของคุณ?",
    answers: [
      { id: "10a", text: "Leadership opportunities", textTh: "โอกาสในการเป็นผู้นำ", categoryId: 4 },
      { id: "10b", text: "Potential for awards and recognition", textTh: "โอกาสในการได้รับรางวัลและการยอมรับ", categoryId: 3 },
      { id: "10c", text: "Long-term stability", textTh: "เสถียรภาพในระยะยาว", categoryId: 1 },
      { id: "10d", text: "Depth of expertise I can gain", textTh: "ความลึกของความเชี่ยวชาญที่จะได้รับ", categoryId: 6 }
    ]
  }
];

export function getQuestionText(question: Question, locale: Locale): string {
  return locale === 'th' ? question.textTh : question.text;
}

export function getAnswerText(answer: Answer, locale: Locale): string {
  return locale === 'th' ? answer.textTh : answer.text;
}
