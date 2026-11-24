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

  return {
    dashboardData,
    dashboardLoading,
    stats,
  };
}
