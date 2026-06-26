import type { BillingCycle, CurrencyCode, PricingTierId } from "../types/pricing";

export type PricingTier = {
  id: PricingTierId;
  name: string;
  summary: string;
  baseUsdMonthly: number;
  highlight?: boolean;
  features: string[];
};

export const billingCycles: Array<{ id: BillingCycle; label: string }> = [
  { id: "monthly", label: "Monthly" },
  { id: "annual", label: "Annual" },
];

export const currencyOptions: Array<{ code: CurrencyCode; label: string }> = [
  { code: "INR", label: "INR" },
  { code: "USD", label: "USD" },
  { code: "EUR", label: "EUR" },
];

export const regionalTariffs: Record<CurrencyCode, { multiplier: number; locale: string }> = {
  INR: { multiplier: 83, locale: "en-IN" },
  USD: { multiplier: 1, locale: "en-US" },
  EUR: { multiplier: 0.92, locale: "de-DE" },
};

export const pricingMatrix: Record<PricingTierId, PricingTier> = {
  starter: {
    id: "starter",
    name: "Starter",
    summary: "For lean teams automating their first revenue workflows.",
    baseUsdMonthly: 29,
    features: ["5 active workflows", "AI routing templates", "Slack and email alerts", "7-day audit history"],
  },
  growth: {
    id: "growth",
    name: "Growth",
    summary: "For scaling teams centralizing data intake and approvals.",
    baseUsdMonthly: 79,
    highlight: true,
    features: ["Unlimited workflow runs", "Anomaly detection", "Role-based approvals", "90-day audit history"],
  },
  scale: {
    id: "scale",
    name: "Scale",
    summary: "For operators managing mission-critical automation systems.",
    baseUsdMonthly: 149,
    features: ["Custom AI policies", "Priority queues", "Dedicated success review", "1-year audit history"],
  },
};

export const annualDiscount = 0.2;
