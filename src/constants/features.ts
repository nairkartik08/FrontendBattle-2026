import type { ComponentProps } from "react";
import { Icon } from "../components/Icon";

type IconName = ComponentProps<typeof Icon>["name"];

export type Feature = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: IconName;
  stat: string;
  className: string;
};

export const features: Feature[] = [
  {
    id: "ingest",
    title: "Universal data intake",
    eyebrow: "Connect",
    description: "Pull events from forms, CRMs, webhooks, and internal tables into one governed queue.",
    icon: "linkSolid",
    stat: "120+ sources",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "reason",
    title: "AI routing logic",
    eyebrow: "Decide",
    description: "Classify requests, detect anomalies, and route work to the right owner before queues pile up.",
    icon: "arrowPath",
    stat: "8.4x faster triage",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: "watchtower",
    title: "Live watchtower",
    eyebrow: "Observe",
    description: "Track workflow health, revenue impact, and risky handoffs from a single operations cockpit.",
    icon: "chartPie",
    stat: "99.98% uptime",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: "deploy",
    title: "No-code deployment",
    eyebrow: "Launch",
    description: "Ship automations with approval gates, rollback paths, and audit trails built into every flow.",
    icon: "cubeSolid",
    stat: "12 min to live",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "optimize",
    title: "Continuous optimization",
    eyebrow: "Improve",
    description: "Surface slow steps, tune prompts, and recommend workflow changes from live performance data.",
    icon: "cogTooth",
    stat: "34% fewer delays",
    className: "md:col-span-3 md:row-span-1",
  },
];
