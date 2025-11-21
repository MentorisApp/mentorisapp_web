interface InputErrorText {
  message: string | undefined;
}

const InputErrorText = ({ message }: InputErrorText) => {
  return <div className="mt-1 mb-2 min-h-[1.2em] text-xs text-red-600">{message}</div>;
};

export { InputErrorText };
