import { useState } from "react";
import { type FieldValues } from "react-hook-form";
import type { BaseInputProps } from "@/ui/inputs/types/FormInput.types";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";
import { useFormInput } from "@/hooks/useFormInput";
import { FormInputTemplate } from "./templates/FormInputTemplate";
import { stepIndicatorClassNames } from "@/ui/styles/primitives";

const SUBJECTS = [
  { id: 1, title: "Matematika" },
  { id: 2, title: "Fizika" },
  { id: 3, title: "Kemija" },
  { id: 4, title: "Biologija" },
  { id: 5, title: "Programiranje" },
  { id: 6, title: "Njemački" },
];

const DropdownSelect = <T extends FieldValues>(props: BaseInputProps<T>) => {
  const { optional, label, placeholder, hideError, className } = props;
  const { error, inputId, field, baseClassName } = useFormInput(props);

  const [isOpen, setIsOpen] = useState(false);

  const selected = SUBJECTS.find((subject) => subject.id === field.value);

  return (
    <div
      className="relative w-full"
      tabIndex={-1}
      onBlurCapture={(e) => {
        // Close only if focus moved outside the component
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      <FormInputTemplate
        inputId={inputId}
        label={label}
        optional={optional}
        errorMessage={error}
        hideError={hideError}
      >
        {/* Hidden input for form semantics */}
        <input type="hidden" name={field.name} value={field.value ?? ""} />

        {/* Visible trigger */}
        <button
          type="button"
          id={inputId}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className={twMerge(
            baseClassName,
            "inline-flex w-full items-center justify-between gap-2",
            className
          )}
        >
          <span className={field.value ? "text-text" : "text-text-soft"}>
            {selected?.title || placeholder}
          </span>

          <ChevronDown
            className={twMerge(
              "text-text-soft h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <ul
            role="listbox"
            className="border-border bg-surface absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-lg border p-1 shadow-md"
          >
            {SUBJECTS.map((subject) => (
              <li
                key={subject.id}
                role="option"
                aria-selected={subject.id === field.value}
                className={twMerge(
                  "text-text cursor-pointer rounded-md px-3 py-2.5 text-sm transition-colors",
                  subject.id === field.value
                    ? stepIndicatorClassNames.completed
                    : "hover:bg-primary-soft hover:text-primary"
                )}
                onMouseDown={() => {
                  field.onChange(subject.id);
                  setIsOpen(false);
                }}
              >
                {subject.title}
              </li>
            ))}
          </ul>
        )}
      </FormInputTemplate>
    </div>
  );
};

export { DropdownSelect };
