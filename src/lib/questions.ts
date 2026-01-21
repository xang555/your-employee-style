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
      { id: "1a", text: "Job security and long-term stability", textTh: "ความมั่นคงและเสถียรภาพระยะยาว", categoryId: 1 },
      { id: "1b", text: "Creating innovative solutions and new ideas", textTh: "การสร้างนวัตกรรมและไอเดียใหม่ๆ", categoryId: 7 },
      { id: "1c", text: "Building meaningful relationships with colleagues", textTh: "การสร้างความสัมพันธ์ที่มีความหมายกับเพื่อนร่วมงาน", categoryId: 2 },
      { id: "1d", text: "Competitive salary and financial benefits", textTh: "เงินเดือนที่แข่งขันได้และผลตอบแทนทางการเงิน", categoryId: 5 },
      { id: "1e", text: "Being the best and outperforming others", textTh: "การเป็นที่หนึ่งและทำได้ดีกว่าคนอื่น", categoryId: 3 }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to work?",
    textTh: "คุณชอบทำงานอย่างไร?",
    answers: [
      { id: "2a", text: "Becoming a deep expert in my specialized field", textTh: "กลายเป็นผู้เชี่ยวชาญเฉพาะทางในสาขาของตน", categoryId: 6 },
      { id: "2b", text: "Leading teams and making strategic decisions", textTh: "นำทีมและตัดสินใจเชิงกลยุทธ์", categoryId: 4 },
      { id: "2c", text: "With creative freedom and diverse projects", textTh: "ด้วยเสรีภาพในการสร้างสรรค์และโปรเจ็กต์ที่หลากหลาย", categoryId: 7 },
      { id: "2d", text: "In a fun, energetic social environment", textTh: "ในสภาพแวดล้อมที่สนุกสนานและมีพลัง", categoryId: 9 },
      { id: "2e", text: "Independently with full control over my work", textTh: "อย่างอิสระและควบคุมงานของตนเองอย่างเต็มที่", categoryId: 8 }
    ]
  },
  {
    id: 3,
    text: "What work environment suits you best?",
    textTh: "สภาพแวดล้อมงานแบบไหนเหมาะกับคุณ?",
    answers: [
      { id: "3a", text: "Lively with lots of social interaction", textTh: "คึกคักและมีปฏิสัมพันธ์ทางสังคมมาก", categoryId: 9 },
      { id: "3b", text: "Independent with minimal supervision", textTh: "อิสระและมีการควบคุมน้อยที่สุด", categoryId: 8 },
      { id: "3c", text: "Stable with clear procedures and expectations", textTh: "เสถียรมีขั้นตอนและความคาดหวังที่ชัดเจน", categoryId: 1 },
      { id: "3d", text: "Competitive with performance rankings", textTh: "มีการแข่งขันและการจัดอันดับประสิทธิภาพ", categoryId: 3 },
      { id: "3e", text: "Collaborative with strong team bonds", textTh: "ร่วมมือกันและมีความผูกพันในทีมที่แข็งแกร่ง", categoryId: 2 }
    ]
  },
  {
    id: 4,
    text: "What role energizes you most?",
    textTh: "บทบาทใดทำให้คุณรู้สึกมีพลังมากที่สุด?",
    answers: [
      { id: "4a", text: "Being in charge and directing others", textTh: "เป็นผู้รับผิดชอบและชี้นำผู้อื่น", categoryId: 4 },
      { id: "4b", text: "Working autonomously on my own schedule", textTh: "ทำงานอย่างอิสระตามตารางของตนเอง", categoryId: 8 },
      { id: "4c", text: "Achieving goals and winning competitions", textTh: "บรรลุเป้าหมายและชนะการแข่งขัน", categoryId: 3 },
      { id: "4d", text: "Having predictable, secure responsibilities", textTh: "มีหน้าที่ที่คาดเดาได้และมั่นคง", categoryId: 1 },
      { id: "4e", text: "Solving complex technical problems", textTh: "แก้ปัญหาทางเทคนิคที่ซับซ้อน", categoryId: 6 }
    ]
  },
  {
    id: 5,
    text: "What matters most to you at work?",
    textTh: "สิ่งใดสำคัญที่สุดสำหรับคุณในการทำงาน?",
    answers: [
      { id: "5a", text: "Collaborative team dynamics and friendships", textTh: "การทำงานเป็นทีมและมิตรภาพ", categoryId: 2 },
      { id: "5b", text: "Developing deep specialized expertise", textTh: "การพัฒนาความเชี่ยวชาญเฉพาะทางอย่างลึกซึ้ง", categoryId: 6 },
      { id: "5c", text: "Doing creative, varied, innovative work", textTh: "การทำงานที่สร้างสรรค์ หลากหลาย และเป็นนวัตกรรม", categoryId: 7 },
      { id: "5d", text: "Having authority and influence over decisions", textTh: "มีอำนาจและอิทธิพลต่อการตัดสินใจ", categoryId: 4 },
      { id: "5e", text: "Fair compensation matching my contribution", textTh: "ค่าตอบแทนที่ยุติธรรมตามผลงาน", categoryId: 5 }
    ]
  },
  {
    id: 6,
    text: "What reward do you value most?",
    textTh: "คุณให้ความสำคัญกับรางวัลใดที่สุด?",
    answers: [
      { id: "6a", text: "Public recognition and performance awards", textTh: "การยอมรับในสาธารณะและรางวัลด้านผลงาน", categoryId: 3 },
      { id: "6b", text: "Opportunities to deepen my expertise", textTh: "โอกาสในการเพิ่มความเชี่ยวชาญ", categoryId: 6 },
      { id: "6c", text: "Competitive salary and bonuses", textTh: "เงินเดือนที่แข่งขันได้และโบนัส", categoryId: 5 },
      { id: "6d", text: "Strong workplace friendships and social events", textTh: "มิตรภาพในที่ทำงานและกิจกรรมสังคม", categoryId: 2 },
      { id: "6e", text: "Freedom to work my own way", textTh: "อิสระในการทำงานแบบของตนเอง", categoryId: 8 }
    ]
  },
  {
    id: 7,
    text: "How do you handle routine tasks?",
    textTh: "คุณจัดการกับงานประจำเป็นอย่างไร?",
    answers: [
      { id: "7a", text: "I find them boring; I need variety and novelty", textTh: "ฉันรู้สึกน่าเบื่อ ฉันต้องการความหลากหลายและความแปลกใหม่", categoryId: 7 },
      { id: "7b", text: "I prefer complete control over my workflow", textTh: "ฉันชอบมีการควบคุมขั้นตอนการทำงานอย่างสมบูรณ์", categoryId: 8 },
      { id: "7c", text: "I enjoy them when done with the team", textTh: "ฉันชอบเมื่อทำร่วมกับทีม", categoryId: 2 },
      { id: "7d", text: "I tolerate them if the compensation is right", textTh: "ฉันยอมรับได้ถ้าค่าตอบแทนเหมาะสม", categoryId: 5 },
      { id: "7e", text: "I appreciate the stability and predictability", textTh: "ฉันชื่นชมความเสถียรและความคาดเดาได้", categoryId: 1 }
    ]
  },
  {
    id: 8,
    text: "What's your ideal work culture?",
    textTh: "วัฒนธรรมการทำงานที่เหมาะสมกับคุณ?",
    answers: [
      { id: "8a", text: "Safe, predictable, and consistent", textTh: "ปลอดภัย คาดการณ์ได้ และสม่ำเสมอ", categoryId: 1 },
      { id: "8b", text: "Flexible with freedom to choose projects", textTh: "ยืดหยุ่นและมีอิสระในการเลือกโปรเจ็กต์", categoryId: 8 },
      { id: "8c", text: "Fun, upbeat, and entertaining", textTh: "สนุก ร่าเริง และบันเทิง", categoryId: 9 },
      { id: "8d", text: "Results-focused with clear pay structure", textTh: "มุ่งเน้นผลลัพธ์และโครงสร้างค่าตอบแทนที่ชัดเจน", categoryId: 5 },
      { id: "8e", text: "Intellectually challenging with complex problems", textTh: "ท้าทายทางปัญญาด้วยปัญหาที่ซับซ้อน", categoryId: 6 }
    ]
  },
  {
    id: 9,
    text: "What professional achievement excites you most?",
    textTh: "ความสำเร็จด้านอาชีพอะไรที่ทำให้คุณตื่นเต้นมากที่สุด?",
    answers: [
      { id: "9a", text: "Being recognized as the top performer", textTh: "ได้รับการยอมรับว่าเป็นพนักงานอันดับหนึ่ง", categoryId: 3 },
      { id: "9b", text: "Complete independence in my role", textTh: "อิสระอย่างสมบูรณ์ในบทบาทของตน", categoryId: 8 },
      { id: "9c", text: "Creating a positive, fun team atmosphere", textTh: "สร้างบรรยากาศทีมที่เป็นบวกและสนุกสนาน", categoryId: 9 },
      { id: "9d", text: "Becoming a renowned expert in my field", textTh: "กลายเป็นผู้เชี่ยวชาญที่มีชื่อเสียงในสาขา", categoryId: 6 },
      { id: "9e", text: "Influencing major strategic decisions", textTh: "มีอิทธิพลต่อการตัดสินใจเชิกลยุทธ์สำคัญ", categoryId: 4 }
    ]
  },
  {
    id: 10,
    text: "What drives your career decisions?",
    textTh: "สิ่งใดที่ขับเคลื่อนการตัดสินใจอาชีพของคุณ?",
    answers: [
      { id: "10a", text: "Leadership opportunities and authority", textTh: "โอกาสในการเป็นผู้นำและอำนาจ", categoryId: 4 },
      { id: "10b", text: "Potential for awards and recognition", textTh: "โอกาสในการได้รับรางวัลและการยอมรับ", categoryId: 3 },
      { id: "10c", text: "Long-term stability and security", textTh: "เสถียรภาพและความมั่นคงระยะยาว", categoryId: 1 },
      { id: "10d", text: "Depth of technical expertise I can gain", textTh: "ความลึกของความเชี่ยวชาญทางเทคนิคที่จะได้รับ", categoryId: 6 },
      { id: "10e", text: "Financial compensation and benefits package", textTh: "ค่าตอบแทนทางการเงินและสวัสดิการ", categoryId: 5 }
    ]
  },
  {
    id: 11,
    text: "When facing a challenge at work, you tend to:",
    textTh: "เมื่อเผชิญความท้าทายในการทำงาน คุณมักจะ:",
    answers: [
      { id: "11a", text: "Follow established procedures and guidelines", textTh: "ทำตามขั้นตอนและแนวทางที่กำหนดไว้", categoryId: 1 },
      { id: "11b", text: "Brainstorm with colleagues and build consensus", textTh: "ระดมสมองกับเพื่อนร่วมงานและสร้างความเห็นพ้อง", categoryId: 2 },
      { id: "11c", text: "Compete to find the best solution first", textTh: "แข่งขันเพื่อหาทางแก้ที่ดีที่สุดเป็นคนแรก", categoryId: 3 },
      { id: "11d", text: "Take charge and make quick decisions", textTh: "รับผิดชอบและตัดสินใจอย่างรวดเร็ว", categoryId: 4 },
      { id: "11e", text: "Think creatively and propose unconventional ideas", textTh: "คิดอย่างสร้างสรรค์และเสนอไอเดียที่แปลกใหม่", categoryId: 7 }
    ]
  },
  {
    id: 12,
    text: "Your perfect workday includes:",
    textTh: "วันทำงานที่สมบูรณ์แบบของคุณประกอบด้วย:",
    answers: [
      { id: "12a", text: "Making people laugh and feel good", textTh: "ทำให้คนอื่นหัวเราะและรู้สึกดี", categoryId: 9 },
      { id: "12b", text: "Working alone without interruptions", textTh: "ทำงานคนเดียวโดยไม่มีการขัดจังหวะ", categoryId: 8 },
      { id: "12c", text: "Completing tasks that earn me bonuses", textTh: "ทำงานให้เสร็จที่ทำให้ได้รับโบนัส", categoryId: 5 },
      { id: "12d", text: "Diving deep into technical details", textTh: "เจาะลึกรายละเอียดทางเทคนิค", categoryId: 6 },
      { id: "12e", text: "Connecting with teammates over coffee", textTh: "เชื่อมต่อกับเพื่อนร่วมทีมระหว่างดื่มกาแฟ", categoryId: 2 }
    ]
  }
];

export const TOTAL_QUESTIONS = questions.length;
export const TOTAL_STYLE_TYPES = 9;
export const ESTIMATED_MINUTES = Math.ceil(TOTAL_QUESTIONS * 0.25);

export function getQuestionText(question: Question, locale: Locale): string {
  return locale === 'th' ? question.textTh : question.text;
}

export function getAnswerText(answer: Answer, locale: Locale): string {
  return locale === 'th' ? answer.textTh : answer.text;
}
