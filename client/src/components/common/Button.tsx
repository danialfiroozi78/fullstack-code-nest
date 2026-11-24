"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { LoaderCircle } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "dangerGhost"
  | "dangerOutline";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconOnly?: boolean;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-body hover:bg-primary-hover active:bg-[#85BC20]",

  secondary:
    "bg-card text-text-primary border border-border hover:bg-card-hover hover:border-primary/30 active:bg-[#293B30]",

  outline:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-body active:bg-primary-hover",

  ghost: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20",

  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",

  dangerGhost:
    "bg-red-500/10 text-red-400 hover:bg-red-500/20 active:bg-red-500/30",

  dangerOutline:
    "border border-red-500 bg-transparent text-red-400 hover:bg-red-600 hover:text-white active:bg-red-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-11 px-3 text-[15px] font-bold gap-2",
  lg: "h-12 px-10 text-base gap-2.5",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "size-8",
  md: "size-11",
  lg: "size-12",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      iconOnly = false,
      icon,
      iconPosition = "start",
      fullWidth = false,
      className = "",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const classes = [
      "relative inline-flex shrink-0 items-center justify-center",
      "rounded-xl font-semibold whitespace-nowrap",
      "transition-all duration-200",
      "cursor-pointer select-none",
      "focus-visible:outline-none",
      "focus-visible:ring-2 focus-visible:ring-primary/50",
      "focus-visible:ring-offset-2",
      "focus-visible:ring-offset-body",
      "disabled:cursor-not-allowed",
      "disabled:opacity-40",
      "disabled:pointer-events-none",
      variants[variant],
      iconOnly ? iconSizes[size] : sizes[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
        ) : iconOnly ? (
          (icon ?? children)
        ) : (
          <>
            {icon && iconPosition === "start" && icon}
            {children}
            {icon && iconPosition === "end" && icon}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
