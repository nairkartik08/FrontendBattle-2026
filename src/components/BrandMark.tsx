import { brand } from "../constants/brand";
import { Icon } from "./Icon";

export function BrandMark() {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label={`${brand.name} home`}>
      <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-oceanic shadow-panel transition-transform duration-200 ease-premium group-hover:-translate-y-0.5">
        <Icon name="cubeSolid" className="h-5 w-5 invert" />
      </span>
      <span>
        <span className="block font-mono text-sm font-bold uppercase tracking-[0.16em] text-oceanic">
          {brand.name}
        </span>
        <span className="block text-xs font-semibold text-nocturnal/70">Automation OS</span>
      </span>
    </a>
  );
}
