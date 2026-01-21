export type Locale = 'th' | 'en';

export interface Translations {
  common: {
    takeAssessment: string;
    startAssessment: string;
    continue: string;
    back: string;
    next: string;
    submit: string;
    loading: string;
    error: string;
    success: string;
    refresh: string;
    view: string;
    edit: string;
    delete: string;
    cancel: string;
    save: string;
    close: string;
    of: string;
    professionalAssessment: string;
    questions: string;
    styleTypes: string;
    minutes: string;
    deepInsights: string;
    deepInsightsDesc: string;
    quickEasy: string;
    quickEasyDesc: string;
    actionableResults: string;
    actionableResultsDesc: string;
  };
  landing: {
    heroTitle: string;
    heroSubtitle: string;
    heroCTA: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  onboarding: {
    title: string;
    subtitle: string;
    fullName: string;
    emailAddress: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    continueButton: string;
    privacyNote: string;
    backToHome: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    questionOf: string;
    back: string;
    next: string;
    submitting: string;
    submittingError: string;
    errorOccurred: string;
    tryAgain: string;
  };
  result: {
    title: string;
    subtitle: string;
    yourStyle: string;
    about: string;
    strengths: string;
    hrAdvice: string;
    share: string;
    shareSubtitle: string;
    shareTwitter: string;
    shareFacebook: string;
    shareLinkedIn: string;
    knowSomeone: string;
    shareWithTeam: string;
    retakeAssessment: string;
    copyLink: string;
    copied: string;
    copyFailed: string;
  };
  styles: {
    [key: number]: {
      name: string;
      definition: string;
      strengths: string;
      hrAdvice: string;
    };
  };
  admin: {
    dashboard: string;
    reports: string;
    settings: string;
    logout: string;
    login: string;
    loginTitle: string;
    loginSubtitle: string;
    setupTitle: string;
    setupSubtitle: string;
    username: string;
    password: string;
    confirmPassword: string;
    createAdmin: string;
    totalAssessments: string;
    todayAssessments: string;
    uniqueStyles: string;
    quickActions: string;
    viewReports: string;
    viewReportsDesc: string;
    changePassword: string;
    changePasswordDesc: string;
    securityTips: string;
    tip1: string;
    tip2: string;
    tip3: string;
    tip4: string;
    currentPassword: string;
    newPassword: string;
    newPasswordMin: string;
    updatePassword: string;
    passwordMismatch: string;
    passwordChanged: string;
    currentPasswordIncorrect: string;
    passwordDifferent: string;
    tableId: string;
    tableName: string;
    tableEmail: string;
    tableResult: string;
    tableDate: string;
    tableAction: string;
    viewResult: string;
    noAssessments: string;
    noAssessmentsDesc: string;
    assessmentReports: string;
    adminDashboard: string;
    loggedInAs: string;
    backToAssessment: string;
    processing: string;
    createPassword: string;
    enterPassword: string;
    enterUsername: string;
    createStrongPassword: string;
    enterCurrentPassword: string;
    enterNewPassword: string;
    confirmNewPassword: string;
    updating: string;
    successRedirecting: string;
    anErrorOccurred: string;
    networkError: string;
    loadingReports: string;
    failedLoadReports: string;
    style: string;
  };
  errors: {
    notFound: string;
    notFoundDesc: string;
    serverError: string;
    serverErrorDesc: string;
    tryAgain: string;
    goHome: string;
  };
}

export const translations: Record<Locale, Translations> = {
  th: {
    common: {
      takeAssessment: 'ทำแบบประเมิน',
      startAssessment: 'เริ่มทำแบบประเมิน',
      continue: 'ดำเนินการต่อ',
      back: 'ย้อนกลับ',
      next: 'ถัดไป',
      submit: 'ส่งข้อมูล',
      loading: 'กำลังโหลด...',
      error: 'เกิดข้อผิดพลาด',
      success: 'สำเร็จ',
      refresh: 'รีเฟรช',
      view: 'ดู',
      edit: 'แก้ไข',
      delete: 'ลบ',
      cancel: 'ยกเลิก',
      save: 'บันทึก',
      close: 'ปิด',
      of: 'จาก',
      professionalAssessment: '✨ แบบประเมินทางอาชีพ',
      questions: 'ข้อ',
      styleTypes: 'สไตล์',
      minutes: 'นาที',
      deepInsights: 'ข้อมูลเชิงลึก',
      deepInsightsDesc: 'เข้าใจแรงจูงใจหลักและความชอบในการทำงานของคุณ',
      quickEasy: 'รวดเร็วและง่าย',
      quickEasyDesc: 'ทำแบบประเมินใน 3 นาที',
      actionableResults: 'ผลลัพธ์ที่ปฏิบัติได้จริง',
      actionableResultsDesc: 'รับคำแนะนำส่วนบุคคลเกี่ยวกับจุดแข็งและคำแนะนำจาก HR'
    },
    landing: {
      heroTitle: 'ค้นพบสไตล์การทำงานของคุณ',
      heroSubtitle: 'ทำแบบประเมินเพื่อค้นพบลักษณะการทำงาน จุดแข็ง และแรงบันดาลใจของคุณ',
      heroCTA: 'เริ่มทำแบบประเมิน',
      feature1Title: 'เรียบง่าย',
      feature1Desc: 'ตอบคำถามแบบง่าย ไม่เกิน 5 นาที',
      feature2Title: 'ค้นพบตัวตนของคุณ',
      feature2Desc: 'รู้เลยว่าคุณเป็นคนแบบไหนในการทำงาน',
      feature3Title: 'ได้ผลลัพธ์ทันที',
      feature3Desc: 'รู้ผลทันทีพร้อมคำแนะนำสำหรับการพัฒนาตนเอง'
    },
    onboarding: {
      title: 'เริ่มต้น',
      subtitle: 'กรอกข้อมูลเพื่อเริ่มทำแบบประเมิน',
      fullName: 'ชื่อ-นามสกุล',
      emailAddress: 'อีเมล',
      fullNamePlaceholder: 'สมชิน ดี เจริญธรรม',
      emailPlaceholder: 'somsak@example.com',
      continueButton: 'ดำเนินการต่อ',
      privacyNote: 'ข้อมูลของคุณจะถูกเก็บอย่างปลอดภัย',
      backToHome: '← กลับไปหน้าแรก'
    },
    quiz: {
      title: 'แบบประเมิน',
      subtitle: 'แบบประเมินสไตล์การทำงาน',
      questionOf: 'คำถามที่',
      back: 'ย้อนกลับ',
      next: 'ถัดไป',
      submitting: 'กำลังส่ง...',
      submittingError: 'เกิดข้อผิดพลาดในการส่ง: ',
      errorOccurred: 'เกิดข้อผิดพลาด โปรดลองอีกครั้ง',
      tryAgain: 'ลองอีกครั้ง'
    },
    result: {
      title: 'เสร็จสิ้น!',
      subtitle: 'นี่คือดีเอ็นของคุณในการทำงาน',
      yourStyle: 'สไตล์การทำงานของคุณ',
      about: 'เกี่ยวกับสไตล์',
      strengths: 'จุดแข็ง',
      hrAdvice: 'คำแนะนำสำหรับ HR/ผู้บริหาร',
      share: 'แชร์ผลลัพธ์',
      shareSubtitle: 'ปล่อยให้โลกรู้ว่าคุณเป็นคนแบบไหน!',
      shareTwitter: 'แชร์บน X',
      shareFacebook: 'แชร์บน Facebook',
      shareLinkedIn: 'แชร์บน LinkedIn',
      knowSomeone: 'รู้จักใครที่ควรทำแบบประเมินนี้?',
      shareWithTeam: 'แชร์แบบประเมินกับทีม เพื่อนร่วมงานของคุณ!',
      retakeAssessment: 'ทำแบบประเมินอีกครั้ง',
      copyLink: 'คัดลิงก์',
      copied: 'คัดลิงแล้ว!',
      copyFailed: 'คัดลอกไม่สำเร็จ โปรดลองอีกครั้ง'
    },
    admin: {
      dashboard: 'แดชบอร์ด',
      reports: 'รายงาน',
      settings: 'ตั้งค่า',
      logout: 'ออกจากระบบ',
      login: 'เข้าสู่ระบบผู้ดูแล',
      loginTitle: 'เข้าสู่ระบบผู้ดูแล',
      loginSubtitle: 'เข้าสู่ระบบเพื่อเข้าถึงแดชบอร์ด',
      setupTitle: 'ตั้งค่าผู้ดูแล',
      setupSubtitle: 'สร้างบัญชีผู้ดูแลเพื่อเริ่มต้น',
      username: 'ชื่อผู้ใช้',
      password: 'รหัสผ่าน',
      confirmPassword: 'ยืนยันรหัสผ่าน',
      createAdmin: 'สร้างบัญชีผู้ดูแล',
      totalAssessments: 'แบบประเมินทั้งหมด',
      todayAssessments: 'แบบประเมินวันนี้',
      uniqueStyles: 'สไตล์ที่แตกต่าง',
      quickActions: 'การกระทำด่วน',
      viewReports: 'ดูรายงาน',
      viewReportsDesc: 'ดูผลลัพธ์แบบประเมินของผู้ใช้ทั้งหมด',
      changePassword: 'เปลี่ยนรหัสผ่าน',
      changePasswordDesc: 'อัปเดตรหัสผ่านของผู้ดูแล',
      securityTips: 'เคล็ดความปลอดภัย',
      tip1: 'ใช้รหัสผ่านที่แข็งแรงและเป็นเอกลักษณ์',
      tip2: 'หลีกเลี่ยงคำทั่วไปหรือข้อมูลส่วนตัว',
      tip3: 'พิจารณาใช้ผู้จัดการรหัสผ่าน',
      tip4: 'เปลี่ยนรหัสผ่านอย่างสม่ำเสมอง',
      currentPassword: 'รหัสผ่านปัจจุบัน',
      newPassword: 'รหัสผ่านใหม่',
      newPasswordMin: 'ต้องมีอย่างน้อย 8 ตัวอักษร',
      updatePassword: 'อัปเดตรหัสผ่าน',
      passwordMismatch: 'รหัสผ่านไม่ตรงกัน',
      passwordChanged: 'อัปเดตรหัสผ่านสำเร็จแล้ว',
      currentPasswordIncorrect: 'รหัสผ่านปัจจุบันไม่ถูกต้อง',
      passwordDifferent: 'รหัสผ่านใหม่ต้องแตกต่างจากรหัสผ่านปัจจุบัน',
      tableId: 'ไอดี',
      tableName: 'ชื่อ',
      tableEmail: 'อีเมล',
      tableResult: 'ผลลัพธ์',
      tableDate: 'วันที่',
      tableAction: 'การกระทำ',
      viewResult: 'ดูผลลัพธ์',
      noAssessments: 'ยังไม่มีแบบประเมิน',
      noAssessmentsDesc: 'เริ่มต้นด้วยการทำแบบประเมินเองหรือแชร์ให้ผู้อื่น',
      assessmentReports: 'รายงานแบบประเมิน',
      adminDashboard: 'แดชบอร์ดผู้ดูแล',
      loggedInAs: 'เข้าสู่ระบบในชื่อ: ',
      backToAssessment: '← กลับไปทำแบบประเมิน',
      processing: 'กำลังดำเนินการ...',
      createPassword: 'สร้างรหัสผ่าน',
      enterPassword: 'กรอกรหัสผ่าน',
      enterUsername: 'กรอกชื่อผู้ใช้',
      createStrongPassword: 'สร้างรหัสผ่านที่แข็งแรง',
      enterCurrentPassword: 'กรอกรหัสผ่านปัจจุบัน',
      enterNewPassword: 'กรอกรหัสผ่านใหม่',
      confirmNewPassword: 'ยืนยันรหัสผ่านใหม่',
      updating: 'กำลังอัปเดต...',
      successRedirecting: 'สำเร็จ! กำลังนำทางไปยังแดชบอร์ด...',
      anErrorOccurred: 'เกิดข้อผิดพลาด',
      networkError: 'ข้อผิดพลาดเคือข่าย โปรดลองอีกครั้ง',
      loadingReports: 'กำลังโหลดรายงาน...',
      failedLoadReports: 'โหลดรายานไม่สำเร็จ โปรดลองอีกครั้ง',
      style: 'สไตล์'
    },
    styles: {
      1: {
        name: 'ผู้แสวงหาความปลอดภัย',
        definition: 'คุณเจริญในสภาพแวดล้อมที่เสถียรและคาดเดาได้ คุณให้ความสำคัญกับความมั่นคงในงาน แนวทางที่ชัดเจน และกิจวัตรประจำที่สม่ำเสมอ',
        strengths: 'ความน่าเชื่อถือ ความสม่ำเสมอ การจัดการความเสี่ยงเสี่ยง ความละเอียด และการสร้างกระบวนการที่เสถียร',
        hrAdvice: 'ให้คำอธิบายงานที่ชัดเจน การให้ข้อเสนอแนะอย่างสม่ำเสมอ สภาพแวดล้อมการทำงานที่เสถียร และเน้นย้ำความปลอดภัยในระยะยาว หลีกเลี่ยงการปรับโครงสร้างบ่อย'
      },
      2: {
        name: 'ผู้เชื่อมโยงสังคม',
        definition: 'คุณได้รับพลังงานจากการทำงานเป็นทีมและการสร้างความสัมพันธ์ที่แข็งแกร่ง การร่วมมือและการเชื่อมต่อทางสังคมเป็นแก่นแท้ของความพึงพอใจในการทำงานของคุณ',
        strengths: 'การสร้างทีม การสื่อสาร ความเห็นใจอกับผู้อื่น การร่วมมือ และการสร้างวัฒนธรรมการทำงานที่เป็นบวก',
        hrAdvice: 'ส่งเสริมโปรเจ็กต์ทีม กิจกรรมทางสังคม โอกาสการเป็นที่ปรึกษา สร้างพื้นที่ร่วมมือ และยกย่องการมีส่วนร่วมในการสร้างความสัมพันธ์'
      },
      3: {
        name: 'นักแสดงยอดเยี่ยม',
        definition: 'คุณถูกขับเคลื่อนโดยความสำเร็จ การยอมรับ และการแข่งขัน คุณชอบตั้งเป้าหมายทะเม่งและได้รับการยอมรับสำหรับผลงานของคุณ',
        strengths: 'การบรรลุเป้าหมาย แรงขับเคลื่อนที่แข่งขันได้ ความยอดเยี่ยมในการทำงาน และสร้างแรงบันดาลใจให้ผู้อื่นด้วยผลลัพธ์',
        hrAdvice: 'ดำเนินการรางวัลตามผลงาน โปรแกรมการยอมรับในสาธารณะ KPI ที่ชัดเจน และโอกาสการเลื่อนขั้น เฉลิมฉลือชัยชนะอย่างเด่นชัด'
      },
      4: {
        name: 'ผู้นำ',
        definition: 'คุณมีความโนมเองต่อการรับผิดชอบและการตัดสินใจเชิงกลยุทธ์ คุณเพลิดเพลินกับความรับผิดชอบ อิทธิพล และการนำทีมสู่ความสำเร็จ',
        strengths: 'การคิดเชิงกลยุทธ์ การตัดสินใจ การตั้งวิสัยทัศนะ การนำทิศทางทีม และความรับผิดชอบ',
        hrAdvice: 'ให้โอกาสการเป็นผู้นำ อำนาจในการตัดสินใจ การฝึกอบรมผู้บริหาร และโปรเจ็กต์ที่ท้าทายซึ่งต้องการความเป็นเจ้าของ'
      },
      5: {
        name: 'ผู้แสวงหารางวัล',
        definition: 'การชดเชยค่าตอบแทนและผลประโยชน์ที่จับต้องได้เป็นแรงจูงใจหลักของคุณ คุณแสวงหาค่าจ้างที่เป็นธรรม โบนัส และรางวัลที่เป็นรูปธรรมสำหรับการมีส่วนร่วมของคุณ',
        strengths: 'การวางแผนการเงิน การมุ่งเน้นผลตอบแทนต่อการลงทุน การตัดสินใจตามคุณค่า และทักษะการเจรจา',
        hrAdvice: 'เสนอค่าตอบแทนที่แข่งขันได้ โครงสร้างโบนัสที่ชัดเจน มาตราเงินเดือนที่โปร่งใส และแรงจูงใจทางการเงินที่เกี่ยวข้องกับผลงาน'
      },
      6: {
        name: 'ผู้เชี่ยวชาญ',
        definition: 'คุณมีความหลงใหในความเชี่ยวชาญที่ลึกซึ้งในสาขาของคุณ คุณรักที่จะกลายเป็นผู้เชี่ยวชาญด้านเนื้อหาและแก้ปัญหาทางเทคนิคที่ซับซ้อน',
        strengths: 'ความรู้ลึกซึ้ง การแก้ปัญหา ความเปี่ยนแย่งทางเทคนิค การเรียนรู้อย่างต่อเนื่อง และนวัตกรรมในพื้นที่เฉพาะทาง',
        hrAdvice: 'สนับสนุนการศึกษาอย่างต่อเนื่อง การรับรอง โปรเจ็กต์เฉพาะทาง การยอมรับผู้เชี่ยวชาญ และโอกาสในการเป็นที่ปรึกษาในสาขาของพวกเขา'
      },
      7: {
        name: 'นักสร้างสรรค์นวัตกรรม',
        definition: 'คุณเจริญด้วยความแปลกใหม่ ความคิดสร้างสรรค์ และนวัตกรรม งานประจำทำให้คุณเหนื่อยล้า ในขณะที่ไอเดียใหม่และการแก้ปัญหาที่ผิดแบบแผนการทำให้คุณมีพลังงาน',
        strengths: 'นวัตกรรม การแก้ปัญหาอย่างสร้างสรรค์ ความยืดหยุ่น การสร้างไอเดีย และการท้าทายสถานะเดิม',
        hrAdvice: 'ให้เสรีภาพในการสร้างสรรค์ เวลาสำหรับนวัตกรรม ความหลากหลายในโปรเจ็กต์ การระดมสมอง และลดงานซ้ำๆ'
      },
      8: {
        name: 'ผู้ทำงานอิสระ',
        definition: 'คุณให้ความสำคัญกับอิสระและการจัดการตนเอง คุณทำงานได้ดีที่สุดเมื่อได้รับเสรีภาพในการตัดสินใจว่า อย่างไร เมื่อไร และที่ไหนที่คุณจะทำงานให้เสร็จ',
        strengths: 'การกำหนดทิศทางด้วยตนเอง ความรับผิดชอบ การจัดการเวลา การแก้ปัญหาอย่างอิสระ และความริเริ่มต้น',
        hrAdvice: 'เสนอการจัดเรียบรูปแบบการทำงานที่ยืดหยุ่น ตัวเลือกทำงานจากระยะทาง การประเมินผลตามผลลัพธ์ และการควบคุมเมาไมโครอแมนเนเจอร์น้อยที่สุด ไว้ใจในกระบวนการของพวกเขา'
      },
      9: {
        name: 'ผู้บันเทิง',
        definition: 'คุณนำพลัง อารมณ์ขัน และความเป็นบวกไปสู่ที่ทำงาน คุณเจริญเมื่อคุณสามารถทำให้งานสนุกสนานและสร้างบรรยากาศที่สนุกสนานสำหรับทีมของคุณ',
        strengths: 'การยกระดับขวัญ พลังงานเป็นบวก การบรรเทาความเครียด การมีส่วนร่วมของทีม และการสร้างสภาพแวดล้อมการทำงานที่เพลิดเพลิน',
        hrAdvice: 'อนุญาตให้แสดงบุคลิกภาพ สนับสนุนความริเริ่มต้นทางสังคม ยอมรับผลกระทบเชิงบวกต่อวัฒนธรรม และสร้างพื้นที่สำหรับความสนุก'
      }
    },
    errors: {
      notFound: 'ไม่พบหน้า',
      notFoundDesc: 'หน้าที่คุณค้นหาไม่มีอยู่หรือถูกย้ายแล้ว',
      serverError: 'เกิดข้อผิดพลาดบนเซิร์เวอร์',
      serverErrorDesc: 'เกิดข้อผิดพลาดของเรา โปรดลองในหม่ในภายหลัง',
      tryAgain: 'ลองใหม่',
      goHome: 'ไปหน้าแรก'
    }
  },
  en: {
    common: {
      takeAssessment: 'Take Assessment',
      startAssessment: 'Start Assessment',
      continue: 'Continue',
      back: 'Back',
      next: 'Next',
      submit: 'Submit',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      refresh: 'Refresh',
      view: 'View',
      edit: 'Edit',
      delete: 'Delete',
      cancel: 'Cancel',
      save: 'Save',
      close: 'Close',
      of: 'of',
      professionalAssessment: '✨ Professional Assessment',
      questions: 'Questions',
      styleTypes: 'Style Types',
      minutes: 'Minutes',
      deepInsights: 'Deep Insights',
      deepInsightsDesc: 'Understand your core motivations and working preferences',
      quickEasy: 'Quick & Easy',
      quickEasyDesc: 'Complete in just 5 minutes',
      actionableResults: 'Actionable Results',
      actionableResultsDesc: 'Receive personalized strengths and HR recommendations'
    },
    landing: {
      heroTitle: 'Discover Your Professional DNA',
      heroSubtitle: 'Take our assessment to uncover your work style, strengths, and motivations',
      heroCTA: 'Start Assessment',
      feature1Title: 'Simple & Quick',
      feature1Desc: 'Complete in just 5 minutes with easy-to-answer questions',
      feature2Title: 'Discover Yourself',
      feature2Desc: 'Learn exactly what kind of professional you are',
      feature3Title: 'Instant Results',
      feature3Desc: 'Get immediate results with personalized development tips'
    },
    onboarding: {
      title: 'Get Started',
      subtitle: 'Enter your details to begin assessment',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      fullNamePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      continueButton: 'Continue to Assessment',
      privacyNote: 'Your data will be stored securely',
      backToHome: '← Back to Home'
    },
    quiz: {
      title: 'Assessment',
      subtitle: 'Employee Style Assessment',
      questionOf: 'Question',
      back: 'Back',
      next: 'Next',
      submitting: 'Submitting...',
      submittingError: 'Error submitting quiz: ',
      errorOccurred: 'An error occurred. Please try again.',
      tryAgain: 'Try Again'
    },
    result: {
      title: 'Assessment Complete!',
      subtitle: 'Here is your professional DNA',
      yourStyle: 'Your Employee Style',
      about: 'About Your Style',
      strengths: 'Your Strengths',
      hrAdvice: 'HR & Management Advice',
      share: 'Share Your Result',
      shareSubtitle: 'Let world know about your professional style!',
      shareTwitter: 'Share on X',
      shareFacebook: 'Share on Facebook',
      shareLinkedIn: 'Use "Share on LinkedIn"',
      knowSomeone: 'Know someone who should take this?',
      shareWithTeam: 'Share this assessment with your team, friends, or colleagues!',
      retakeAssessment: 'Retake Assessment',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      copyFailed: 'Failed to copy link. Please copy manually.'
    },
    admin: {
      dashboard: 'Dashboard',
      reports: 'Reports',
      settings: 'Settings',
      logout: 'Logout',
      login: 'Login',
      loginTitle: 'Admin Login',
      loginSubtitle: 'Login to access admin dashboard',
      setupTitle: 'Admin Setup',
      setupSubtitle: 'Create admin account to get started',
      username: 'Username',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      createAdmin: 'Create Admin Account',
      totalAssessments: 'Total Assessments',
      todayAssessments: "Today's Assessments",
      uniqueStyles: 'Unique Styles',
      quickActions: 'Quick Actions',
      viewReports: 'View Reports',
      viewReportsDesc: 'See all user assessment results',
      changePassword: 'Change Password',
      changePasswordDesc: 'Update your admin password',
      securityTips: 'Security Tips',
      tip1: 'Use a strong, unique password',
      tip2: 'Avoid using common words or personal information',
      tip3: 'Consider using a password manager',
      tip4: 'Change your password regularly',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      newPasswordMin: 'Must be at least 8 characters',
      updatePassword: 'Update Password',
      passwordMismatch: 'Passwords do not match',
      passwordChanged: 'Password updated successfully',
      currentPasswordIncorrect: 'Current password is incorrect',
      passwordDifferent: 'New password must be different from current password',
      tableId: 'ID',
      tableName: 'Name',
      tableEmail: 'Email',
      tableResult: 'Result',
      tableDate: 'Date',
      tableAction: 'Actions',
      viewResult: 'View Result',
      noAssessments: 'No assessments yet',
      noAssessmentsDesc: 'Get started by taking assessment yourself or sharing it with others.',
      assessmentReports: 'Assessment Reports',
      adminDashboard: 'Admin Dashboard',
      loggedInAs: 'Logged in as: ',
      backToAssessment: '← Back to Assessment',
      processing: 'Processing...',
      createPassword: 'Create Password',
      enterPassword: 'Enter password',
      enterUsername: 'Enter username',
      createStrongPassword: 'Create a strong password',
      enterCurrentPassword: 'Enter current password',
      enterNewPassword: 'Enter new password',
      confirmNewPassword: 'Confirm new password',
      updating: 'Updating...',
      successRedirecting: 'Success! Redirecting to dashboard...',
      anErrorOccurred: 'An error occurred',
      networkError: 'Network error. Please try again.',
      loadingReports: 'Loading reports...',
      failedLoadReports: 'Failed to load reports. Please try again.',
      style: 'Style'
    },
    styles: {
      1: {
        name: 'The Security Seeker',
        definition: 'You thrive in stable, predictable environments where you know what to expect. You value job security, clear guidelines, and consistent routines.',
        strengths: 'Reliability, consistency, risk management, thoroughness, and creating stable processes.',
        hrAdvice: 'Provide clear job descriptions, regular feedback, stable work environment, and emphasize long-term security. Avoid frequent restructuring.'
      },
      2: {
        name: 'The Social Connector',
        definition: 'You are energized by teamwork and building strong relationships. Collaboration and interpersonal connections are at the heart of your work satisfaction.',
        strengths: 'Team building, communication, empathy, collaboration, and creating positive work culture.',
        hrAdvice: 'Encourage team projects, social events, mentorship opportunities. Create collaborative spaces and recognize relationship-building contributions.'
      },
      3: {
        name: 'The Star Performer',
        definition: 'You are driven by achievement, recognition, and competition. You love setting ambitious goals and being acknowledged for your accomplishments.',
        strengths: 'Goal achievement, competitive drive, performance excellence, and inspiring others through results.',
        hrAdvice: 'Implement performance-based rewards, public recognition programs, clear KPIs, and advancement opportunities. Celebrate wins visibly.'
      },
      4: {
        name: 'The Leader',
        definition: 'You have a natural inclination toward taking charge and making strategic decisions. You enjoy responsibility, influence, and guiding teams toward success.',
        strengths: 'Strategic thinking, decision-making, vision setting, team direction, and accountability.',
        hrAdvice: 'Provide leadership opportunities, decision-making authority, management training, and challenging projects requiring ownership.'
      },
      5: {
        name: 'The Reward Seeker',
        definition: 'Financial compensation and tangible benefits are primary motivators for you. You seek fair pay, bonuses, and material rewards for your contributions.',
        strengths: 'Financial planning, ROI focus, value-driven decisions, and negotiation skills.',
        hrAdvice: 'Offer competitive compensation, clear bonus structures, transparent pay scales, and financial incentives tied to performance.'
      },
      6: {
        name: 'The Specialist',
        definition: 'You are passionate about deep expertise in your field. You love becoming a subject matter expert and solving complex, technical problems.',
        strengths: 'Deep knowledge, problem-solving, technical excellence, continuous learning, and innovation in specialized areas.',
        hrAdvice: 'Support continuous education, certifications, specialized projects, expert recognition, and opportunities to mentor in their field.'
      },
      7: {
        name: 'The Creative Innovator',
        definition: 'You thrive on novelty, creativity, and innovation. Routine work drains you, while fresh ideas and unconventional solutions energize you.',
        strengths: 'Innovation, creative problem-solving, adaptability, idea generation, and challenging the status quo.',
        hrAdvice: 'Provide creative freedom, innovation time, variety in projects, brainstorming sessions, and minimize repetitive tasks.'
      },
      8: {
        name: 'The Autonomous',
        definition: 'You value independence and self-management. You work best when given freedom to decide how, when, and where you complete your work.',
        strengths: 'Self-direction, accountability, time management, independent problem-solving, and initiative.',
        hrAdvice: 'Offer flexible work arrangements, remote options, outcome-based evaluation, and minimal micromanagement. Trust their process.'
      },
      9: {
        name: 'The Entertainer',
        definition: 'You bring energy, humor, and positivity to the workplace. You thrive when you can make work enjoyable and create a fun atmosphere for your team.',
        strengths: 'Morale boosting, positive energy, stress relief, team engagement, and creating enjoyable work environments.',
        hrAdvice: 'Allow personality expression, support social initiatives, recognize their positive impact on culture, and create space for fun.'
      }
    },
    errors: {
      notFound: 'Page Not Found',
      notFoundDesc: 'The page you\'re looking for doesn\'t exist or has been moved.',
      serverError: 'Internal Server Error',
      serverErrorDesc: 'Something went wrong on our end. Please try again later.',
      tryAgain: 'Try Again',
      goHome: 'Go to Home'
    }
  }
};

export function getTranslations(locale: Locale | string = 'th'): Translations {
  return translations[locale as Locale] || translations['th'];
}

export function t(locale: Locale = 'th', key: string): string {
  const trans = getTranslations(locale);
  const keys = key.split('.');
  let value: any = trans;
  
  for (const k of keys) {
    value = value[k];
    if (value === undefined) return key;
  }
  
  return value as string;
}
