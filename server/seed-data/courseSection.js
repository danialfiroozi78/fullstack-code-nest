const courseSectionData = [
  {
    courseId: 1,
    title: "آشنایی با وب و مسیر یادگیری",
    position: 1,
  },
  {
    courseId: 1,
    title: "آموزش HTML و ساختار صفحات",
    position: 2,
  },
  {
    courseId: 1,
    title: "طراحی صفحات با CSS",
    position: 3,
  },
  {
    courseId: 1,
    title: "برنامه‌نویسی JavaScript",
    position: 4,
  },
  {
    courseId: 1,
    title: "پروژه نهایی و انتشار وب‌سایت",
    position: 5,
  },
  {
    courseId: 2,
    title: "مبانی HTML و ساختار سند",
    position: 1,
  },
  {
    courseId: 2,
    title: "فرم‌ها و عناصر معنایی HTML",
    position: 2,
  },
  {
    courseId: 2,
    title: "مبانی CSS و انتخابگرها",
    position: 3,
  },
  {
    courseId: 2,
    title: "طراحی واکنش‌گرا با Flexbox و Grid",
    position: 4,
  },
  {
    courseId: 2,
    title: "پروژه ساخت وب‌سایت چندصفحه‌ای",
    position: 5,
  },
  {
    courseId: 3,
    title: "شروع کار با React و TypeScript",
    position: 1,
  },
  {
    courseId: 3,
    title: "کامپوننت‌ها و Props با تایپ‌گذاری",
    position: 2,
  },
  {
    courseId: 3,
    title: "Hooks و مدیریت وضعیت",
    position: 3,
  },
  {
    courseId: 3,
    title: "ارتباط با API و مدیریت فرم‌ها",
    position: 4,
  },
  {
    courseId: 3,
    title: "پروژه عملی و بهینه‌سازی",
    position: 5,
  },
  {
    courseId: 4,
    title: "آشنایی با Next.js و App Router",
    position: 1,
  },
  {
    courseId: 4,
    title: "مسیریابی و Layoutها",
    position: 2,
  },
  {
    courseId: 4,
    title: "رندر سمت سرور و دریافت داده",
    position: 3,
  },
  {
    courseId: 4,
    title: "احراز هویت و مدیریت کش",
    position: 4,
  },
  {
    courseId: 4,
    title: "ساخت و استقرار پروژه نهایی",
    position: 5,
  },
  {
    courseId: 5,
    title: "مبانی Node.js و Express",
    position: 1,
  },
  {
    courseId: 5,
    title: "طراحی REST API و اعتبارسنجی",
    position: 2,
  },
  {
    courseId: 5,
    title: "اتصال به دیتابیس و مدل‌سازی",
    position: 3,
  },
  {
    courseId: 5,
    title: "احراز هویت و امنیت API",
    position: 4,
  },
  {
    courseId: 5,
    title: "تست و استقرار بک‌اند",
    position: 5,
  },
  {
    courseId: 6,
    title: "معماری ماژولار NestJS",
    position: 1,
  },
  {
    courseId: 6,
    title: "ماژول‌ها و Dependency Injection",
    position: 2,
  },
  {
    courseId: 6,
    title: "DTO و اعتبارسنجی ورودی",
    position: 3,
  },
  {
    courseId: 6,
    title: "کار با دیتابیس و روابط",
    position: 4,
  },
  {
    courseId: 6,
    title: "احراز هویت و تست پروژه",
    position: 5,
  },
  {
    courseId: 7,
    title: "مفاهیم Docker و کانتینرها",
    position: 1,
  },
  {
    courseId: 7,
    title: "ساخت Image و Dockerfile",
    position: 2,
  },
  {
    courseId: 7,
    title: "مدیریت Volume و Network",
    position: 3,
  },
  {
    courseId: 7,
    title: "کار با Docker Compose",
    position: 4,
  },
  {
    courseId: 7,
    title: "استقرار پروژه واقعی",
    position: 5,
  },
  {
    courseId: 8,
    title: "مبانی Linux و خط فرمان",
    position: 1,
  },
  {
    courseId: 8,
    title: "مدیریت کاربران و سرویس‌ها",
    position: 2,
  },
  {
    courseId: 8,
    title: "پیکربندی Nginx و Reverse Proxy",
    position: 3,
  },
  {
    courseId: 8,
    title: "ساخت خط لوله CI/CD",
    position: 4,
  },
  {
    courseId: 8,
    title: "مانیتورینگ و استقرار امن",
    position: 5,
  },
  {
    courseId: 9,
    title: "آشنایی با Flutter و Dart",
    position: 1,
  },
  {
    courseId: 9,
    title: "ویجت‌ها و طراحی رابط کاربری",
    position: 2,
  },
  {
    courseId: 9,
    title: "مسیریابی و مدیریت State",
    position: 3,
  },
  {
    courseId: 9,
    title: "ارتباط با API و ذخیره‌سازی",
    position: 4,
  },
  {
    courseId: 9,
    title: "ساخت و انتشار اپلیکیشن",
    position: 5,
  },
  {
    courseId: 10,
    title: "راه‌اندازی React Native",
    position: 1,
  },
  {
    courseId: 10,
    title: "کامپوننت‌های اصلی و استایل‌دهی",
    position: 2,
  },
  {
    courseId: 10,
    title: "Navigation و مدیریت State",
    position: 3,
  },
  {
    courseId: 10,
    title: "اتصال به API و قابلیت‌های دستگاه",
    position: 4,
  },
  {
    courseId: 10,
    title: "ساخت نسخه نهایی اپلیکیشن",
    position: 5,
  },
  {
    courseId: 11,
    title: "مبانی Python برای هوش مصنوعی",
    position: 1,
  },
  {
    courseId: 11,
    title: "کار با داده و کتابخانه‌های علمی",
    position: 2,
  },
  {
    courseId: 11,
    title: "مفاهیم یادگیری ماشین",
    position: 3,
  },
  {
    courseId: 11,
    title: "آموزش و ارزیابی مدل",
    position: 4,
  },
  {
    courseId: 11,
    title: "پروژه عملی هوش مصنوعی",
    position: 5,
  },
  {
    courseId: 12,
    title: "مبانی شبکه‌های عصبی",
    position: 1,
  },
  {
    courseId: 12,
    title: "آماده‌سازی داده و ویژگی‌ها",
    position: 2,
  },
  {
    courseId: 12,
    title: "کار با PyTorch و TensorFlow",
    position: 3,
  },
  {
    courseId: 12,
    title: "ساخت مدل یادگیری عمیق",
    position: 4,
  },
  {
    courseId: 12,
    title: "بهینه‌سازی و پروژه نهایی",
    position: 5,
  },
  {
    courseId: 13,
    title: "آموزش NumPy و Pandas",
    position: 1,
  },
  {
    courseId: 13,
    title: "پاک‌سازی و آماده‌سازی داده",
    position: 2,
  },
  {
    courseId: 13,
    title: "تحلیل اکتشافی داده‌ها",
    position: 3,
  },
  {
    courseId: 13,
    title: "مصورسازی داده‌ها با Python",
    position: 4,
  },
  {
    courseId: 13,
    title: "پروژه تحلیل داده واقعی",
    position: 5,
  },
  {
    courseId: 14,
    title: "مبانی SQL برای تحلیل داده",
    position: 1,
  },
  {
    courseId: 14,
    title: "فیلتر و مرتب‌سازی اطلاعات",
    position: 2,
  },
  {
    courseId: 14,
    title: "JOIN و ارتباط جداول",
    position: 3,
  },
  {
    courseId: 14,
    title: "تجمیع داده و توابع تحلیلی",
    position: 4,
  },
  {
    courseId: 14,
    title: "پروژه گزارش‌گیری با SQL",
    position: 5,
  },
  {
    courseId: 15,
    title: "مبانی امنیت وب و تهدیدها",
    position: 1,
  },
  {
    courseId: 15,
    title: "آشنایی با OWASP Top 10",
    position: 2,
  },
  {
    courseId: 15,
    title: "شناسایی آسیب‌پذیری‌های رایج",
    position: 3,
  },
  {
    courseId: 15,
    title: "امن‌سازی احراز هویت و API",
    position: 4,
  },
  {
    courseId: 15,
    title: "ارزیابی امنیت پروژه نمونه",
    position: 5,
  },
  {
    courseId: 16,
    title: "آشنایی با Unity و C#",
    position: 1,
  },
  {
    courseId: 16,
    title: "ساخت صحنه و مدیریت GameObject",
    position: 2,
  },
  {
    courseId: 16,
    title: "فیزیک دوبعدی و کنترل بازیکن",
    position: 3,
  },
  {
    courseId: 16,
    title: "رابط کاربری و سیستم امتیاز",
    position: 4,
  },
  {
    courseId: 16,
    title: "ساخت و خروجی گرفتن بازی",
    position: 5,
  },
  {
    courseId: 17,
    title: "مبانی طراحی رابط کاربری",
    position: 1,
  },
  {
    courseId: 17,
    title: "آشنایی با Figma و ابزارها",
    position: 2,
  },
  {
    courseId: 17,
    title: "کامپوننت‌ها و Auto Layout",
    position: 3,
  },
  {
    courseId: 17,
    title: "طراحی سیستم و نمونه تعاملی",
    position: 4,
  },
  {
    courseId: 17,
    title: "پروژه طراحی محصول دیجیتال",
    position: 5,
  },
  {
    courseId: 18,
    title: "اصول تحقیق تجربه کاربری",
    position: 1,
  },
  {
    courseId: 18,
    title: "مصاحبه و شناخت کاربران",
    position: 2,
  },
  {
    courseId: 18,
    title: "پرسونا و نقشه سفر کاربر",
    position: 3,
  },
  {
    courseId: 18,
    title: "طراحی Wireframe و Prototype",
    position: 4,
  },
  {
    courseId: 18,
    title: "تست کاربردپذیری و ارائه نتایج",
    position: 5,
  },
  {
    courseId: 19,
    title: "مبانی بلاکچین و قرارداد هوشمند",
    position: 1,
  },
  {
    courseId: 19,
    title: "شروع برنامه‌نویسی Solidity",
    position: 2,
  },
  {
    courseId: 19,
    title: "انواع داده و ساختار قرارداد",
    position: 3,
  },
  {
    courseId: 19,
    title: "تست و امنیت قرارداد هوشمند",
    position: 4,
  },
  {
    courseId: 19,
    title: "استقرار قرارداد و پروژه نهایی",
    position: 5,
  },
  {
    courseId: 20,
    title: "مبانی PostgreSQL و طراحی جداول",
    position: 1,
  },
  {
    courseId: 20,
    title: "روابط و کوئری‌های پیشرفته",
    position: 2,
  },
  {
    courseId: 20,
    title: "ایندکس‌گذاری و تحلیل Query",
    position: 3,
  },
  {
    courseId: 20,
    title: "تراکنش‌ها و هم‌زمانی",
    position: 4,
  },
  {
    courseId: 20,
    title: "بهینه‌سازی عملکرد دیتابیس",
    position: 5,
  },
  {
    courseId: 21,
    title: "آشنایی با MySQL و Sequelize",
    position: 1,
  },
  {
    courseId: 21,
    title: "تعریف مدل‌ها و روابط",
    position: 2,
  },
  {
    courseId: 21,
    title: "Migration و Seeder",
    position: 3,
  },
  {
    courseId: 21,
    title: "کوئری‌های پیشرفته و Transaction",
    position: 4,
  },
  {
    courseId: 21,
    title: "ساخت API دیتابیس‌محور",
    position: 5,
  },
  {
    courseId: 22,
    title: "مبانی Git و کنترل نسخه",
    position: 1,
  },
  {
    courseId: 22,
    title: "Branch و مدیریت تغییرات",
    position: 2,
  },
  {
    courseId: 22,
    title: "Merge و حل Conflict",
    position: 3,
  },
  {
    courseId: 22,
    title: "کار تیمی با GitHub و Pull Request",
    position: 4,
  },
  {
    courseId: 22,
    title: "Git Workflow و اتوماسیون",
    position: 5,
  },
  {
    courseId: 23,
    title: "آشنایی با VS Code و تنظیمات",
    position: 1,
  },
  {
    courseId: 23,
    title: "مدیریت افزونه‌ها و محیط کار",
    position: 2,
  },
  {
    courseId: 23,
    title: "دیباگ JavaScript و TypeScript",
    position: 3,
  },
  {
    courseId: 23,
    title: "کار با Git و ترمینال داخلی",
    position: 4,
  },
  {
    courseId: 23,
    title: "افزایش بهره‌وری و تنظیمات پیشرفته",
    position: 5,
  },
];

module.exports = {
  courseSectionData
}