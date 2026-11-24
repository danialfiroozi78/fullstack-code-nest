import Link from "next/link";
import { SearchX, ArrowLeft } from "lucide-react";
import { Button } from "@/components/common/Button";

export default function CoursesEmptyState() {
  return (
    <div className="col-span-full relative flex min-h-95 w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-rose-100 bg-white px-6 py-14 text-center">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-rose-50 blur-3xl" />

      {/* Icon */}
      <div className="relative mb-6 flex size-24 items-center justify-center rounded-3xl bg-rose-50 ring-8 ring-rose-50/50">
        <SearchX size={42} strokeWidth={1.5} className="text-rose-600" />
      </div>

      <h3 className="relative mb-3 text-xl font-bold text-slate-900">
        دوره‌ای پیدا نشد!
      </h3>

      <p className="relative mb-7 max-w-md text-sm leading-7 text-slate-500">
        متأسفانه دوره‌ای مطابق با جستجوی شما پیدا نکردیم. عبارت دیگری امتحان
        کنید یا فیلترهای انتخاب‌شده را تغییر دهید.
      </p>

      <Link href="/courses" scroll={false}>
        <Button>
          مشاهده همه دوره‌ها
          <ArrowLeft size={17} />
        </Button>
      </Link>
    </div>
  );
}
