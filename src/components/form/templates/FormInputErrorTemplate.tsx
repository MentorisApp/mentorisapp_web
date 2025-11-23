import type { FormInputErrorTemplateProps } from "../types/FormInput.types";

const FormInputErrorTemplate = ({ errorMessage }: FormInputErrorTemplateProps) => {
  return <div className="mt-1 mb-2 min-h-[1.4em] text-xs text-red-600">{errorMessage}</div>;
};

export { FormInputErrorTemplate };
