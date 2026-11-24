export type PanelCourse = {
  id: number;
  title: string;
  slug: string;
  category: string;
  instructor: string;
  lessons: number;
  completedLessons: number;
  progress: number;
  icon: "react" | "node" | "html" | "next";
};

export type PanelOrder = {
  id: string;
  date: string;
  courses: string[];
  amount: number;
  status: "success" | "pending" | "failed";
};

export const panelUser = {
  firstName: "کاربر",
  lastName: "کدنست",
  phone: "09123456789",
  email: "student@example.com",
  bio: "علاقه‌مند به یادگیری برنامه‌نویسی و توسعه وب",
  joinedAt: "آبان ۱۴۰۵",
};

export const panelCourses: PanelCourse[] = [
  {
    id: 1,
    title: "آموزش جامع React.js از مقدماتی تا پیشرفته",
    slug: "react-js",
    category: "فرانت‌اند",
    instructor: "مدرس دوره",
    lessons: 48,
    completedLessons: 31,
    progress: 65,
    icon: "react",
  },
  {
    id: 2,
    title: "آموزش پروژه‌محور Node.js و Express",
    slug: "nodejs-express",
    category: "بک‌اند",
    instructor: "مدرس دوره",
    lessons: 56,
    completedLessons: 17,
    progress: 30,
    icon: "node",
  },
  {
    id: 3,
    title: "آموزش HTML و CSS از صفر",
    slug: "html-css",
    category: "طراحی وب",
    instructor: "مدرس دوره",
    lessons: 32,
    completedLessons: 32,
    progress: 100,
    icon: "html",
  },
  {
    id: 4,
    title: "آموزش Next.js و ساخت پروژه واقعی",
    slug: "nextjs",
    category: "فرانت‌اند",
    instructor: "مدرس دوره",
    lessons: 42,
    completedLessons: 0,
    progress: 0,
    icon: "next",
  },
];

export const panelOrders: PanelOrder[] = [
  {
    id: "CN-1042",
    date: "۱۴۰۵/۰۸/۲۶",
    courses: ["آموزش جامع React.js"],
    amount: 1490000,
    status: "success",
  },
  {
    id: "CN-1038",
    date: "۱۴۰۵/۰۸/۱۸",
    courses: ["آموزش Node.js و Express", "آموزش HTML و CSS"],
    amount: 1980000,
    status: "success",
  },
  {
    id: "CN-1021",
    date: "۱۴۰۵/۰۸/۱۰",
    courses: ["آموزش Next.js"],
    amount: 1290000,
    status: "pending",
  },
];

export const formatNumber = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);
