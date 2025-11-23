import type { FormInputLabelTemplateProps } from "@/components/form/types/FormInput.types";

const FormInputLabelTemplate = (props: FormInputLabelTemplateProps) => {
  const { inputId, optional = false, label } = props;

  return (
    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
      {/* {label && ( */}
      <label htmlFor={inputId} className="block text-sm font-medium dark:text-white">
        {label}
      </label>
      {/* )} */}
      {optional && (
        <span className="block text-xs text-gray-500 italic dark:text-neutral-500">Optional</span>
      )}
    </div>
  );
};

export { FormInputLabelTemplate };
