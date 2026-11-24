"use client";

import {
  forwardRef,
  useId,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";

export type SelectOption = {
  id: number;
  name: string;
};

interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  name?: string;
  label?: string;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: SelectOption[];
  startIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      label,
      error,
      helperText,
      placeholder = "انتخاب کنید",
      options,
      startIcon,
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
    const selectId = id ?? generatedId;
    const messageId = `${selectId}-message`;

    const classes = [
      "w-full rounded-xl border bg-card h-11 px-4 text-base font-medium appearance-none",
      "text-text-primary",
      "outline-none transition-colors duration-200",
      "focus:border-primary focus:ring-2 focus:ring-primary/15",
      "disabled:cursor-not-allowed disabled:bg-box",
      "disabled:opacity-60",
      error
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
        : "border-border hover:border-primary/40",
      startIcon ? "ps-10" : "",
      "pe-10",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-fit"}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-text-primary mr-2"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-text-secondary">
              {startIcon}
            </span>
          )}

          <select
            {...props}
            id={selectId}
            ref={ref}
            name={name}
            disabled={disabled}
            defaultValue={props.defaultValue ?? ""}
            className={classes}
            aria-invalid={Boolean(error)}
            aria-describedby={
              [ariaDescribedBy, error || helperText ? messageId : null]
                .filter(Boolean)
                .join(" ") || undefined
            }
          >
            <option value="" disabled>
              {placeholder}
            </option>

            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-text-secondary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
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

Select.displayName = "Select";
