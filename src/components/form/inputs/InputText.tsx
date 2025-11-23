import { type FieldValues } from "react-hook-form";
import type { BaseInputProps } from "@/components/form/types/FormInput.types";
import { FormInputTemplate } from "../templates/FormInputTemplate";
import { useFormInput } from "../hooks/useFormInput";

const InputText = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { optional, label, placeholder } = props;
  const { error, inputId, inputProps } = useFormInput(props);

  return (
    <FormInputTemplate errorMessage={error} inputId={inputId} label={label} optional={optional}>
      <input {...inputProps} placeholder={placeholder} />
    </FormInputTemplate>
  );
};

export { InputText };
