import type { SVGProps } from "react";

interface IconWrapperProps extends SVGProps<SVGSVGElement> {
  path: string;
  size?: number | string;
}

export const IconWrapper = ({ path, size = 24, className = "", ...props }: IconWrapperProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={`shrink-0 fill-current ${className}`}
      {...props}
    >
      <path d={path} />
    </svg>
  );
};
