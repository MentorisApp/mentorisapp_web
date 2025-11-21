import { cloneElement, isValidElement, useId, type HTMLAttributes, type ReactElement } from "react";
import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import { Label } from "./form/shared/Label";
import { InputErrorText } from "./form/shared/InputErrorText";
import { twMerge } from "tailwind-merge";

export interface FormWrapperProps<T extends FieldValues> {
  children: ReactElement;
  name: Path<T>;
  control: Control<T>;
  label?: string;
  required?: boolean;
  className?: string;
}

const baseInputStyles =
  "block w-full rounded-md border-gray-200 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600";

const errorInputStyles =
  "border-red-600 focus:border-red-600 focus:ring-red-600 dark:border-red-600";

const FormInputWrapper = <T extends FieldValues>(props: FormWrapperProps<T>) => {
  const { name, control, required, label, children, className } = props;

  if (!isValidElement(children)) {
    console.error("FormInputWrapper requires a single valid React element child.");
    return null;
  }

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const uniqueId = useId();
  const inputId = `${name}-${uniqueId}`;
  const finalClassName = twMerge(baseInputStyles, error ? errorInputStyles : "", className);

  const childrenWithProps = cloneElement(children, {
    ...field,
    id: inputId,
    name: name,
    className: finalClassName,
    "aria-invalid": error ? "true" : "false",
  } as HTMLAttributes<HTMLElement>);

  return (
    <div className="w-full">
      <Label id={inputId} required={required} text={label} />
      {childrenWithProps}
      <InputErrorText message={error?.message} />
    </div>
  );
};

export { FormInputWrapper };
