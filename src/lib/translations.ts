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
      heroSubtitle: 'ทำแบบประเมิน 10 ข้อ เพื่อค้นพบลักษณะการทำงาน จุดแข็ง และแรงบันดาลใจของคุณ',
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
      heroSubtitle: 'Take our 10-question assessment to uncover your work style, strengths, and motivations',
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
