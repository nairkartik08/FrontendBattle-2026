import { memo, useCallback, useState } from "react";
import { Icon } from "../components/Icon";
import { features } from "../constants/features";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { cn } from "../utils/cn";

const BentoCard = memo(function BentoCard({
  feature,
  active,
  onActivate,
}: {
  feature: (typeof features)[number];
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <article
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn(
        "group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[8px] border p-5 transition duration-[360ms] ease-structure will-change-transform",
        feature.className,
        active
          ? "border-forsythia bg-oceanic text-arctic shadow-panel"
          : "border-nocturnal/10 bg-white/58 text-oceanic hover:-translate-y-1 hover:border-nocturnal/20",
      )}
    >
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className={cn("font-mono text-xs font-bold uppercase tracking-[0.18em]", active ? "text-forsythia" : "text-nocturnal/65")}>
            {feature.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight">{feature.title}</h3>
        </div>
        <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-[8px]", active ? "bg-white/10" : "bg-mint")}>
          <Icon name={feature.icon} className={cn("h-5 w-5", active ? "invert" : "")} />
        </span>
      </div>
      <div className="relative z-10 mt-8">
        <p className={cn("max-w-xl text-sm leading-6", active ? "text-arctic/78" : "text-nocturnal/76")}>{feature.description}</p>
        <p className={cn("mt-6 font-mono text-lg font-bold", active ? "text-forsythia" : "text-oceanic")}>{feature.stat}</p>
      </div>
      <span className="absolute -bottom-20 -right-16 h-44 w-44 rounded-full bg-forsythia/20 blur-2xl transition duration-[360ms] group-hover:scale-110" />
    </article>
  );
});

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const activate = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <section id="features" className="bg-arctic px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-nocturnal/70">AI Features</p>
          <h2 id="features-title" className="mt-4 font-mono text-3xl font-bold leading-tight text-oceanic sm:text-5xl">
            A command center for every workflow your team keeps duct-taping together.
          </h2>
          <p className="mt-5 text-lg leading-8 text-nocturnal/78">
            The same active feature state powers the desktop Bento grid and the mobile Accordion,
            so a resize preserves the exact context the user was exploring.
          </p>
        </div>

        {isDesktop ? (
          <div className="mt-10 grid auto-rows-[minmax(15rem,auto)] grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <BentoCard
                key={feature.id}
                feature={feature}
                active={activeIndex === index}
                onActivate={() => activate(index)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 space-y-3">
            {features.map((feature, index) => {
              const open = activeIndex === index;

              return (
                <article key={feature.id} className="overflow-hidden rounded-[8px] border border-nocturnal/10 bg-white/60">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                    aria-expanded={open}
                    aria-controls={`${feature.id}-panel`}
                    onClick={() => activate(index)}
                  >
                    <span>
                      <span className="block font-mono text-xs font-bold uppercase tracking-[0.18em] text-nocturnal/65">
                        {feature.eyebrow}
                      </span>
                      <span className="mt-1 block text-lg font-bold text-oceanic">{feature.title}</span>
                    </span>
                    <Icon name={open ? "chevronUp" : "chevronDown"} className="h-5 w-5 shrink-0" />
                  </button>
                  <div
                    id={`${feature.id}-panel`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-[360ms] ease-structure",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-nocturnal/10 px-4 py-5">
                        <p className="text-sm leading-6 text-nocturnal/76">{feature.description}</p>
                        <p className="mt-4 font-mono text-lg font-bold text-oceanic">{feature.stat}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
