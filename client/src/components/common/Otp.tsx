"use client";

import {
  useRef,
  useState,
  type ClipboardEvent,
  type KeyboardEvent,
} from "react";
import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";

type InputSize = "sm" | "md" | "lg";

interface OTPInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
  label?: string;
  length?: number;
  inputSize?: InputSize;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const sizes: Record<InputSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-11 w-11 text-base font-medium",
  lg: "h-12 w-12 text-base",
};

const normalizeDigits = (value: string) =>
  value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632))
    .replace(/\D/g, "");

export default function OTPInput<T extends FieldValues>({
  name,
  control,
  rules,
  label,
  length = 5,
  inputSize = "md",
  helperText,
  disabled = false,
  fullWidth = true,
}: OTPInputProps<T>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    disabled,
  });

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const error = fieldState.error?.message;
  const value = String(field.value ?? "");

  // Preserve positions internally, including empty ones.
  const digits = Array.from({ length }, (_, index) => value[index] ?? "");

  const updateValue = (updated: string[]) => {
    field.onChange(updated.join(""));
  };

  const handleChange = (index: number, rawValue: string) => {
    const normalized = normalizeDigits(rawValue);
    const updated = [...digits];

    if (!normalized) {
      updated[index] = "";
      updateValue(updated);
      return;
    }

    normalized.split("").forEach((digit, offset) => {
      if (index + offset < length) {
        updated[index + offset] = digit;
      }
    });

    updateValue(updated);

    const nextIndex = Math.min(index + normalized.length, length - 1);

    inputRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();

      const updated = [...digits];

      if (updated[index]) {
        updated[index] = "";
      } else if (index > 0) {
        updated[index - 1] = "";
        inputRefs.current[index - 1]?.focus();
      }

      updateValue(updated);
    }

    if (event.key === "ArrowRight" && index > 0) {
      event.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index < length - 1) {
      event.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pasted = normalizeDigits(event.clipboardData.getData("text")).slice(
      0,
      length,
    );

    if (!pasted) return;

    field.onChange(pasted);

    inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  const inputClasses = [
    "rounded-xl border bg-card",
    "text-center text-text-primary",
    "outline-none transition-colors duration-200",
    "disabled:cursor-not-allowed disabled:bg-box",
    "disabled:opacity-60",
    error
      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/15"
      : "border-border hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/15",
    sizes[inputSize],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-fit"}`}>
      {label && (
        <label className="mr-2 text-sm text-center font-medium text-text-primary">
          {label}
        </label>
      )}

      <div dir="ltr" className="flex items-center justify-around gap-2">
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(element) => {
              inputRefs.current[index] = element;

              if (index === 0) {
                field.ref(element);
              }
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            aria-label={`رقم ${index + 1} کد تأیید`}
            aria-invalid={Boolean(error)}
            maxLength={length}
            value={digit}
            disabled={disabled}
            className={inputClasses}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            onPaste={handlePaste}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => {
              setFocusedIndex(null);
              field.onBlur();
            }}
          />
        ))}
      </div>

      {(error || helperText) && (
        <p
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
}
