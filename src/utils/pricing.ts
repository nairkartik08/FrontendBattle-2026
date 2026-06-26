import { annualDiscount, regionalTariffs } from "../constants/pricing";
import type { BillingCycle, CurrencyCode } from "../types/pricing";

export function calculatePrice(baseUsdMonthly: number, billing: BillingCycle, currency: CurrencyCode) {
  const regional = regionalTariffs[currency];
  const monthlyRegionalPrice = baseUsdMonthly * regional.multiplier;
  const discountedMonthlyPrice = billing === "annual" ? monthlyRegionalPrice * (1 - annualDiscount) : monthlyRegionalPrice;

  return Math.round(discountedMonthlyPrice);
}

export function formatPrice(amount: number, currency: CurrencyCode) {
  const regional = regionalTariffs[currency];

  return new Intl.NumberFormat(regional.locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
