"use client";

import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <section>
      <div className="mb-8">
        <span className="text-xs font-bold text-primary">
          مدیریت حساب کاربری
        </span>

        <h1 className="mt-2 flex items-center gap-3 text-2xl font-extrabold">
          <Settings size={28} className="text-primary" />
          تنظیمات حساب
        </h1>

        <p className="mt-1 text-sm leading-8 text-text-secondary">
          اطلاعات شخصی و مشخصات حساب کاربریت رو مدیریت کن و همیشه بروز نگه دار.
        </p>
      </div>
    </section>
  );
}
