import { ButtonLink } from "../components/ButtonLink";
import { Icon } from "../components/Icon";

export function CTA() {
  return (
    <section id="cta" className="bg-arctic px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="cta-title">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[8px] bg-oceanic px-5 py-12 text-arctic shadow-panel sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-forsythia">Launch Control</p>
            <h2 id="cta-title" className="mt-4 max-w-3xl font-mono text-3xl font-bold leading-tight sm:text-5xl">
              Turn the next messy workflow into a monitored AI automation.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-arctic/76">
              Start with one high-friction process, connect the source data, and let FlowPilot handle routing,
              approvals, and recovery paths.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#pricing" className="bg-forsythia text-oceanic hover:bg-saffron">
                Compare plans
                <Icon name="chevronRight" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#top" variant="secondary" className="border-white/20 bg-white/10 text-arctic hover:bg-white/16">
                Back to top
                <Icon name="chevronUp" className="h-4 w-4 invert" />
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[8px] border border-white/12 bg-white/8 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-arctic/70">Readiness score</p>
                <p className="mt-1 font-mono text-5xl font-bold text-forsythia">97</p>
              </div>
              <span className="grid h-14 w-14 place-items-center rounded-[8px] bg-arctic">
                <Icon name="cubeSolid" className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {["Source data mapped", "Approval owners assigned", "Fallback policy active"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[8px] bg-white/8 px-3 py-3">
                  <Icon name="chevronUpSolid" className="h-4 w-4 rotate-90 invert" />
                  <span className="text-sm font-bold text-arctic/82">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
