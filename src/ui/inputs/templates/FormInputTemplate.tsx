import { type PropsWithChildren } from "react";
import { FormInputLabelTemplate } from "./FormInputLabelTemplate";
import { FormInputErrorTemplate } from "./FormInputErrorTemplate";
import type {
  FormInputErrorTemplateProps,
  FormInputLabelTemplateProps,
} from "../types/FormInput.types";

type FormInputTemplateProps = FormInputErrorTemplateProps & FormInputLabelTemplateProps;

const FormInputTemplate = (props: PropsWithChildren<FormInputTemplateProps>) => {
  const { inputId, errorMessage, optional, label, children, hideError } = props;

  return (
    <div className="w-full">
      <FormInputLabelTemplate inputId={inputId} optional={optional} label={label} />
      {children}
      {!hideError && <FormInputErrorTemplate errorMessage={errorMessage} />}
    </div>
  );
};

export { FormInputTemplate };
