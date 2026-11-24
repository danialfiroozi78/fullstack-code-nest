import {
  BrainCircuit,
  ChevronLeft,
  Cloud,
  Code2,
  Database,
  Layers3,
  Monitor,
  Server,
  Smartphone,
} from "lucide-react";
import SectionHeading from "@/components/home/SectionHeading";
import Link from "next/link";
import { getCategories } from "@/services/category.service";

export default async function CategoriesSection() {
  const categories = await getCategories();

  const categoriesStyle = [
    {
      description: "طراحی و توسعه رابط کاربری",
      icon: Monitor,
      color: "text-sky-600",
      background: "bg-sky-50",
    },
    {
      description: "توسعه سرور و API",
      icon: Server,
      color: "text-emerald-600",
      background: "bg-emerald-50",
    },
    {
      description: "یادگیری ماشین و هوش مصنوعی",
      icon: BrainCircuit,
      color: "text-violet-600",
      background: "bg-violet-50",
    },
    {
      description: "مدیریت و ذخیره‌سازی داده‌ها",
      icon: Database,
      color: "text-orange-600",
      background: "bg-orange-50",
    },
    {
      description: "استقرار و مدیریت زیرساخت",
      icon: Cloud,
      color: "text-indigo-600",
      background: "bg-indigo-50",
    },
    {
      description: "ساخت اپلیکیشن‌های موبایل",
      icon: Smartphone,
      color: "text-rose-600",
      background: "bg-rose-50",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
      <SectionHeading
        eyebrow="دنیای برنامه‌نویسی"
        title="چی دوست داری یاد بگیری؟"
        description="حوزه مورد علاقه‌ات رو انتخاب کن و یادگیری رو شروع کن."
        icon={Layers3}
      />

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {categories?.data?.slice(0, 6)?.map((category, index) => {
          const style = categoriesStyle[index];
          const Icon = style?.icon ?? Code2;

          return (
            <Link
              key={category.id}
              href={`/courses?categories=${category.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div
                className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${style?.background ?? "bg-box"} ${style?.color ?? "text-primary"}`}
              >
                <Icon size={27} />
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-extrabold text-text-primary group-hover:text-primary">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-text-muted">
                    {style?.description}
                  </p>
                </div>

                <ChevronLeft
                  size={18}
                  className="shrink-0 text-text-muted group-hover:text-primary"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
