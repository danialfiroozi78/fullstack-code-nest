"use client";

import type { ReactNode } from "react";
import PanelSidebar from "@/components/panel/PanelSidebar";

export default function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[75vh] w-full bg-body">
      <div
        className="
          mx-auto grid w-full max-w-7xl
          grid-cols-[minmax(0,1fr)]
          items-start gap-5
          px-4 py-6
          lg:grid-cols-[260px_minmax(0,1fr)]
          lg:gap-7 lg:px-6 lg:py-12
        "
      >
        <PanelSidebar />

        <div className="w-full min-w-0">{children}</div>
      </div>
    </div>
  );
}
