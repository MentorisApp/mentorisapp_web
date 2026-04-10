import type { FormInputLabelTemplateProps } from "@/ui/inputs/types/FormInput.types";

const FormInputLabelTemplate = (props: FormInputLabelTemplateProps) => {
  const { inputId, optional = false, label } = props;

  return (
    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
      <label htmlFor={inputId} className="text-text block text-sm font-medium">
        {label}
      </label>
      {optional && <span className="text-text-soft block text-xs italic">Optional</span>}
    </div>
  );
};

export { FormInputLabelTemplate };
