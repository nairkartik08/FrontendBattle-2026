import { ButtonLink } from "../components/ButtonLink";
import { Icon } from "../components/Icon";
import { DataCore3D } from "../components/DataCore3D";
import { brand } from "../constants/brand";

const metrics = [
  ["42ms", "median trigger latency"],
  ["18k", "workflow runs/day"],
  ["99.98%", "automation uptime"],
];

const activity = [
  ["Lead enrichment", "Synced 2,481 records", "bg-forsythia"],
  ["Revenue alerts", "Triaged 38 anomalies", "bg-saffron"],
  ["Ops approval", "Closed 12 pending tasks", "bg-mint"],
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-arctic pt-16 lg:pt-20" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mint/40 via-arctic to-arctic opacity-50" />
      <div className="hero-grid relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-[8px] border border-nocturnal/15 bg-white/55 px-3 py-2 text-sm font-bold text-nocturnal shadow-sm backdrop-blur transition-transform hover:scale-105 duration-200">
            <Icon name="arrowTrendingUp" className="h-4 w-4 text-forsythia" />
            Native AI workflows under 500ms
          </div>
          <h1 id="hero-title" className="mt-7 max-w-4xl font-mono text-4xl font-bold leading-[1.05] text-oceanic sm:text-5xl lg:text-7xl">
            Automate your data operations before the next bottleneck forms.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-nocturnal/82">
            {brand.name} turns scattered data, approvals, and analytics into a single AI
            command layer for modern teams that need speed without losing control.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#pricing" className="group">
              Build my workflow
              <Icon name="chevronRight" className="h-4 w-4 invert transition-transform duration-[360ms] group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary" className="group">
              View platform
              <Icon name="link" className="h-4 w-4 transition-transform duration-[360ms] group-hover:scale-110" />
            </ButtonLink>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="group rounded-[8px] border border-nocturnal/10 bg-white/45 p-3 backdrop-blur transition-all hover:bg-white/70 hover:shadow-sm">
                <dt className="font-mono text-xl font-bold text-oceanic transition-colors group-hover:text-forsythia">{value}</dt>
                <dd className="mt-1 text-xs font-semibold leading-4 text-nocturnal/70">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <div className="absolute -left-6 top-8 hidden h-16 w-16 animate-float rounded-[8px] bg-forsythia/95 p-4 shadow-glow md:block transition-transform hover:scale-110 duration-200">
            <Icon name="chartPie" className="h-full w-full" />
          </div>
          <div className="absolute -right-3 bottom-20 hidden h-14 w-14 animate-float-delayed rounded-[8px] bg-saffron p-3 shadow-panel md:block transition-transform hover:scale-110 duration-200">
            <Icon name="cogTooth" className="h-full w-full" />
          </div>
          
          {/* 3D AI Data Core */}
          <DataCore3D className="absolute -right-16 -top-16 -z-10 hidden opacity-90 md:block lg:-right-32 lg:-top-24 lg:opacity-100" />
          
          <div className="hero-panel relative rounded-[8px] border border-white/60 bg-white/62 p-3 shadow-panel backdrop-blur-xl">
            <div className="rounded-[8px] bg-oceanic p-4 text-arctic">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-forsythia">
                    Live automation map
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">Revenue data cockpit</h2>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-white/10">
                  <Icon name="arrowPath" className="h-5 w-5 invert animate-spin" style={{ animationDuration: "4s" }} />
                </span>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                <div className="rounded-[8px] bg-white/8 p-4">
                  <div className="flex items-end gap-2">
                    {[54, 72, 46, 82, 66, 90, 78].map((height, index) => (
                      <span
                        key={height + index}
                        className="hero-bar block flex-1 rounded-t-[6px] bg-gradient-to-t from-saffron to-forsythia transition-all duration-[360ms] hover:brightness-110"
                        style={{ height: `${height * 1.45}px`, animationDelay: `${index * 45}ms` }}
                      />
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between rounded-[8px] bg-arctic p-3 text-oceanic">
                    <span className="text-sm font-bold">Pipeline confidence</span>
                    <span className="font-mono text-lg font-bold">94.6%</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {activity.map(([title, detail, colorClass]) => (
                    <div key={title} className="group rounded-[8px] bg-white/10 p-3 transition-colors hover:bg-white/20">
                      <div className="flex items-center gap-3">
                        <span className={`h-3 w-3 rounded-full ${colorClass} animate-pulse`} />
                        <div>
                          <p className="text-sm font-bold group-hover:text-forsythia transition-colors">{title}</p>
                          <p className="text-xs text-arctic/70">{detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#features"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-nocturnal/70 lg:flex hover:text-nocturnal transition-colors"
        >
          Scroll
          <span className="grid h-8 w-8 place-items-center rounded-full border border-nocturnal/20">
            <Icon name="chevronDown" className="h-4 w-4 animate-bob" />
          </span>
        </a>
      </div>
    </section>
  );
}
