"use client";

import { useGetMyCoursesQuery } from "@/api/query/panel.query";

export default function useMyCourse() {
  const { data, isLoading } = useGetMyCoursesQuery(null);

  return {
    data,
    isLoading,
  };
}
