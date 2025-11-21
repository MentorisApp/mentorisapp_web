import { Icon } from "@/components/icons/Icon";

interface LabelProps {
  id: string;
  required?: boolean;
  text?: string;
}

const Label = (props: LabelProps) => {
  const { id, required = false, text } = props;

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      {text && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium dark:text-white">
          {text}
        </label>
      )}
      {required ? (
        <Icon name="ASTERISK" className="fill-red-600" size={10} />
      ) : (
        <span className="mb-2 block text-xs text-gray-500 dark:text-neutral-500">Optional</span>
      )}
    </div>
  );
};

export { Label };
