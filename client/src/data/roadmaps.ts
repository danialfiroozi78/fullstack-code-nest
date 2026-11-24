export type RoadmapStep = {
  title: string;
  description: string;
  topics: string[];
  project: string;
};

export type Roadmap = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  icon: "monitor" | "server" | "layers" | "cloud";
  skills: string[];
  steps: RoadmapStep[];
};

export const roadmaps: Roadmap[] = [
  {
    slug: "frontend",
    title: "توسعه‌دهنده فرانت‌اند",
    subtitle: "Frontend Developer",
    description:
      "از ساخت صفحات ساده وب تا توسعه رابط‌های کاربری حرفه‌ای با React و Next.js.",
    category: "web",
    level: "مبتدی تا پیشرفته",
    duration: "۶ تا ۹ ماه",
    icon: "monitor",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    steps: [
      {
        title: "مبانی وب",
        description: "با ساختار صفحات وب و اصول طراحی آشنا شو.",
        topics: ["HTML5", "Semantic HTML", "CSS3", "Flexbox", "Grid"],
        project: "ساخت یک صفحه معرفی شخصی",
      },
      {
        title: "طراحی واکنش‌گرا",
        description: "صفحات رو برای موبایل و دسکتاپ آماده کن.",
        topics: ["Responsive Design", "Media Queries", "Tailwind CSS"],
        project: "ساخت لندینگ‌پیج واکنش‌گرا",
      },
      {
        title: "جاوااسکریپت",
        description: "منطق و تعامل رو به صفحات وب اضافه کن.",
        topics: ["ES6+", "DOM", "Promises", "Async/Await", "Fetch API"],
        project: "ساخت اپلیکیشن مدیریت کارها",
      },
      {
        title: "React و TypeScript",
        description: "رابط‌های کاربری کامپوننت‌محور بساز.",
        topics: ["React", "Hooks", "TypeScript", "State Management"],
        project: "ساخت داشبورد مدیریتی",
      },
      {
        title: "Next.js و معماری فرانت‌اند",
        description: "با رندرینگ سمت سرور و ساختار پروژه آشنا شو.",
        topics: ["Next.js", "App Router", "SSR", "SEO", "Caching"],
        project: "ساخت وب‌سایت مقالات",
      },
      {
        title: "تست و انتشار",
        description: "کیفیت پروژه رو بررسی کن و اون رو منتشر کن.",
        topics: ["Testing", "Git", "Performance", "Deployment"],
        project: "انتشار نمونه‌کار نهایی",
      },
    ],
  },
  {
    slug: "backend",
    title: "توسعه‌دهنده بک‌اند",
    subtitle: "Backend Developer",
    description:
      "یادگیری توسعه API، مدیریت دیتابیس، احراز هویت و ساخت سرویس‌های سمت سرور.",
    category: "web",
    level: "مبتدی تا پیشرفته",
    duration: "۶ تا ۱۰ ماه",
    icon: "server",
    skills: ["Node.js", "Express", "SQL", "Redis", "Security", "Testing"],
    steps: [
      {
        title: "مبانی JavaScript و Node.js",
        description: "با محیط اجرای جاوااسکریپت در سرور آشنا شو.",
        topics: ["JavaScript", "Node.js", "Event Loop", "Modules"],
        project: "ساخت ابزار خط فرمان",
      },
      {
        title: "HTTP و REST API",
        description: "ساختار ارتباط کلاینت و سرور رو یاد بگیر.",
        topics: ["HTTP", "REST", "Express", "Middleware", "Validation"],
        project: "ساخت API مدیریت وظایف",
      },
      {
        title: "دیتابیس",
        description: "ذخیره و بازیابی اصولی اطلاعات رو تمرین کن.",
        topics: ["SQL", "MySQL", "Relations", "Indexes", "ORM"],
        project: "ساخت API فروشگاه",
      },
      {
        title: "احراز هویت و امنیت",
        description: "دسترسی کاربران و امنیت API رو مدیریت کن.",
        topics: ["JWT", "Cookies", "Hashing", "Rate Limiting", "CORS"],
        project: "ساخت سیستم ورود و ثبت‌نام",
      },
      {
        title: "مباحث پیشرفته",
        description: "عملکرد و پایداری سرویس رو بهبود بده.",
        topics: ["Redis", "Caching", "Queues", "Transactions"],
        project: "ساخت سیستم پردازش سفارش",
      },
      {
        title: "تست و استقرار",
        description: "سرویس رو برای محیط واقعی آماده کن.",
        topics: ["Unit Testing", "Integration Testing", "Docker", "CI/CD"],
        project: "استقرار API روی سرور",
      },
    ],
  },
  {
    slug: "fullstack",
    title: "توسعه‌دهنده فول‌استک",
    subtitle: "Fullstack Developer",
    description:
      "ترکیب مهارت‌های فرانت‌اند و بک‌اند برای ساخت اپلیکیشن‌های کامل.",
    category: "web",
    level: "مبتدی تا پیشرفته",
    duration: "۹ تا ۱۵ ماه",
    icon: "layers",
    skills: ["JavaScript", "React", "Next.js", "Node.js", "SQL", "Deployment"],
    steps: [
      {
        title: "مبانی وب",
        description: "ساختار وب و ابزارهای اولیه رو یاد بگیر.",
        topics: ["HTML", "CSS", "JavaScript", "Git"],
        project: "ساخت وب‌سایت شخصی",
      },
      {
        title: "فرانت‌اند مدرن",
        description: "رابط کاربری پویا و قابل نگهداری بساز.",
        topics: ["TypeScript", "React", "Tailwind CSS"],
        project: "ساخت پنل مدیریت",
      },
      {
        title: "Next.js",
        description: "با معماری اپلیکیشن‌های مدرن آشنا شو.",
        topics: ["App Router", "Server Components", "SEO"],
        project: "ساخت وبلاگ",
      },
      {
        title: "بک‌اند و API",
        description: "منطق سمت سرور و API توسعه بده.",
        topics: ["Node.js", "Express", "REST API"],
        project: "ساخت API وبلاگ",
      },
      {
        title: "دیتابیس و امنیت",
        description: "داده‌ها و کاربران رو مدیریت کن.",
        topics: ["MySQL", "ORM", "Authentication", "Authorization"],
        project: "پیاده‌سازی حساب کاربری",
      },
      {
        title: "اتصال فرانت‌اند و بک‌اند",
        description: "بخش‌های مختلف اپلیکیشن رو یکپارچه کن.",
        topics: ["API Integration", "Cookies", "Caching"],
        project: "ساخت فروشگاه کامل",
      },
      {
        title: "تست و انتشار",
        description: "اپلیکیشن رو برای استفاده واقعی آماده کن.",
        topics: ["Testing", "Security", "Deployment"],
        project: "استقرار پروژه فول‌استک",
      },
    ],
  },
  {
    slug: "devops",
    title: "مهندسی DevOps",
    subtitle: "DevOps Engineer",
    description: "یادگیری زیرساخت، اتوماسیون، کانتینرسازی و استقرار نرم‌افزار.",
    category: "infrastructure",
    level: "متوسط تا پیشرفته",
    duration: "۶ تا ۱۲ ماه",
    icon: "cloud",
    skills: ["Linux", "Networking", "Docker", "CI/CD", "Monitoring"],
    steps: [
      {
        title: "Linux و شبکه",
        description: "با سیستم‌عامل سرور و شبکه آشنا شو.",
        topics: ["Linux", "Shell", "TCP/IP", "DNS", "HTTP"],
        project: "راه‌اندازی سرور لینوکسی",
      },
      {
        title: "Git و اسکریپت‌نویسی",
        description: "فرایندهای تکراری رو خودکار کن.",
        topics: ["Git", "Bash", "Automation"],
        project: "نوشتن اسکریپت پشتیبان‌گیری",
      },
      {
        title: "کانتینرسازی",
        description: "اپلیکیشن‌ها رو در محیط‌های قابل تکرار اجرا کن.",
        topics: ["Docker", "Docker Compose", "Images", "Volumes"],
        project: "کانتینرسازی یک اپلیکیشن",
      },
      {
        title: "CI/CD",
        description: "فرایند تست و انتشار رو خودکار کن.",
        topics: ["GitHub Actions", "Pipelines", "Deployment"],
        project: "ساخت پایپ‌لاین انتشار",
      },
      {
        title: "زیرساخت و ارکستریشن",
        description: "مدیریت سرویس‌ها و زیرساخت رو یاد بگیر.",
        topics: ["Kubernetes", "Terraform", "Cloud Basics"],
        project: "استقرار سرویس چندکانتینری",
      },
      {
        title: "مانیتورینگ و امنیت",
        description: "سلامت و پایداری سرویس‌ها رو بررسی کن.",
        topics: ["Logging", "Metrics", "Monitoring", "Secrets"],
        project: "راه‌اندازی داشبورد مانیتورینگ",
      },
    ],
  },
];

export function getRoadmap(slug: string) {
  return roadmaps.find((roadmap) => roadmap.slug === slug);
}
