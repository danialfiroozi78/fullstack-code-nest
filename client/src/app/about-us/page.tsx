import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Code2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import AboutUsHeroSection from "@/components/aboutUs/AboutUsHeroSection";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "با CodeNest و رویکرد آموزشی پروژه‌محور ما آشنا شوید.",
};

const values = [
  {
    icon: Code2,
    title: "یادگیری پروژه‌محور",
    description:
      "مفاهیم رو فقط حفظ نمی‌کنی؛ با ساخت پروژه‌های واقعی یاد می‌گیری چطور ازشون استفاده کنی.",
  },
  {
    icon: Compass,
    title: "مسیر یادگیری مشخص",
    description:
      "به‌جای سردرگمی بین تکنولوژی‌ها، قدم‌به‌قدم در یک مسیر هدفمند پیش می‌ری.",
  },
  {
    icon: Lightbulb,
    title: "آموزش ساده و کاربردی",
    description:
      "مفاهیم پیچیده رو با مثال‌های قابل‌فهم و تمرین‌های عملی یاد می‌گیری.",
  },
  {
    icon: HeartHandshake,
    title: "همراهی در مسیر رشد",
    description:
      "هدف ما فقط ارائه دوره نیست؛ می‌خوایم تجربه یادگیری بهتر و مؤثرتری داشته باشی.",
  },
];

const journey = [
  {
    number: "01",
    title: "مسیرت رو انتخاب کن",
    description: "با توجه به علاقه و هدفت، حوزه مناسب برنامه‌نویسی رو پیدا کن.",
    icon: Target,
  },
  {
    number: "02",
    title: "اصولی یاد بگیر",
    description:
      "از مفاهیم پایه شروع کن و به‌مرور مهارت‌های تخصصی رو توسعه بده.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "پروژه واقعی بساز",
    description:
      "دانسته‌هات رو در پروژه‌های عملی به مهارت قابل ارائه تبدیل کن.",
    icon: Code2,
  },
  {
    number: "04",
    title: "برای آینده آماده شو",
    description: "نمونه‌کار بساز و برای فرصت‌های حرفه‌ای آماده‌تر شو.",
    icon: Rocket,
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutUsHeroSection />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 lg:grid-cols-2 lg:px-6">
        <div>
          <span className="text-sm font-bold text-primary">داستان ما</span>

          <h2 className="mt-4 text-3xl leading-relaxed font-extrabold text-text-primary">
            یادگیری برنامه‌نویسی
            <br />
            نباید پیچیده و خسته‌کننده باشه.
          </h2>

          <p className="mt-6 text-sm leading-9 text-text-secondary">
            دنیای برنامه‌نویسی پر از تکنولوژی‌ها، فریم‌ورک‌ها و مسیرهای مختلفه.
            وقتی تازه شروع می‌کنی، ممکنه ندونی از کجا باید یادگیری رو آغاز کنی.
          </p>

          <p className="mt-4 text-sm leading-9 text-text-secondary">
            ما در CodeNest تلاش می‌کنیم آموزش‌ها رو با ساختاری منظم، مثال‌های
            واقعی و تمرین‌های کاربردی ارائه کنیم تا بتونی مفاهیم رو عمیق‌تر درک
            کنی و به‌مرور مستقل‌تر پروژه بسازی.
          </p>

          <div className="mt-7 space-y-4">
            {[
              "آموزش از پایه تا مباحث پیشرفته",
              "تمرکز بر مهارت‌های کاربردی",
              "یادگیری با مثال و پروژه واقعی",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-text-primary"
              >
                <CheckCircle2 size={20} className="shrink-0 text-success" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[36px] bg-box" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-xl shadow-zinc-900/5">
            <div className="mb-7 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Code2 size={26} />
                </div>
                <div>
                  <h3 className="font-bold">CodeNest Academy</h3>
                  <p className="text-xs text-text-muted">
                    Your coding journey starts here
                  </p>
                </div>
              </div>
              <span className="size-3 rounded-full bg-success" />
            </div>

            <div
              dir="ltr"
              className="rounded-2xl text-left bg-footer p-5 font-mono text-xs leading-8 text-zinc-200 sm:text-sm"
            >
              <p>
                <span className="text-rose-400">const</span> developer = {"{"}
              </p>
              <p className="pl-5">
                mindset:{" "}
                <span className="text-emerald-400">
                  &quot;keep learning&quot;
                </span>
                ,
              </p>
              <p className="pl-5">
                practice: <span className="text-amber-300">true</span>,
              </p>
              <p className="pl-5">
                future:{" "}
                <span className="text-emerald-400">&quot;limitless&quot;</span>
              </p>
              <p>{"};"}</p>
              <p className="mt-3 text-zinc-500">
                {"// Build something amazing."}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-box p-4">
                <GraduationCap className="mb-3 text-primary" size={23} />
                <p className="text-sm font-bold">یادگیری هدفمند</p>
                <p className="mt-1 text-xs text-text-secondary">قدم‌به‌قدم</p>
              </div>
              <div className="rounded-xl bg-zinc-50 p-4">
                <Users className="mb-3 text-primary" size={23} />
                <p className="text-sm font-bold">رشد مهارت‌ها</p>
                <p className="mt-1 text-xs text-text-secondary">
                  با تمرین مستمر
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold text-primary">ارزش‌های ما</span>
            <h2 className="mt-4 text-3xl font-extrabold">چرا CodeNest؟</h2>
            <p className="mt-4 text-sm leading-8 text-text-secondary">
              تلاش می‌کنیم تجربه‌ای بسازیم که در اون یادگیری برنامه‌نویسی هم
              جذاب باشه و هم نتیجه کاربردی داشته باشه.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-6 flex size-13 items-center justify-center rounded-2xl bg-box text-primary">
                  <Icon size={25} />
                </div>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-8 text-text-secondary">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-6">
        <div className="mb-12">
          <span className="text-sm font-bold text-primary">مسیر رشد</span>
          <h2 className="mt-4 text-3xl font-extrabold">از کجا شروع کنیم؟</h2>
          <p className="mt-4 text-sm text-text-secondary">
            یک مسیر ساده برای تبدیل یادگیری به مهارت.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {journey.map(({ number, title, description, icon: Icon }) => (
            <div
              key={number}
              className="relative rounded-2xl border border-border bg-white p-6"
            >
              <span className="absolute top-5 left-5 text-4xl font-black text-zinc-100">
                {number}
              </span>

              <div className="relative mb-6 flex size-12 items-center justify-center rounded-xl bg-box text-primary">
                <Icon size={23} />
              </div>

              <h3 className="relative font-bold">{title}</h3>
              <p className="relative mt-3 text-sm leading-8 text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-14 text-center text-white sm:px-12">
          <div className="absolute -top-24 -left-20 size-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-20 size-64 rounded-full bg-black/10 blur-2xl" />

          <div className="relative">
            <Rocket size={38} className="mx-auto mb-5" />

            <h2 className="text-2xl font-extrabold sm:text-3xl">
              آماده‌ای اولین قدم رو برداری؟
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-white/85">
              فرقی نمی‌کنه تازه شروع کرده باشی یا بخوای مهارت‌هات رو ارتقا بدی؛
              مسیر یادگیری تو از همین‌جا شروع می‌شه.
            </p>

            <Link
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-rose-50"
            >
              کشف دوره‌های آموزشی
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
