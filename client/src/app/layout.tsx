import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ReduxProvider from "@/components/ReduxProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "CodeNest | دانلود بازی کامپیوتر",
  description: "دانلود جدیدترین بازی‌های کامپیوتری",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
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
        </ReduxProvider>
      </body>
    </html>
  );
}
