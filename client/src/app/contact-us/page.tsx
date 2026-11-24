import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  HelpCircle,
  Mail,
  MessageCircle,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/contact/CatactForm";

const channels = [
  {
    icon: Mail,
    title: "ایمیل پشتیبانی",
    description: "برای سوالات عمومی و پیشنهادها از طریق فرم تماس پیام بفرست.",
    label: "ارسال پیام",
    href: "#contact-form",
  },
  {
    icon: MessagesSquare,
    title: "راهنمایی آموزشی",
    description:
      "برای انتخاب دوره و پیدا کردن مسیر مناسب یادگیری راهنمایی بگیر.",
    label: "درخواست راهنمایی",
    href: "#contact-form",
  },
  {
    icon: HelpCircle,
    title: "سوالات متداول",
    description: "شاید پاسخ سوالت رو بتونی در بخش سوالات متداول پیدا کنی.",
    label: "مشاهده سوالات",
    href: "#faq",
  },
];

const faqs = [
  {
    question: "چطور می‌تونم دوره مناسب خودم رو انتخاب کنم؟",
    answer:
      "می‌تونی از بخش مسیرهای یادگیری شروع کنی یا از طریق فرم تماس، درباره انتخاب دوره سوال بپرسی.",
  },
  {
    question: "آیا دوره‌ها برای افراد مبتدی مناسب هستن؟",
    answer:
      "سطح هر دوره در صفحه معرفی اون مشخص می‌شه. برای شروع بهتره دوره‌های مقدماتی رو بررسی کنی.",
  },
  {
    question: "چطور می‌تونم با پشتیبانی ارتباط بگیرم؟",
    answer:
      "از طریق فرم تماس همین صفحه می‌تونی درخواستت رو ثبت کنی. امکان ارسال واقعی پیام پس از اتصال فرم به بک‌اند فعال می‌شه.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-white py-20 lg:py-28">
        <div className="absolute top-0 left-0 size-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-box px-4 py-2 text-xs font-bold text-primary">
            <Sparkles size={15} />
            ارتباط با CodeNest
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-text-primary sm:text-5xl">
            سوالی داری؟
            <span className="text-primary"> ما اینجاییم!</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-9 text-text-secondary sm:text-base">
            درباره دوره‌ها، مسیر یادگیری یا هر موضوع دیگه‌ای سوال داری؟ پیامت رو
            برامون بنویس تا بتونیم بهتر راهنماییت کنیم.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map(({ icon: Icon, title, description, label, href }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 flex size-13 items-center justify-center rounded-2xl bg-box text-primary">
                <Icon size={25} />
              </div>

              <h2 className="text-lg font-bold">{title}</h2>

              <p className="mt-3 min-h-20 text-sm leading-8 text-text-secondary">
                {description}
              </p>

              <Link
                href={href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                {label}
                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="scroll-mt-24 py-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-border bg-white lg:grid-cols-[1fr_0.85fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <span className="text-sm font-bold text-primary">
              فرم ارتباط با ما
            </span>

            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
              پیامت رو برامون بنویس
            </h2>

            <p className="mt-4 text-sm leading-8 text-text-secondary">
              فرم زیر رو تکمیل کن تا درخواستت آماده ارسال بشه.
            </p>

            <div className="mt-9">
              <ContactForm />
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden bg-footer p-8 text-white sm:p-12">
            <div className="absolute -top-32 -left-32 size-80 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-primary">
                <MessageCircle size={27} />
              </div>

              <h3 className="text-2xl font-extrabold">
                ارتباط خوب، شروع یک مسیر بهتره.
              </h3>

              <p className="mt-5 text-sm leading-9 text-zinc-300">
                انتخاب مسیر برنامه‌نویسی گاهی سخت می‌شه. اگر بین دوره‌ها مرددی
                یا سوالی درباره یادگیری داری، می‌تونی از همین صفحه با ما ارتباط
                بگیری.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-rose-300">
                    <Mail size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">ارتباط مستقیم</p>
                    <p className="mt-1 text-xs text-zinc-400">
                      از طریق فرم تماس
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-rose-300">
                    <Clock3 size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">ثبت درخواست</p>
                    <p className="mt-1 text-xs text-zinc-400">
                      امکان ارسال پس از اتصال API
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              dir="ltr"
              className="relative text-left mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-xs leading-7"
            >
              <span className="text-rose-300">const</span> support = {"{"}
              <br />
              {"  "}question:{" "}
              <span className="text-emerald-300">
                &quot;How can we help?&quot;
              </span>
              <br />
              {"  "}ready: <span className="text-amber-300">true</span>
              <br />
              {"};"}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-24">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold text-primary">سوالات متداول</span>

          <h2 className="mt-4 text-3xl font-extrabold">
            شاید سوال تو هم اینجا باشه!
          </h2>

          <p className="mt-4 text-sm text-text-secondary">
            پاسخ چند سوال رایج درباره CodeNest.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-white p-6 open:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-box text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 border-t border-border pt-5 text-sm leading-8 text-text-secondary">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-box px-7 py-10 text-center md:flex-row md:text-right">
          <div>
            <h2 className="text-xl font-extrabold">
              هنوز مسیر یادگیریت رو انتخاب نکردی؟
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              مسیرهای آموزشی CodeNest رو بررسی کن.
            </p>
          </div>

          <Link
            href="/roadmaps"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-primary-hover"
          >
            مشاهده مسیرهای یادگیری
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
