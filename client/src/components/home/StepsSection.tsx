import React from "react";
import { BookOpen, Rocket, Route } from "lucide-react";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "مسیرت رو انتخاب کن",
      description:
        "با توجه به علاقه و هدفت، مسیر یادگیری مناسب خودت رو پیدا کن.",
      icon: Route,
    },
    {
      number: "02",
      title: "یادگیری رو شروع کن",
      description:
        "مفاهیم برنامه‌نویسی رو قدم‌به‌قدم و همراه با تمرین یاد بگیر.",
      icon: BookOpen,
    },
    {
      number: "03",
      title: "پروژه واقعی بساز",
      description: "دانشت رو به تجربه تبدیل کن و نمونه‌کارهای حرفه‌ای بساز.",
      icon: Rocket,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
      <div className="text-center">
        <span className="text-xs font-bold text-primary">
          از همین امروز شروع کن
        </span>

        <h2 className="mt-4 text-2xl font-extrabold text-text-primary sm:text-3xl">
          سه قدم تا شروع مسیر حرفه‌ای
        </h2>

        <p className="mt-4 text-sm leading-8 text-text-muted">
          برای شروع لازم نیست همه‌چیز رو بدونی؛ فقط کافیه اولین قدم رو برداری.
        </p>
      </div>

      <div className="relative mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-12 hidden border-t-2 border-dashed border-primary/20 md:block" />

        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-2xl border border-border bg-white p-7 text-center"
          >
            <span className="absolute left-5 top-5 text-3xl font-extrabold text-zinc-100">
              {step.number}
            </span>

            <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
              <step.icon size={30} />
            </div>

            <h3 className="mt-6 text-base font-extrabold text-text-primary">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-8 text-text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
