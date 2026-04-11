import { cardBaseClassNames, cardSizeClassNames } from "@/styles/primitives/card.primitive";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = PropsWithChildren & {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Card = ({ children, size = "md", className }: CardProps) => {
  const classNameMerged = twMerge(cardBaseClassNames, cardSizeClassNames[size], className);

  return <div className={classNameMerged}>{children}</div>;
};

export { Card };
