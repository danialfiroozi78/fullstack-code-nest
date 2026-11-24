import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Code2,
  Lightbulb,
  Route,
} from "lucide-react";
import { getRoadmapBySlug } from "@/services/roadmap.service";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function RoadmapDetailPage({ params }: Props) {
  const { slug } = await params;
  const getRoadmapStep = await getRoadmapBySlug(slug);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer py-20 text-white">
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <Link
            href="/roadmaps"
            className="mb-9 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
          >
            <ArrowRight size={17} />
            بازگشت به مسیرهای یادگیری
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-rose-200">
              <Route size={16} />
              {getRoadmapStep?.data?.subtitle}
            </span>

            <h1 className="mt-6 text-3xl leading-relaxed font-extrabold sm:text-5xl">
              نقشه راه {getRoadmapStep?.data?.title}
            </h1>

            <p className="mt-6 text-sm leading-9 text-zinc-300 sm:text-base">
              {getRoadmapStep?.data?.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-200">
              <span className="flex items-center gap-2">
                <BookOpen size={18} className="text-rose-400" />
                {getRoadmapStep?.data?.stepsCount} مرحله
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={18} className="text-rose-400" />
                {getRoadmapStep?.data?.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="mb-14">
          <span className="text-sm font-bold text-primary">مراحل یادگیری</span>

          <h2 className="mt-3 text-3xl font-extrabold">قدم‌به‌قدم تا تخصص</h2>

          <p className="mt-4 text-sm leading-8 text-text-secondary">
            هر مرحله رو یاد بگیر، تمرین کن و پروژه پیشنهادی اون رو بساز.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-5 right-6 bottom-5 w-px bg-border sm:right-7" />

          <div className="space-y-8">
            {getRoadmapStep?.data?.steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-5 sm:gap-8">
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-extrabold text-white shadow-lg shadow-primary/20 sm:size-14">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <article className="min-w-0 flex-1 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/30 sm:p-8">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 size={16} />
                    مرحله {index + 1}
                  </div>

                  <h3 className="text-xl font-extrabold">{step.title}</h3>

                  <p className="mt-4 text-sm leading-8 text-text-secondary">
                    {step.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-bold">
                      موضوعاتی که یاد می‌گیری:
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {step.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-lg border border-border bg-zinc-50 px-3 py-2 text-xs font-medium text-text-secondary"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex items-start gap-3 rounded-xl bg-box p-4">
                    <Lightbulb
                      size={20}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <div>
                      <p className="text-xs font-bold text-primary">
                        پروژه پیشنهادی
                      </p>
                      <p className="mt-2 text-sm font-medium">{step.project}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-3xl bg-box p-8 text-center sm:p-12">
          <Code2 size={36} className="mx-auto text-primary" />

          <h2 className="mt-5 text-2xl font-extrabold">
            آماده‌ای یادگیری رو شروع کنی؟
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-text-secondary">
            حالا که مسیرت رو می‌شناسی، می‌تونی دوره‌های آموزشی مرتبط رو بررسی
            کنی.
          </p>

          <Link
            href="/courses"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-hover"
          >
            مشاهده دوره‌های آموزشی
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
