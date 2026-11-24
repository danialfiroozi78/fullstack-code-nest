"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const inputClass =
  "h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold"
          >
            نام و نام خانوادگی
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="نام کامل شما"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-semibold"
          >
            ایمیل
          </label>
          <input
            id="contact-email"
            type="email"
            dir="ltr"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="example@gmail.com"
            className={`${inputClass} text-left`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-sm font-semibold"
        >
          موضوع پیام
        </label>

        <select
          id="contact-subject"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className={inputClass}
        >
          <option value="">موضوع پیام را انتخاب کنید</option>
          <option value="course">مشاوره انتخاب دوره</option>
          <option value="technical">پشتیبانی فنی</option>
          <option value="payment">سوال درباره خرید</option>
          <option value="collaboration">همکاری با آکادمی</option>
          <option value="other">سایر موارد</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-semibold"
        >
          متن پیام
        </label>

        <textarea
          id="contact-message"
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="سوال یا درخواستت رو اینجا بنویس..."
          className="w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm leading-8 text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
      >
        <Send size={18} />
        ثبت آزمایشی پیام
      </button>

      {submitted && (
        <p
          role="status"
          className="rounded-xl border border-success/20 bg-emerald-50 p-4 text-sm text-success"
        >
          اطلاعات فرم به‌صورت آزمایشی ثبت شد. هنوز پیامی به سرور ارسال نشده است.
        </p>
      )}

      <p className="text-xs leading-6 text-text-muted">
        این فرم فعلاً نمایشی است و بعد از اتصال به بک‌اند، امکان ارسال واقعی
        پیام فعال می‌شود.
      </p>
    </form>
  );
}
