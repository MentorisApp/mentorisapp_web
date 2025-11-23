import type { Control, FieldValues, Path } from "react-hook-form";

export type BaseInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  className?: string;
  size?: "small" | "normal" | "large";
} & Omit<FormInputLabelTemplateProps, "inputId">;

export type FormInputLabelTemplateProps = {
  inputId: string;
  optional?: boolean;
  label?: string;
};

export type FormInputErrorTemplateProps = {
  errorMessage: string | undefined;
};
