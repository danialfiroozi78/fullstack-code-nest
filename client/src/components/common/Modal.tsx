"use client";

import { useEffect, useId, type ReactNode, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  showCloseButton?: boolean;
  closeOnOverlay?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  centered?: boolean;
  variant?: "default" | "danger" | "success";
};

const sizes = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  showCloseButton = true,
  closeOnOverlay = true,
  size = "md",
  centered = false,
  variant = "default",
}: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && closeOnOverlay) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-[3px]"
      onMouseDown={handleOverlayClick}
    >
      <div
        role="dialog"
        className={`relative my-auto w-full ${sizes[size]} overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl`}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن پنجره"
            className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={19} />
          </button>
        )}

        {/* Header */}
        {/* Header */}
        {(title || description || variant !== "default") && (
          <div
            className={`flex flex-col px-6 pb-5 pt-8 ${
              centered ? "items-center text-center" : "items-start text-right"
            }`}
          >
            {variant === "danger" && (
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                <AlertTriangle size={27} strokeWidth={1.8} />
              </div>
            )}

            {variant === "success" && (
              <div className="mb-5 flex h-16 w-16 animate-[successPop_0.4s_ease-out] items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                <CheckCircle2 size={34} strokeWidth={1.8} />
              </div>
            )}

            {title && (
              <h2
                id={titleId}
                className={`max-w-full px-8 text-lg font-extrabold leading-8 ${
                  variant === "success" ? "text-emerald-700" : "text-gray-900"
                }`}
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                id={descriptionId}
                className="mt-2 text-sm leading-7 text-gray-500"
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children && (
          <div
            className={`max-h-[50vh] overflow-y-auto px-6 pb-6 text-sm leading-7 text-gray-600 ${
              centered ? "text-center" : "text-right"
            }`}
          >
            {children}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div
            className={`flex flex-wrap items-center gap-3 px-6 pb-6 pt-2 [&>button]:min-h-11 ${
              centered ? "justify-center [&>button]:flex-1" : "justify-end"
            }`}
          >
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
