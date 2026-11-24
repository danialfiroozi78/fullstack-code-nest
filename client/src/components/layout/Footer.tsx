import Link from "next/link";
import { Code2, Send, Mail, ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import icon from "lucide-react/icons/*";

const footerLinks = [
  {
    title: "دسترسی سریع",
    items: [
      { title: "صفحه اصلی", href: "/" },
      { title: "دوره‌های آموزشی", href: "/courses" },
      { title: "مسیرهای یادگیری", href: "/roadmaps" },
      { title: "مقالات آموزشی", href: "http://blogify.danialfiroozi.ir/" },
    ],
  },
  {
    title: "آکادمی CodeNest",
    items: [
      { title: "درباره ما", href: "/about-us" },
      { title: "مدرسین", href: "/instructors" },
      { title: "تماس با ما", href: "/contact-us" },
      { title: "همکاری با ما", href: "/collaboration" },
    ],
  },
  {
    title: "راهنما و پشتیبانی",
    items: [
      { title: "سوالات متداول", href: "/faq" },
      { title: "راهنمای خرید دوره", href: "/help" },
      { title: "قوانین و مقررات", href: "/terms" },
      { title: "حریم خصوصی", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-footer text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 lg:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-white">
                <Code2 size={25} />
              </span>

              <div>
                <strong dir="ltr" className="block text-xl font-extrabold">
                  CodeNest
                </strong>
                <span className="text-xs text-slate-400">
                  آکادمی آموزش برنامه‌نویسی
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-8 text-slate-300">
              در CodeNest تلاش می‌کنیم یادگیری برنامه‌نویسی رو ساده‌تر،
              کاربردی‌تر و لذت‌بخش‌تر کنیم. از اولین خط کد تا ورود به بازار کار
              همراهت هستیم.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { src: "/images/telegram.svg", label: "تلگرام" },
                { src: "/images/linkedin.svg", label: "لینکدین" },
                { src: "/images/instagram.svg", label: "اینستاگرام" },
              ].map(({ src, label }) => (
                <span
                  key={label}
                  aria-label={label}
                  title={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300"
                >
                  <Image
                    src={src}
                    width={20}
                    height={20}
                    alt={label}
                    unoptimized
                  />
                </span>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 text-base font-bold">{group.title}</h3>

              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-sky-300"
                    >
                      <ArrowUpLeft size={14} className="text-slate-500" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 font-bold">سوالی درباره دوره‌ها داری؟</h3>
            <p className="text-sm text-slate-300">
              برای انتخاب مسیر آموزشی مناسب، با ما در ارتباط باش.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            <Mail size={18} />
            ارتباط با پشتیبانی
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-slate-400 md:flex-row">
          <p>© 2025 CodeNest. تمامی حقوق محفوظ است.</p>

          <p>ساخته شده با عشق به برنامه‌نویسی</p>
        </div>
      </div>
    </footer>
  );
}
