"use client";

import { useGetCartQuery } from "@/api/query/cart.query";
import CarItems from "@/components/cart/CarItems";

export default function CartContent({
  isAuthorized,
}: {
  isAuthorized: boolean;
}) {
  const { data } = useGetCartQuery(null, {
    skip: !isAuthorized,
  });

  return (
    <>
      <div className="min-h-[70vh] bg-body">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
          <CarItems isAuthorized={isAuthorized} data={data?.data} />
        </div>
      </div>
    </>
  );
}
