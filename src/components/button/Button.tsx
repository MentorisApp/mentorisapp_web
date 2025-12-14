import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  className?: string;
  variant?: "solid" | "ghost";
  severity?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  size?: "small" | "medium" | "large";
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

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

  const base =
    "inline-flex items-center hover:cursor-pointer justify-center font-medium rounded-full transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-3 text-lg",
  };

  const variantClasses = {
    primary: {
      solid: "bg-primary text-lime-100 hover:bg-primary-hover active:bg-primary-active",
      ghost: "bg-transparent text-primary border border-primary hover:bg-primary/10",
    },
    secondary: {
      solid: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400",
      ghost: "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-100",
    },
    success: {
      solid: "bg-success text-white hover:bg-green-600 active:bg-green-700",
      ghost: "bg-transparent text-success border border-success hover:bg-success/10",
    },
    error: {
      solid: "bg-error text-white hover:bg-red-600 active:bg-red-700",
      ghost: "bg-transparent text-error border border-error hover:bg-error/10",
    },
    warning: {
      solid: "bg-warning text-white hover:bg-amber-600 active:bg-amber-700",
      ghost: "bg-transparent text-warning border border-warning hover:bg-warning/10",
    },
    info: {
      solid: "bg-info text-white hover:bg-blue-600 active:bg-blue-700",
      ghost: "bg-transparent text-info border border-info hover:bg-info/10",
    },
  };

  const merged = twMerge(base, sizes[size], variantClasses[severity]?.[variant], className);

  // Wrap in <a> if `to` is provided, else just render <button>
  if (to) {
    return (
      <a href={to}>
        <button className={merged} {...restProps}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className={merged} {...restProps}>
      {children}
    </button>
  );
};

export { Button };
