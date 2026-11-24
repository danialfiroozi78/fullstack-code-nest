"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

export type ToastVariant = "success" | "warning" | "danger";

export interface ToastData {
  id: string;
  variant: ToastVariant;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastProps extends ToastData {
  onClose: (id: string) => void;
}

const variants = {
  success: {
    icon: CheckCircle2,
    color: "text-success",
    background: "bg-emerald-50",
    progress: "bg-success",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-warning",
    background: "bg-amber-50",
    progress: "bg-warning",
  },
  danger: {
    icon: XCircle,
    color: "text-danger",
    background: "bg-red-50",
    progress: "bg-danger",
  },
};

export default function Toast({
  id,
  variant,
  title,
  description,
  duration = 4000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(false);
  const config = variants[variant];
  const Icon = config.icon;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (duration <= 0) return;

    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  return (
    <div
      role={variant === "danger" ? "alert" : "status"}
      className={`relative w-full overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_40px_rgba(24,24,27,0.10)] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
      }`}
    >
      <div className="flex items-start gap-3 p-4">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${config.background}`}
        >
          <Icon size={23} className={config.color} />
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <h4 className="text-base font-extrabold text-text-primary">
            {title}
          </h4>

          {description && (
            <p className="mt-1 text-sm text-text-secondary">{description}</p>
          )}
        </div>

        <button
          type="button"
          onClick={() => onClose(id)}
          aria-label="بستن اعلان"
          className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-zinc-100 hover:text-text-primary"
        >
          <X size={17} />
        </button>
      </div>

      {duration > 0 && (
        <div className="h-1 w-full bg-zinc-100">
          <div
            className={`h-full origin-right ${config.progress}`}
            style={{
              animation: `toast-progress ${duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
}
