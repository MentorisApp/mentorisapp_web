import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  className?: string;
  variant?: "solid" | "ghost";
  severity?: "primary" | "success" | "error" | "warning" | "info";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, className, variant = "solid", severity = "primary", ...restProps } = props;

  const base =
    "inline-flex items-center w-full hover:cursor-pointer justify-center font-medium rounded-full px-[1.8em] py-[0.8em] transition duration-200";

  const variants = {
    primary: {
      solid: "bg-primary text-primary-on hover:bg-primary/80",
      ghost: "bg-transparent text-primary-surface border-transparent hover:bg-primary/80",
    },
    error: {
      solid: "bg-error-surface text-error-foreground",
      ghost: "bg-transparent text-error-surface border-transparent hover:bg-error-muted",
    },
    warning: {
      solid: "bg-warning-surface text-warning-foreground",
      ghost: "bg-transparent text-warning-surface border-transparent hover:bg-warning-muted",
    },
    info: {
      solid: "bg-info-surface text-info-foreground",
      ghost: "bg-transparent text-info-surface border-transparent hover:bg-info-muted",
    },
    success: {
      solid: "bg-success-surface text-success-foreground",
      ghost: "bg-transparent text-success-surface border-transparent hover:bg-success-muted",
    },
  };

  const merged = twMerge(base, variants[severity]?.[variant], className);

  return (
    <button className={merged} {...restProps}>
      {children}
    </button>
  );
};

export { Button };
