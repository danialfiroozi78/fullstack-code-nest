"use client";

import { forwardRef, TextareaHTMLAttributes, useId } from "react";

interface InputProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = true,
      disabled = false,
      className = "",
      id,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = `${inputId}-message`;

    const classes = [
      "w-full rounded-xl border bg-card p-3 text-base font-medium",
      "text-text-primary placeholder:font-light placeholder:text-sm! placeholder:text-text-secondary",
      "outline-none transition-colors duration-200",
      "focus:border-primary focus:ring-2 focus:ring-primary/15",
      "disabled:cursor-not-allowed disabled:bg-box",
      "disabled:opacity-60",
      error
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
        : "border-border hover:border-primary/40",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-fit"}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-primary mr-2"
          >
            {label}

            {props.required && <span className="ms-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          <textarea
            {...props}
            id={inputId}
            ref={ref}
            disabled={disabled}
            className={classes}
            aria-invalid={Boolean(error)}
            aria-describedby={
              [ariaDescribedBy, error || helperText ? messageId : null]
                .filter(Boolean)
                .join(" ") || undefined
            }
            rows={5}
          />
        </div>

        {(error || helperText) && (
          <p
            id={messageId}
            role={error ? "alert" : undefined}
            className={`text-xs ${
              error ? "text-red-600" : "text-text-secondary"
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
