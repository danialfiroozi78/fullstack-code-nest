"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ChevronLeft,
  LayoutDashboard,
  LogOut,
  ReceiptText,
  Settings,
  UserRound,
} from "lucide-react";
import { panelUser } from "@/data/panel";
import useProfile from "@/hooks/useDashboard";

const menuItems = [
  {
    label: "داشبورد",
    href: "/panel",
    icon: LayoutDashboard,
  },
  {
    label: "دوره‌های من",
    href: "/panel/courses",
    icon: BookOpen,
  },
  {
    label: "سفارش‌های من",
    href: "/panel/orders",
    icon: ReceiptText,
  },
  {
    label: "تنظیمات حساب",
    href: "/panel/settings",
    icon: Settings,
  },
];

export default function PanelSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-fit rounded-2xl border border-border bg-white p-4 lg:sticky lg:top-28">
      <div className="hidden items-center gap-3 border-b border-border px-2 pb-6 lg:flex">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-box text-primary">
          <UserRound size={25} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-extrabold">
            {/*{profileData?.data?.firstName} {profileData?.data?.lastName}*/}
          </p>
          <p className="mt-1 text-xs text-text-muted">دانشجوی CodeNest</p>
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto lg:mt-5 lg:flex-col lg:overflow-visible">
        {menuItems.map(({ label, href, icon: Icon }) => {
          const active =
            pathname === href ||
            (href !== "/panel" && pathname.startsWith(`${href}/`));

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                active
                  ? "bg-primary text-white shadow-sm shadow-primary/15"
                  : "text-text-secondary hover:bg-box hover:text-primary"
              }`}
            >
              <Icon size={19} />
              <span className="whitespace-nowrap">{label}</span>

              <ChevronLeft
                size={16}
                className={`mr-auto hidden lg:block ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <div className="mt-5 hidden border-t border-border pt-4 lg:block">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-zinc-50"
        >
          <LogOut size={19} />
          بازگشت به سایت
        </Link>
      </div>
    </aside>
  );
}
