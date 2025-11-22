interface InputErrorTextProps {
  message: string | undefined;
}

const InputErrorText = ({ message }: InputErrorTextProps) => {
  return <div className="mt-1 mb-2 min-h-[1.4em] text-xs text-red-600">{message}</div>;
};

export { InputErrorText };
