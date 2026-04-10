import type { FormInputErrorTemplateProps } from "../types/FormInput.types";

const FormInputErrorTemplate = ({ errorMessage }: FormInputErrorTemplateProps) => {
  return <div className="text-error mt-1 min-h-5 text-xs">{errorMessage}</div>;
};

export { FormInputErrorTemplate };
