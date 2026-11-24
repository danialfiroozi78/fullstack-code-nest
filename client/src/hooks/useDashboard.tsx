"use client";

import { useGetDashboardQuery } from "@/api/query/panel.query";
import { BookOpen, CheckCircle2, ShoppingBag } from "lucide-react";

export default function useDashboard() {
  const { data: dashboardData, isLoading: dashboardLoading } =
    useGetDashboardQuery(null);

  const stats = [
    {
      label: "دوره‌های من",
      value: dashboardData?.data?.courseCount,
      icon: BookOpen,
      description: "دوره‌های ثبت‌ شده",
    },
    {
      label: "سفارش های من",
      value: dashboardData?.data?.orderCount,
      icon: ShoppingBag,
      description: "سفارش های ثبت شده",
    },
    {
      label: "مجموع خریدها",
      value: dashboardData?.data?.totalAmounts,
      icon: CheckCircle2,
      description: "دوره‌های به پایان رسیده",
    },
  ];

  const fieldLabels: Record<string, string> = {
    firstName: "نام",
    lastName: "نام خانوادگی",
    phoneNumber: "شماره موبایل",
    userName: "نام کاربری",
    email: "آدرس ایمیل",
    birthday: "تاریخ تولد",
  };
  const profileFields = Object.entries(dashboardData?.data?.user ?? {});

  const isCompleted = (value: unknown) =>
    value != null && String(value).trim() !== "";

  const completedFields = profileFields.filter(([, value]) =>
    isCompleted(value),
  ).length;

  const totalFields = profileFields.length;

  const percentage = totalFields
    ? Math.round((completedFields / totalFields) * 100)
    : 0;

  const orderStatuses: Record<string, { label: string; className: string }> = {
    completed: {
      label: "پرداخت موفق",
      className: "bg-success/10 font-bold text-success",
    },
    pending: {
      label: "در انتظار پرداخت",
      className: "bg-orange-50 text-orange-500",
    },
    failed: {
      label: "پرداخت ناموفق",
      className: "bg-red-50 text-red-500",
    },
    cancelled: {
      label: "لغو شده",
      className: "bg-gray-100 text-gray-500",
    },
  };

  const recentOrders = dashboardData?.data?.recentOrders ?? [];

  return {
    dashboardData,
    dashboardLoading,
    stats,
    fieldLabels,
    percentage,
    isCompleted,
    profileFields,
    completedFields,
    totalFields,
    orderStatuses,
    recentOrders,
  };
}
