import { useController, type FieldValues } from "react-hook-form";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import type { BaseInputProps } from "@/components/form/types/FormInput.types";

export const useFormInput = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { name, control, className } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const uniqueId = useId();
  const inputId = `${name}-${uniqueId}`;

  const finalClassName = twMerge(
    "input-base input-md",
    error ? "input-error" : "input-focus",
    className
  );

  const inputProps = {
    ...field,
    id: inputId,
    name,
    className: finalClassName,
  };

  return {
    error: error?.message,
    inputId,
    inputProps,
  };
};
