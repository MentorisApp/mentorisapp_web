interface DividerProps {
  label?: string;
}

const Divider = ({ label }: DividerProps) => {
  if (!label) {
    return <div className="bg-border my-6 h-px w-full" />;
  }

  return (
    <div className="my-5 flex w-full items-center">
      <div className="bg-border h-px flex-1" />
      <span className="text-text-soft px-3 text-sm">{label}</span>
      <div className="bg-border h-px flex-1" />
    </div>
  );
};

export { Divider };
