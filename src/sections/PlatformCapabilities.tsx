import { Icon } from "../components/Icon";
import { capabilities } from "../constants/capabilities";

export function PlatformCapabilities() {
  return (
    <section id="platform" className="bg-oceanic px-4 py-16 text-arctic sm:px-6 lg:px-8" aria-labelledby="platform-title">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-forsythia">Platform Capabilities</p>
          <h2 id="platform-title" className="mt-4 font-mono text-3xl font-bold leading-tight sm:text-5xl">
            Built like an automation control plane, not another task board.
          </h2>
          <p className="mt-5 text-lg leading-8 text-arctic/76">
            FlowPilot keeps data movement, decisions, and exceptions visible in one place so teams can automate
            aggressively without losing operational clarity.
          </p>

          <div className="mt-8 rounded-[8px] border border-white/12 bg-white/8 p-4">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-bold text-arctic/70">Current execution window</p>
                <p className="mt-1 font-mono text-3xl font-bold text-forsythia">384ms</p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-forsythia">
                <Icon name="arrowTrendingUp" className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Ingest", "Reason", "Act"].map((step, index) => (
                <div key={step} className="rounded-[8px] bg-white/8 p-3">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-arctic/56">0{index + 1}</p>
                  <p className="mt-2 text-sm font-bold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-[8px] border border-white/12 bg-white/8 p-5 transition duration-200 ease-premium hover:-translate-y-1 hover:bg-white/12"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-arctic">
                  <Icon name={capability.icon} className="h-5 w-5" />
                </span>
                <span className="rounded-[8px] bg-nocturnal px-3 py-1 font-mono text-xs font-bold uppercase text-forsythia">
                  {capability.metric}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{capability.title}</h3>
              <p className="mt-2 text-sm leading-6 text-arctic/72">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
