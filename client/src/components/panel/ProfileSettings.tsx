// "use client";
//
// import {
//   Camera,
//   LockKeyhole,
//   Mail,
//   Phone,
//   ShieldCheck,
//   UserRound,
// } from "lucide-react";
//
// const inputClassName =
//   "h-12 w-full rounded-xl border border-border bg-zinc-50 px-4 text-sm text-text-primary outline-none";
//
// export default function SettingsPage() {
//   return (
//     <div className="space-y-7">
//       <div>
//         <span className="text-xs font-bold text-primary">
//           مدیریت حساب کاربری
//         </span>
//
//         <h1 className="mt-2 flex items-center gap-3 text-2xl font-extrabold">
//           <UserRound size={28} className="text-primary" />
//           تنظیمات حساب
//         </h1>
//
//         <p className="mt-4 text-sm leading-8 text-text-secondary">
//           اطلاعات شخصی و مشخصات حساب کاربری خودت رو در این بخش مشاهده کن.
//         </p>
//       </div>
//
//       {/* Profile Card */}
//       <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
//         <div className="flex flex-wrap items-center gap-5 border-b border-border pb-7">
//           <div className="relative flex size-24 shrink-0 items-center justify-center rounded-3xl bg-box text-primary">
//             <UserRound size={45} strokeWidth={1.5} />
//
//             <span className="absolute -bottom-2 -left-2 flex size-9 items-center justify-center rounded-xl border-4 border-white bg-primary text-white">
//               <Camera size={16} />
//             </span>
//           </div>
//
//           <div>
//             <h2 className="text-lg font-extrabold">
//               {panelUser.firstName} {panelUser.lastName}
//             </h2>
//
//             <p className="mt-2 text-sm text-text-secondary">دانشجوی CodeNest</p>
//
//             <p className="mt-2 text-xs text-text-muted">
//               عضو از {panelUser.joinedAt}
//             </p>
//           </div>
//         </div>
//
//         <div className="mt-8">
//           <h3 className="mb-6 text-base font-extrabold">اطلاعات شخصی</h3>
//
//           <div className="grid gap-6 sm:grid-cols-2">
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="mb-2 block text-sm font-semibold"
//               >
//                 نام
//               </label>
//
//               <input
//                 id="firstName"
//                 readOnly
//                 value={panelUser.firstName}
//                 className={inputClassName}
//               />
//             </div>
//
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="mb-2 block text-sm font-semibold"
//               >
//                 نام خانوادگی
//               </label>
//
//               <input
//                 id="lastName"
//                 readOnly
//                 value={panelUser.lastName}
//                 className={inputClassName}
//               />
//             </div>
//
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="mb-2 flex items-center gap-2 text-sm font-semibold"
//               >
//                 <Phone size={16} className="text-primary" />
//                 شماره موبایل
//               </label>
//
//               <input
//                 id="phone"
//                 dir="ltr"
//                 readOnly
//                 value={panelUser.phone}
//                 className={`${inputClassName} text-left`}
//               />
//             </div>
//
//             <div>
//               <label
//                 htmlFor="email"
//                 className="mb-2 flex items-center gap-2 text-sm font-semibold"
//               >
//                 <Mail size={16} className="text-primary" />
//                 ایمیل
//               </label>
//
//               <input
//                 id="email"
//                 dir="ltr"
//                 readOnly
//                 value={panelUser.email}
//                 className={`${inputClassName} text-left`}
//               />
//             </div>
//           </div>
//
//           <div className="mt-6">
//             <label htmlFor="bio" className="mb-2 block text-sm font-semibold">
//               درباره من
//             </label>
//
//             <textarea
//               id="bio"
//               readOnly
//               rows={4}
//               value={panelUser.bio}
//               className="w-full resize-none rounded-xl border border-border bg-zinc-50 p-4 text-sm leading-8 text-text-primary outline-none"
//             />
//           </div>
//
//           <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-box p-4">
//             <p className="text-xs leading-7 text-text-secondary">
//               ویرایش اطلاعات پس از اتصال به API فعال می‌شود.
//             </p>
//
//             <button
//               type="button"
//               disabled
//               className="inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-xl bg-primary/60 px-5 text-sm font-bold text-white"
//             >
//               ذخیره تغییرات
//             </button>
//           </div>
//         </div>
//       </section>
//
//       {/* Security */}
//       <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
//         <div className="mb-6 flex items-center gap-3">
//           <div className="flex size-11 items-center justify-center rounded-xl bg-box text-primary">
//             <ShieldCheck size={23} />
//           </div>
//
//           <div>
//             <h2 className="font-extrabold">امنیت حساب کاربری</h2>
//
//             <p className="mt-2 text-xs text-text-secondary">
//               تنظیمات امنیتی و اطلاعات ورود
//             </p>
//           </div>
//         </div>
//
//         <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border p-5">
//           <div className="flex items-center gap-3">
//             <LockKeyhole size={20} className="text-text-muted" />
//
//             <div>
//               <p className="text-sm font-bold">ورود با شماره موبایل</p>
//
//               <p className="mt-2 text-xs text-text-muted">
//                 احراز هویت از طریق کد تأیید یک‌بارمصرف
//               </p>
//             </div>
//           </div>
//
//           <span className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-success">
//             روش ورود
//           </span>
//         </div>
//       </section>
//     </div>
//   );
// }
