"use client";

import { useGetMyOrdersQuery } from "@/api/query/panel.query";

export default function useMyOrders() {
  const { data, isLoading } = useGetMyOrdersQuery(null);

  return { data, isLoading };
}
