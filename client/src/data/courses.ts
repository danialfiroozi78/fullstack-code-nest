export type CourseCategory = "frontend" | "backend" | "database" | "tools";

export type CourseIcon =
  | "react"
  | "next"
  | "javascript"
  | "node"
  | "database"
  | "git";

export type Course = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: CourseCategory;
  instructor: string;
  price: number;
  originalPrice: number;
  lessons: number;
  duration: string;
  level: string;
  rating: number;
  students: number;
  icon: CourseIcon;
  featured?: boolean;
};

export const courseCategories = [
  { value: "all", label: "همه دوره‌ها" },
  { value: "frontend", label: "فرانت‌اند" },
  { value: "backend", label: "بک‌اند" },
  { value: "database", label: "دیتابیس" },
  { value: "tools", label: "ابزارهای توسعه" },
] as const;

export const courses: Course[] = [
  {
    id: 1,
    slug: "react-js",
    title: "آموزش جامع React.js از صفر تا پیشرفته",
    description: "یادگیری React، کامپوننت‌ها، Hooks و ساخت پروژه‌های واقعی.",
    category: "frontend",
    instructor: "مدرس CodeNest",
    price: 1490000,
    originalPrice: 1890000,
    lessons: 48,
    duration: "۳۲ ساعت",
    level: "متوسط",
    rating: 4.9,
    students: 1250,
    icon: "react",
    featured: true,
  },
  {
    id: 2,
    slug: "nextjs",
    title: "آموزش Next.js و ساخت وب‌سایت حرفه‌ای",
    description: "توسعه اپلیکیشن با App Router، رندرینگ و معماری مدرن.",
    category: "frontend",
    instructor: "مدرس CodeNest",
    price: 1690000,
    originalPrice: 2190000,
    lessons: 42,
    duration: "۲۸ ساعت",
    level: "پیشرفته",
    rating: 4.8,
    students: 890,
    icon: "next",
  },
  {
    id: 3,
    slug: "javascript",
    title: "آموزش JavaScript از مقدماتی تا پیشرفته",
    description: "تسلط بر مبانی جاوااسکریپت و مفاهیم کاربردی زبان.",
    category: "frontend",
    instructor: "مدرس CodeNest",
    price: 990000,
    originalPrice: 1390000,
    lessons: 65,
    duration: "۴۰ ساعت",
    level: "مبتدی",
    rating: 4.9,
    students: 2100,
    icon: "javascript",
  },
  {
    id: 4,
    slug: "nodejs-express",
    title: "آموزش پروژه‌محور Node.js و Express",
    description: "ساخت REST API، احراز هویت و توسعه سرویس‌های بک‌اند.",
    category: "backend",
    instructor: "مدرس CodeNest",
    price: 1190000,
    originalPrice: 1590000,
    lessons: 56,
    duration: "۳۵ ساعت",
    level: "متوسط",
    rating: 4.8,
    students: 760,
    icon: "node",
    featured: true,
  },
  {
    id: 5,
    slug: "mysql",
    title: "آموزش جامع MySQL و طراحی دیتابیس",
    description: "طراحی جداول، روابط، Query، Index و مدیریت اطلاعات.",
    category: "database",
    instructor: "مدرس CodeNest",
    price: 790000,
    originalPrice: 1090000,
    lessons: 38,
    duration: "۲۲ ساعت",
    level: "مبتدی",
    rating: 4.7,
    students: 540,
    icon: "database",
  },
  {
    id: 6,
    slug: "git-github",
    title: "آموزش Git و GitHub برای برنامه‌نویسان",
    description: "مدیریت نسخه، Branch، Merge و کار تیمی حرفه‌ای.",
    category: "tools",
    instructor: "مدرس CodeNest",
    price: 0,
    originalPrice: 0,
    lessons: 24,
    duration: "۱۲ ساعت",
    level: "مبتدی",
    rating: 4.9,
    students: 3200,
    icon: "git",
  },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

export const getCourseCategory = (category: CourseCategory) =>
  courseCategories.find((item) => item.value === category)?.label ?? category;
