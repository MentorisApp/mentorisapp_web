import { type FieldValues } from "react-hook-form";
import { useState } from "react";
import type { BaseInputProps } from "@/ui/inputs/types/FormInput.types";
import { Eye, EyeOff } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { FormInputTemplate } from "./templates/FormInputTemplate";
import { useFormInput } from "@/hooks/useFormInput";
import { interactiveFocusClassName } from "@/styles/primitives";

const InputPassword = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { optional, label, placeholder } = props;
  const { error, inputId, baseClassName, className, field } = useFormInput(props);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const buttonClassName = twMerge(
    "absolute inset-y-0 end-0 z-10 flex cursor-pointer items-center rounded-md px-3 text-text-soft transition-colors hover:text-text-muted",
    interactiveFocusClassName,
    showPassword && "text-text-muted"
  );

  const inputClassName = twMerge(baseClassName, className);

  return (
    <FormInputTemplate errorMessage={error} inputId={inputId} label={label} optional={optional}>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={inputClassName}
          id={inputId}
          placeholder={placeholder}
          {...field}
        />
        <button
          type="button"
          className={buttonClassName}
          onClick={toggleShowPassword}
          tabIndex={-1}
        >
          {showPassword ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
        </button>
      </div>
    </FormInputTemplate>
  );
};

export { InputPassword };
