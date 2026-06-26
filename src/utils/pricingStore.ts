import { useSyncExternalStore } from "react";
import type { BillingCycle, CurrencyCode } from "../types/pricing";

type PricingSnapshot = {
  billing: BillingCycle;
  currency: CurrencyCode;
};

let snapshot: PricingSnapshot = {
  billing: "monthly",
  currency: "USD",
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function setBilling(billing: BillingCycle) {
  if (snapshot.billing === billing) {
    return;
  }

  snapshot = { ...snapshot, billing };
  emit();
}

export function setCurrency(currency: CurrencyCode) {
  if (snapshot.currency === currency) {
    return;
  }

  snapshot = { ...snapshot, currency };
  emit();
}

export function usePricingSnapshot() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => snapshot,
    () => snapshot,
  );
}
