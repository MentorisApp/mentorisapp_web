import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { interactiveFocusClassName } from "@/ui/styles/primitives";

type ButtonBaseProps = {
  className?: string;
  variant?: "solid" | "ghost";
  severity?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  size?: "small" | "medium" | "large";
};

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    children,
    className,
    variant = "solid",
    severity = "primary",
    to,
    size = "medium",
    ...restProps
  } = props;

  const base = twMerge(
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60",
    interactiveFocusClassName
  );

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-5 py-2.5 text-sm",
    large: "px-6 py-3 text-base",
  };

  const variantClasses = {
    primary: {
      solid:
        "border-primary bg-primary text-white shadow-sm hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active",
      ghost: "border-primary/15 bg-transparent text-primary hover:bg-primary-soft",
    },
    secondary: {
      solid:
        "border-border bg-surface-muted text-text shadow-sm hover:border-border-strong hover:bg-surface active:bg-surface-muted",
      ghost:
        "border-transparent bg-transparent text-text-muted hover:bg-surface-muted hover:text-text",
    },
    success: {
      solid:
        "border-success bg-success text-white shadow-sm hover:brightness-95 active:brightness-90",
      ghost: "border-success/15 bg-transparent text-success hover:bg-success/10",
    },
    error: {
      solid: "border-error bg-error text-white shadow-sm hover:brightness-95 active:brightness-90",
      ghost: "border-error/15 bg-transparent text-error hover:bg-error/10",
    },
    warning: {
      solid:
        "border-warning bg-warning text-white shadow-sm hover:brightness-95 active:brightness-90",
      ghost: "border-warning/15 bg-transparent text-warning hover:bg-warning/10",
    },
    info: {
      solid: "border-info bg-info text-white shadow-sm hover:brightness-95 active:brightness-90",
      ghost: "border-info/15 bg-transparent text-info hover:bg-info/10",
    },
  };

  const merged = twMerge(base, sizes[size], variantClasses[severity]?.[variant], className);

  if (to) {
    const linkProps = restProps as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a className={merged} href={to} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = restProps as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={merged} {...buttonProps}>
      {children}
    </button>
  );
};

export { Button };
