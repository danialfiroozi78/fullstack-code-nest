"use client";

import type { ReactNode } from "react";
import PanelSidebar from "@/components/panel/PanelSidebar";

export default function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[75vh] bg-body">
      <div className="mx-auto grid max-w-7xl items-start gap-7 px-4 py-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-6 lg:py-12">
        <PanelSidebar />

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
