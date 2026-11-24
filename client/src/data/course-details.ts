export type CourseSection = {
  id: number;
  title: string;
  lessons: {
    id: number;
    title: string;
    duration: string;
    preview?: boolean;
  }[];
};

export type CourseDetailsData = {
  about: string[];
  requirements: string[];
  outcomes: string[];
  sections: CourseSection[];
};

const commonSections = (technology: string): CourseSection[] => [
  {
    id: 1,
    title: `آشنایی و شروع کار با ${technology}`,
    lessons: [
      {
        id: 1,
        title: "معرفی دوره و مسیر یادگیری",
        duration: "۱۲ دقیقه",
        preview: true,
      },
      {
        id: 2,
        title: "نصب ابزارهای موردنیاز",
        duration: "۱۸ دقیقه",
        preview: true,
      },
      {
        id: 3,
        title: "ساخت اولین پروژه",
        duration: "۲۵ دقیقه",
      },
    ],
  },
  {
    id: 2,
    title: "مفاهیم اصلی و کاربردی",
    lessons: [
      {
        id: 4,
        title: "بررسی مفاهیم پایه",
        duration: "۳۲ دقیقه",
      },
      {
        id: 5,
        title: "کار با قابلیت‌های مهم",
        duration: "۴۰ دقیقه",
      },
      {
        id: 6,
        title: "تمرین و حل مسئله",
        duration: "۲۸ دقیقه",
      },
    ],
  },
  {
    id: 3,
    title: "ساخت پروژه واقعی",
    lessons: [
      {
        id: 7,
        title: "معرفی پروژه نهایی",
        duration: "۱۵ دقیقه",
      },
      {
        id: 8,
        title: "پیاده‌سازی پروژه",
        duration: "۵۵ دقیقه",
      },
      {
        id: 9,
        title: "بررسی و بهینه‌سازی",
        duration: "۳۵ دقیقه",
      },
    ],
  },
];

export const courseDetails: Record<string, CourseDetailsData> = {
  "react-js": {
    about: [
      "در این دوره React.js رو از مفاهیم اصلی تا ساخت اپلیکیشن‌های واقعی یاد می‌گیری. با معماری کامپوننتی، مدیریت State و توسعه رابط‌های کاربری آشنا می‌شی.",
      "هدف دوره اینه که بتونی با استفاده از React پروژه‌های کاربردی و قابل توسعه بسازی.",
    ],
    requirements: [
      "آشنایی با HTML و CSS",
      "آشنایی مقدماتی با JavaScript",
      "داشتن یک سیستم برای تمرین",
    ],
    outcomes: [
      "ساخت کامپوننت‌های قابل استفاده مجدد",
      "کار با Props و State",
      "تسلط بر Hooks پرکاربرد",
      "مدیریت فرم‌ها و درخواست‌های API",
      "ساخت پروژه واقعی با React",
    ],
    sections: commonSections("React.js"),
  },

  nextjs: {
    about: [
      "در این دوره با Next.js و معماری App Router آشنا می‌شی و یاد می‌گیری چطور اپلیکیشن‌های مدرن و بهینه بسازی.",
    ],
    requirements: ["تسلط نسبی به React", "آشنایی با JavaScript"],
    outcomes: [
      "کار با App Router",
      "درک Server و Client Components",
      "پیاده‌سازی صفحات داینامیک",
      "آشنایی با روش‌های رندرینگ",
    ],
    sections: commonSections("Next.js"),
  },

  javascript: {
    about: [
      "در این دوره جاوااسکریپت رو قدم‌به‌قدم یاد می‌گیری و با تمرین‌های کاربردی مهارت برنامه‌نویسی خودت رو تقویت می‌کنی.",
    ],
    requirements: ["آشنایی اولیه با کامپیوتر", "علاقه به یادگیری برنامه‌نویسی"],
    outcomes: [
      "درک متغیرها و توابع",
      "کار با آرایه‌ها و آبجکت‌ها",
      "درک Promise و Async/Await",
      "ساخت پروژه‌های کاربردی",
    ],
    sections: commonSections("JavaScript"),
  },

  "nodejs-express": {
    about: [
      "در این دوره توسعه بک‌اند با Node.js و Express رو یاد می‌گیری و APIهای واقعی می‌سازی.",
    ],
    requirements: ["آشنایی با JavaScript", "درک مقدماتی HTTP"],
    outcomes: [
      "ساخت REST API",
      "کار با Middleware",
      "مدیریت خطاها",
      "پیاده‌سازی احراز هویت",
      "اتصال به دیتابیس",
    ],
    sections: commonSections("Node.js"),
  },

  mysql: {
    about: [
      "در این دوره با طراحی دیتابیس رابطه‌ای، SQL و مدیریت داده‌ها در MySQL آشنا می‌شی.",
    ],
    requirements: ["آشنایی مقدماتی با مفاهیم برنامه‌نویسی"],
    outcomes: [
      "طراحی جداول و روابط",
      "نوشتن Queryهای SQL",
      "کار با JOIN",
      "درک Index و Transaction",
    ],
    sections: commonSections("MySQL"),
  },

  "git-github": {
    about: [
      "در این دوره مدیریت نسخه با Git و همکاری تیمی با GitHub رو به‌صورت کاربردی یاد می‌گیری.",
    ],
    requirements: ["آشنایی مقدماتی با برنامه‌نویسی"],
    outcomes: [
      "مدیریت Commit و Branch",
      "کار با Merge و Conflict",
      "استفاده از GitHub",
      "همکاری روی پروژه‌های تیمی",
    ],
    sections: commonSections("Git"),
  },
};
