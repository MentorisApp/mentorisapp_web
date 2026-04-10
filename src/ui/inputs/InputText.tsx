import { type FieldValues } from "react-hook-form";
import type { BaseInputProps } from "@/ui/inputs/types/FormInput.types";

import { twMerge } from "tailwind-merge";
import { FormInputTemplate } from "./templates/FormInputTemplate";
import { useFormInput } from "@/hooks/useFormInput";

const InputText = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { optional, label, placeholder } = props;
  const { error, inputId, baseClassName, className, field } = useFormInput(props);

  const inputClassName = twMerge(baseClassName, className);

  return (
    <FormInputTemplate errorMessage={error} inputId={inputId} label={label} optional={optional}>
      <input {...field} id={inputId} className={inputClassName} placeholder={placeholder} />
    </FormInputTemplate>
  );
};

export { InputText };
