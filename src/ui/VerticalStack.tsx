import type { PropsWithChildren } from "react";

const VerticalStack = (props: PropsWithChildren) => {
  return <div className="flex flex-col">{props.children}</div>;
};

export { VerticalStack };
