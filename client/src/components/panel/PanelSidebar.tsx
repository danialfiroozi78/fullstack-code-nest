"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  ChevronLeft,
  LayoutDashboard,
  LogOut,
  ReceiptText,
  Settings,
  UserRound,
} from "lucide-react";
import useDashboard from "@/hooks/useDashboard";
import { Button } from "@/components/common/Button";
import { useLogoutMutation } from "@/api/mutation/auth.mutation";
import Modal from "@/components/common/Modal";
import { useState } from "react";
import toast from "react-hot-toast";
import PanelSidebarSkeleton from "@/components/panel/loading/PanelSidebarSkeleton";

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
  const { dashboardData, dashboardLoading } = useDashboard();
  const [logoutMutation] = useLogoutMutation();
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  if (dashboardLoading) return <PanelSidebarSkeleton />;

  return (
    <aside className="h-fit w-full min-w-0 max-w-full rounded-2xl border border-border bg-white p-2 lg:sticky lg:top-28 lg:p-4">
      <Modal
        variant="danger"
        open={open}
        onClose={() => setOpen(false)}
        title="خروج از حساب کاربری"
        centered
        description="آیا از خروج از حساب کاربری مطمئن هستید؟"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>انصراف</Button>
            <Button
              variant="outline"
              onClick={() =>
                logoutMutation(null).then(({ data }) => {
                  if (data?.success) {
                    setOpen(false);
                    push("/auth");
                    toast.success(data?.message);
                  }
                })
              }
            >
              خروج از حساب
            </Button>
          </>
        }
      />

      <div className="hidden items-center gap-3 border-b border-border px-2 pb-6 lg:flex">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-box text-primary">
          <UserRound size={25} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-extrabold">
            {dashboardData?.data?.user?.firstName}{" "}
            {dashboardData?.data?.user?.lastName}
          </p>

          <p className="mt-1 text-xs text-text-muted">دانشجوی CodeNest</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full min-w-0 max-w-full overflow-x-auto lg:overflow-visible">
        <nav className="flex w-max min-w-full gap-2 lg:mt-5 lg:w-full lg:flex-col">
          {menuItems.map(({ label, href, icon: Icon }) => {
            const active =
              pathname === href ||
              (href !== "/panel" && pathname.startsWith(`${href}/`));

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-3 text-xs font-semibold transition-colors lg:justify-start lg:gap-3 lg:px-4 lg:py-3.5 lg:text-sm ${
                  active
                    ? "bg-primary text-white shadow-sm shadow-primary/15"
                    : "text-text-secondary hover:bg-box hover:text-primary"
                }`}
              >
                <Icon size={19} className="shrink-0" />

                <span>{label}</span>

                <ChevronLeft
                  size={16}
                  className={`mr-auto hidden shrink-0 lg:block ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Back To Website */}
      <div className="mt-5 hidden border-t border-border pt-4 lg:block">
        <Button variant="ghost" fullWidth onClick={() => setOpen(true)}>
          <LogOut size={19} />
          خروج از حساب کاربری
        </Button>
      </div>
    </aside>
  );
}
