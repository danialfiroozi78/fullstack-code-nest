import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ReduxProvider from "@/components/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "کدنست | آموزش تخصصی برنامه‌نویسی",
  description:
    "کدنست، پلتفرم آموزش تخصصی برنامه‌نویسی با دوره‌های پروژه‌محور فرانت‌اند، بک‌اند، توسعه وب و مسیرهای یادگیری برای ورود به بازار کار.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          <Suspense fallback={null}>
            <Header />
            <Toaster
              toastOptions={{
                duration: 2000,
                style: {
                  maxWidth: "550px",
                  color: "#000",
                  fontSize: "15px",
                  fontWeight: "bold",
                  padding: "12px",
                  borderRadius: "14px",
                },
                error: {
                  className: "toast-error",
                },
                success: {
                  className: "toast-success",
                },
              }}
            />
            {children}
            <Footer />
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
