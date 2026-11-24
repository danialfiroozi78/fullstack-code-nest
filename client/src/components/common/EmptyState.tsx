"use client";

import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="col-span-full flex min-h-95 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white px-6 py-12 text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 scale-125 rounded-full bg-primary-hover/5" />

        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-border bg-primary/10">
          <Icon size={36} strokeWidth={1.5} className="text-primary" />
        </div>
      </div>

      <h3 className="mb-3 text-lg font-bold text-text-primary">{title}</h3>

      <p className="max-w-sm text-sm leading-7 text-text-secondary">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          {actionLabel}
          <ArrowLeft size={17} />
        </Link>
      )}
    </div>
  );
}
