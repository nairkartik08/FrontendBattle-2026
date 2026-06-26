import type { CSSProperties } from "react";
import { svgAssets } from "../constants/assets";
import { cn } from "../utils/cn";

type IconName = keyof typeof svgAssets;

type IconProps = {
  name: IconName;
  className?: string;
  alt?: string;
  style?: CSSProperties;
};

export function Icon({ name, className, alt = "", style }: IconProps) {
  return (
    <img
      src={svgAssets[name]}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={cn("h-5 w-5 object-contain", className)}
      style={style}
      loading="lazy"
    />
  );
}
