export type CartItem = {
  id: number;
  title: string;
  slug: string;
  category: string;
  instructor: string;
  price: number;
  originalPrice: number;
  icon: "react" | "node" | "next";
};

export const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: "آموزش جامع React.js از صفر تا پیشرفته",
    slug: "react-js",
    category: "فرانت‌اند",
    instructor: "مدرس دوره",
    price: 1490000,
    originalPrice: 1890000,
    icon: "react",
  },
  {
    id: 2,
    title: "آموزش پروژه‌محور Node.js و Express",
    slug: "nodejs-express",
    category: "بک‌اند",
    instructor: "مدرس دوره",
    price: 1190000,
    originalPrice: 1590000,
    icon: "node",
  },
];
