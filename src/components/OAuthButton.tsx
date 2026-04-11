import { inputBaseClassName, inputFocusClassName } from "@/styles/primitives/input.primitive";
import { twMerge } from "tailwind-merge";

interface OAuthButtonProps {
  provider: "Google" | "Facebook";
}

const OAuthButton = ({ provider }: OAuthButtonProps) => {
  return (
    <button
      className={twMerge(
        inputFocusClassName,
        inputBaseClassName,
        "flex cursor-pointer items-center justify-center gap-2 px-2 py-2.5 text-sm"
      )}
    >
      <img src={`/logo/${provider.toLowerCase()}.svg`} className="size-5" />
      {provider}
    </button>
  );
};

export { OAuthButton };
