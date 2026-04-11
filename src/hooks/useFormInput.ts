import { useController, type FieldValues } from "react-hook-form";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import type { BaseInputProps } from "@/ui/inputs/types/FormInput.types";
import {
  inputBaseClassName,
  inputErrorClassName,
  inputSizeClassNames,
} from "@/styles/primitives/input.primitive";

export const useFormInput = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { name, control, className, size = "normal" } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const uniqueId = useId();
  const inputId = `${name}-${uniqueId}`;

  const baseClassName = twMerge(
    inputBaseClassName,
    error && inputErrorClassName,
    inputSizeClassNames[size]
  );

  return {
    error: error?.message,
    inputId,
    field,
    baseClassName,
    className,
  };
};
