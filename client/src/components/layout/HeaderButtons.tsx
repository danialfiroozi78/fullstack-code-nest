"use client";

import { useGetCartQuery } from "@/api/query/cart.query";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { ShoppingCart, UserRound } from "lucide-react";

export default function HeaderButtons({ token }: { token: boolean }) {
  const { data: cartData } = useGetCartQuery(null, {
    skip: !token,
  });

  return (
    <div className="hidden items-center gap-2 lg:flex">
      <Link aria-label="سبد خرید" href="/cart">
        <Button variant="secondary" className="relative">
          {cartData?.data?.cart?.items?.length ? (
            <div className="absolute -right-1 -top-1 bg-primary rounded-full size-4 flex items-center justify-center text-white pt-0.5 text-sm">
              {cartData?.data?.cart?.items?.length}
            </div>
          ) : (
            ""
          )}
          <ShoppingCart size={20} />
        </Button>
      </Link>

      <Link href={token ? "panel" : "/auth"}>
        <Button>
          <UserRound size={20} />
          {token ? "پنل کاربری" : "ورود | ثبت نام"}
        </Button>
      </Link>
    </div>
  );
}
