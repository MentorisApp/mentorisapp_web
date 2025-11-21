import { type Control, type FieldValues, type Path } from "react-hook-form";
import { FormInputWrapper } from "@/components/FormInputWrapper";

export interface BaseInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

type InputTextProps<T extends FieldValues> = BaseInputProps<T>;

const InputText = <T extends FieldValues>(props: InputTextProps<T>) => {
  const { name, required, label, placeholder, control } = props;

  // TODO type of input does it affect anything?
  return (
    <FormInputWrapper control={control} name={name} label={label} required={required}>
      <input placeholder={placeholder} />
    </FormInputWrapper>
  );
};

export { InputText };
