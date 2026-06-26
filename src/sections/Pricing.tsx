import { memo, useCallback, useMemo } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { Icon } from "../components/Icon";
import { billingCycles, currencyOptions, pricingMatrix } from "../constants/pricing";
import type { BillingCycle, CurrencyCode, PricingTierId } from "../types/pricing";
import { cn } from "../utils/cn";
import { calculatePrice, formatPrice } from "../utils/pricing";
import { setBilling, setCurrency, usePricingSnapshot } from "../utils/pricingStore";

const tierIds = Object.keys(pricingMatrix) as PricingTierId[];

const PriceText = memo(function PriceText({
  tierId,
}: {
  tierId: PricingTierId;
}) {
  const { billing, currency } = usePricingSnapshot();
  const price = useMemo(() => {
    const tier = pricingMatrix[tierId];
    return formatPrice(calculatePrice(tier.baseUsdMonthly, billing, currency), currency);
  }, [billing, currency, tierId]);

  return (
    <span className="font-mono text-4xl font-bold tracking-normal text-oceanic" aria-live="polite">
      {price}
    </span>
  );
});

const BillingNote = memo(function BillingNote() {
  const { billing } = usePricingSnapshot();

  return (
    <p className="mt-2 text-xs font-semibold text-nocturnal/62">
      {billing === "annual" ? "Billed annually with automatic 20% discount." : "Billed monthly. Switch anytime."}
    </p>
  );
});

const PricingCard = memo(function PricingCard({
  tierId,
}: {
  tierId: PricingTierId;
}) {
  const tier = pricingMatrix[tierId];

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[8px] border p-5 transition duration-[360ms] ease-structure",
        tier.highlight ? "border-forsythia bg-white shadow-panel" : "border-nocturnal/10 bg-white/58",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-oceanic">{tier.name}</h3>
          <p className="mt-3 min-h-14 text-sm leading-6 text-nocturnal/76">{tier.summary}</p>
        </div>
        {tier.highlight ? (
          <span className="rounded-[8px] bg-forsythia px-3 py-1 font-mono text-xs font-bold uppercase text-oceanic">
            Popular
          </span>
        ) : null}
      </div>

      <div className="mt-7 flex items-end gap-2">
        <PriceText tierId={tierId} />
        <span className="pb-2 text-sm font-semibold text-nocturnal/65">/mo</span>
      </div>
      <BillingNote />

      <ul className="mt-7 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm font-semibold text-nocturnal/78">
            <Icon name="chevronUpSolid" className="mt-0.5 h-4 w-4 rotate-90" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ButtonLink href="#cta" variant={tier.highlight ? "primary" : "secondary"} className="mt-8 w-full">
        Choose {tier.name}
        <Icon name="chevronRight" className={cn("h-4 w-4", tier.highlight ? "invert" : "")} />
      </ButtonLink>
    </article>
  );
});

export function Pricing() {
  const pricingState = usePricingSnapshot();

  const updateBilling = useCallback((billing: BillingCycle) => {
    setBilling(billing);
  }, []);

  const updateCurrency = useCallback((currency: CurrencyCode) => {
    setCurrency(currency);
  }, []);

  return (
    <section id="pricing" className="bg-mint/45 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-nocturnal/70">Pricing</p>
            <h2 id="pricing-title" className="mt-4 font-mono text-3xl font-bold leading-tight text-oceanic sm:text-5xl">
              Matrix-driven plans that scale across currencies and billing cycles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-nocturnal/78">
              Prices are computed from base tier rates, regional tariff multipliers, and the annual discount rather than
              hardcoded display values.
            </p>
          </div>

          <div className="rounded-[8px] border border-nocturnal/10 bg-white/62 p-3 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">
              <fieldset>
                <legend className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-nocturnal/65">Billing</legend>
                <div className="grid grid-cols-2 rounded-[8px] bg-mint p-1">
                  {billingCycles.map((cycle) => (
                    <button
                      key={cycle.id}
                      type="button"
                      onClick={() => updateBilling(cycle.id)}
                      className={cn(
                        "rounded-[6px] px-3 py-2 text-sm font-bold transition duration-200 ease-premium",
                        pricingState.billing === cycle.id ? "bg-oceanic text-arctic" : "text-nocturnal/72 hover:bg-white/60",
                      )}
                      aria-pressed={pricingState.billing === cycle.id}
                    >
                      {cycle.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-nocturnal/65">Currency</legend>
                <div className="grid grid-cols-3 rounded-[8px] bg-mint p-1">
                  {currencyOptions.map((currency) => (
                    <button
                      key={currency.code}
                      type="button"
                      onClick={() => updateCurrency(currency.code)}
                      className={cn(
                        "rounded-[6px] px-3 py-2 text-sm font-bold transition duration-200 ease-premium",
                        pricingState.currency === currency.code
                          ? "bg-forsythia text-oceanic"
                          : "text-nocturnal/72 hover:bg-white/60",
                      )}
                      aria-pressed={pricingState.currency === currency.code}
                    >
                      {currency.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tierIds.map((tierId) => (
            <PricingCard key={tierId} tierId={tierId} />
          ))}
        </div>
      </div>
    </section>
  );
}
