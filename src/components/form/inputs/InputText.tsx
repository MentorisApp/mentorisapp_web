import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import { Label } from "../shared/Label";
import { InputErrorText } from "../shared/InputErrorText";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

export interface BaseInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  optional?: boolean;
  className?: string;
}

const baseInputStyles =
  "block w-full rounded-md border-gray-200 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600";

const errorInputStyles =
  "border-red-600 focus:border-red-600 focus:ring-red-600 dark:border-red-600";

type InputTextProps<T extends FieldValues> = BaseInputProps<T>;

const InputText = <T extends FieldValues>(props: InputTextProps<T>) => {
  const { name, optional, label, placeholder, control, className } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const uniqueId = useId();
  const inputId = `${name}-${uniqueId}`;
  const finalClassName = twMerge(baseInputStyles, error ? errorInputStyles : "", className);

  const inputProps = {
    ...field,
    id: inputId,
    name: name,
    className: finalClassName,
    // "aria-invalid": error ? "true" : "false",
  };

  return (
    <div className="w-full">
      <Label id={inputId} optional={optional} text={label} />
      <input {...inputProps} placeholder={placeholder} />
      <InputErrorText message={error?.message} />
    </div>
  );
};

export { InputText };
