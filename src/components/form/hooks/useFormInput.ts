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
    "input-base",
    error ? "input-error" : "input-focus",
    size === "small" && "input-sm",
    size === "normal" && "input-md",
    size === "large" && "input-lg"
  );

  return {
    error: error?.message,
    inputId,
    field,
    baseClassName,
    className,
  };
};
