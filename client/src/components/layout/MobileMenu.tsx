"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, UserRound } from "lucide-react";
import { Button } from "@/components/common/Button";
import { usePathname } from "next/navigation";

type NavLink = {
  title: string;
  href: string;
};

export default function MobileMenu({
  links,
  token,
}: {
  links: NavLink[];
  token: boolean;
}) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer flex size-10 items-center justify-center rounded-xl border border-border bg-white text-text-primary"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-white p-5 shadow-xl"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-text-secondary hover:bg-box hover:text-primary"
              >
                {link.title}
              </Link>
            ))}

            <div className="my-3 h-px bg-border" />

            <div className="flex items-center gap-4">
              <Link
                className="w-full"
                href="/cart"
                onClick={() => setOpen(false)}
              >
                <Button variant="secondary" fullWidth>
                  <ShoppingCart size={18} />
                  سبد خرید
                </Button>
              </Link>

              <Link className="w-full" href={token ? "panel" : "/auth"}>
                <Button fullWidth>
                  <UserRound size={20} />
                  {token ? "پنل کاربری" : "ورود | ثبت نام"}
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
