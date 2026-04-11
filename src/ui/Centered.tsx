import type { PropsWithChildren } from "react";

const Centered = (props: PropsWithChildren) => {
  return <div className="grid min-h-dvh w-full place-items-center">{props.children}</div>;
};

export { Centered };
