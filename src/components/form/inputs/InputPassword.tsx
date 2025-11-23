import { type FieldValues } from "react-hook-form";
import { useState } from "react";
import type { BaseInputProps } from "@/components/form/types/FormInput.types";
import { Eye, EyeOff } from "lucide-react";
import { FormInputTemplate } from "../templates/FormInputTemplate";
import { useFormInput } from "../hooks/useFormInput";

const InputPassword = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { optional, label, placeholder } = props;
  const { error, inputId, inputProps } = useFormInput(props);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormInputTemplate errorMessage={error} inputId={inputId} label={label} optional={optional}>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...inputProps}
          placeholder={placeholder}
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 z-20 flex cursor-pointer items-center rounded-e-md px-3 text-gray-400 focus:text-blue-600 focus:outline-hidden dark:text-neutral-600 dark:focus:text-blue-500"
          onClick={toggleShowPassword}
          tabIndex={-1}
        >
          {showPassword ? (
            <Eye className="size-4 shrink-0" />
          ) : (
            <EyeOff className="size-4 shrink-0" />
          )}
        </button>
      </div>
    </FormInputTemplate>
  );
};

export { InputPassword };
