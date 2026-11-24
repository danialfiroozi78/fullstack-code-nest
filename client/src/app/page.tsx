import React from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/home/SectionHeading";
import LatestCourses from "@/components/home/LatestCourses";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import CTASection from "@/components/home/CTASection";
import StepsSection from "@/components/home/StepsSection";
import FeaturesSection from "@/components/home/FeaturesSection";

export default function HomePage() {
  return (
    <main className="w-full min-w-0 bg-body">
      <HeroSection />

      <CategoriesSection />

      <section className="border-y border-border bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="مهارت‌های جدید"
              title="جدیدترین دوره‌های آموزشی"
              description="به‌روز یاد بگیر و مهارت‌هات رو یک قدم جلوتر ببر."
              icon={GraduationCap}
            />

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              مشاهده همه دوره‌ها
              <ArrowLeft size={17} />
            </Link>
          </div>

          <div className="mt-8">
            <LatestCourses />
          </div>
        </div>
      </section>

      <FeaturesSection />

      <StepsSection />

      <CTASection />
    </main>
  );
}
