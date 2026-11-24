"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import Toast, { type ToastData, type ToastVariant } from "./Toast";

type ToastOptions = {
  title: string;
  description?: string;
  duration?: number;
};

type ToastContextType = {
  toast: (variant: ToastVariant, options: ToastOptions) => void;
  success: (options: ToastOptions) => void;
  warning: (options: ToastOptions) => void;
  danger: (options: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const showToast = useCallback(
    (variant: ToastVariant, options: ToastOptions) => {
      const id = crypto.randomUUID();

      setToasts((prev) => [
        ...prev,
        {
          id,
          variant,
          ...options,
        },
      ]);
    },
    [],
  );

  const value: ToastContextType = {
    toast: showToast,
    success: (options) => showToast("success", options),
    warning: (options) => showToast("warning", options),
    danger: (options) => showToast("danger", options),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className="pointer-events-none fixed top-5 left-0 right-0 mx-auto z-9999 flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-3">
        {toasts.map((item) => (
          <div key={item.id} className="pointer-events-auto">
            <Toast {...item} onClose={removeToast} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
