interface LabelProps {
  id: string;
  optional?: boolean;
  text?: string;
}

const Label = (props: LabelProps) => {
  const { id, optional = false, text } = props;

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      {text && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium dark:text-white">
          {text}
        </label>
      )}
      {optional && (
        <span className="mb-2 block text-xs text-gray-500 italic dark:text-neutral-500">
          Optional
        </span>
      )}
    </div>
  );
};

export { Label };
