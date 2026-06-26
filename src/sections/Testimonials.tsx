import { Icon } from "../components/Icon";
import { testimonials } from "../constants/testimonials";

export function Testimonials() {
  return (
    <section className="bg-arctic px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-nocturnal/70">Testimonials</p>
            <h2 id="testimonials-title" className="mt-4 font-mono text-3xl font-bold leading-tight text-oceanic sm:text-5xl">
              Operators trust it when the workflow has to land cleanly.
            </h2>
          </div>
          <div className="flex gap-2" aria-hidden="true">
            <span className="grid h-11 w-11 place-items-center rounded-[8px] border border-nocturnal/10 bg-white/60">
              <Icon name="chevronLeft" className="h-5 w-5" />
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-oceanic">
              <Icon name="chevronRight" className="h-5 w-5 invert" />
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex min-h-72 flex-col justify-between rounded-[8px] border border-nocturnal/10 bg-white/62 p-5 shadow-sm transition duration-200 ease-premium hover:-translate-y-1 hover:shadow-panel"
            >
              <blockquote className="text-lg font-semibold leading-8 text-oceanic">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-8 border-t border-nocturnal/10 pt-5">
                <p className="font-bold text-oceanic">{testimonial.name}</p>
                <p className="mt-1 text-sm font-semibold text-nocturnal/68">
                  {testimonial.role}, {testimonial.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
