import Link from "next/link";
import { Code2 } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { cookies } from "next/headers";
import HeaderButtons from "@/components/layout/HeaderButtons";

const navLinks = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره‌های آموزشی", href: "/courses" },
  { title: "مسیرهای یادگیری", href: "/roadmaps" },
  { title: "مقالات", href: "http://blogify.danialfiroozi.ir" },
  { title: "درباره ما", href: "/about-us" },
];

export default async function Header() {
  const cookieStore = await cookies();
  const token = !!cookieStore.get("access_token")?.value;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header/95 backdrop-blur-xl">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between gap-5 px-4 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
            <Code2 size={25} strokeWidth={2.5} />
          </span>

          <span className="flex flex-col">
            <strong
              dir="ltr"
              className="text-xl font-extrabold tracking-tight text-text-primary"
            >
              CodeNest
            </strong>
            <span className="text-[10px] text-text-secondary">
              آکادمی آموزش برنامه‌نویسی
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-text-secondary duration-300 hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <HeaderButtons token={token} />

        <MobileMenu token={token} links={navLinks} />
      </div>
    </header>
  );
}
