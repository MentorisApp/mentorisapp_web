import { IconWrapper } from "./IconWrapper";
import { ICON_PATHS, type IconName } from "./iconPaths";
import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "path"> & {
  name: IconName;
  size?: number | string;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const path = ICON_PATHS[name];

  if (!path) {
    console.error(`Icon with name "${name}" not found in ICON_PATHS.`);
    return null;
  }

  return <IconWrapper path={path} {...props} />;
};
