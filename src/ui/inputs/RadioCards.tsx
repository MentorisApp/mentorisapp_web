import { type FieldValues } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { useFormInput } from "@/hooks/useFormInput";
import { FormInputTemplate } from "./templates/FormInputTemplate";
import type { BaseInputProps } from "./types/FormInput.types";
import { inputBaseClassName, inputFocusClassName } from "@/styles/primitives/input.primitive";

export type RadioCardOption = {
  value: string;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type RadioCardsProps<T extends FieldValues> = BaseInputProps<T> & {
  options: RadioCardOption[];
};

const RadioCards = <T extends FieldValues>(props: RadioCardsProps<T>) => {
  const { optional, label, hideError, options, className } = props;
  const { error, inputId, field } = useFormInput(props);

  return (
    <FormInputTemplate
      errorMessage={error}
      hideError={hideError}
      inputId={inputId}
      label={label}
      optional={optional}
    >
      <div role="radiogroup" aria-label={label} className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const isSelected = field.value === option.value;

          const Icon = option.icon;

          return (
            <label
              key={option.value}
              htmlFor={`${inputId}-${option.value}`}
              className={twMerge(
                inputFocusClassName,
                inputBaseClassName,
                "cursor-pointer border p-4 transition",
                isSelected && "border-primary-hover bg-primary-soft/80",
                className
              )}
            >
              <input
                id={`${inputId}-${option.value}`}
                type="radio"
                checked={isSelected}
                className="sr-only"
                {...field}
                value={option.value}
              />

              <div className="flex items-start gap-3">
                {Icon && (
                  <div>
                    <Icon
                      className={twMerge(
                        "text-muted-foreground size-6",
                        isSelected && "text-primary"
                      )}
                    />
                  </div>
                )}

                <div className="flex flex-col">
                  <span className="font-medium">{option.title}</span>
                  {option.description && (
                    <span className="text-text-muted text-sm">{option.description}</span>
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </FormInputTemplate>
  );
};

export { RadioCards };
