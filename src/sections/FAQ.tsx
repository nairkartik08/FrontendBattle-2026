import { useState } from "react";
import { Icon } from "../components/Icon";
import { faqItems } from "../constants/faq";
import { cn } from "../utils/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-arctic px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-nocturnal/70">FAQ</p>
          <h2 id="faq-title" className="mt-4 font-mono text-3xl font-bold leading-tight text-oceanic sm:text-5xl">
            Clear answers before your first automation goes live.
          </h2>
          <p className="mt-5 text-lg leading-8 text-nocturnal/78">
            Built for fast evaluations, production deployment, and audit-friendly automation programs.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const open = openIndex === index;

            return (
              <article key={item.question} className="overflow-hidden rounded-[8px] border border-nocturnal/10 bg-white/70">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-lg font-bold text-oceanic">{item.question}</span>
                  <Icon name={open ? "chevronUp" : "chevronDown"} className="h-5 w-5 shrink-0" />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-[360ms] ease-structure",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-nocturnal/10 px-5 py-5 text-sm leading-7 text-nocturnal/76">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
