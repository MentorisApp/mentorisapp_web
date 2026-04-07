import { useController, type FieldValues } from "react-hook-form";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import type { BaseInputProps } from "@/components/form/types/FormInput.types";

export const useFormInput = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { name, control, className, size = "normal" } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const uniqueId = useId();
  const inputId = `${name}-${uniqueId}`;

  const baseClassName = twMerge(
    "w-full rounded-lg border-2 border-transparent bg-gray-200 text-start text-sm placeholder-gray-500 focus:ring-0 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
    error ? "border-error bg-error-muted" : "focus:border-primary-hover/70",
    size === "small" && "px-2 py-1.5 text-sm",
    size === "normal" && "px-3 py-2.5 text-sm",
    size === "large" && "px-4 py-3.5 text-base"
  );

  return {
    error: error?.message,
    inputId,
    field,
    baseClassName,
    className,
  };
};
