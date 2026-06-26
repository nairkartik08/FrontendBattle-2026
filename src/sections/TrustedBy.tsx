const companies = ["Aster Bank", "Northstar Labs", "HelioGrid", "Quantive", "MosaicOps"];

export function TrustedBy() {
  return (
    <section className="border-y border-nocturnal/10 bg-mint/55 px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="trusted-by-title">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <h2 id="trusted-by-title" className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-nocturnal/70">
          Trusted by automation-led teams
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:justify-end">
          {companies.map((company) => (
            <li
              key={company}
              className="rounded-[8px] border border-nocturnal/10 bg-white/45 px-4 py-3 text-center text-sm font-bold text-oceanic backdrop-blur"
            >
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
