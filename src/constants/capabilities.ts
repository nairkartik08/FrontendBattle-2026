import type { ComponentProps } from "react";
import { Icon } from "../components/Icon";

type IconName = ComponentProps<typeof Icon>["name"];

export type Capability = {
  title: string;
  description: string;
  icon: IconName;
  metric: string;
};

export const capabilities: Capability[] = [
  {
    title: "Trigger orchestration",
    description: "Coordinate webhooks, schedules, and manual approvals through one deterministic execution layer.",
    icon: "arrowPath",
    metric: "500ms cap",
  },
  {
    title: "Knowledge linking",
    description: "Connect every automation to the exact dataset, customer record, and decision trail that shaped it.",
    icon: "link",
    metric: "Zero blind spots",
  },
  {
    title: "Operational search",
    description: "Find workflows, stalled approvals, and ownership gaps with a searchable command surface.",
    icon: "search",
    metric: "1 query",
  },
  {
    title: "Risk controls",
    description: "Pause unsafe automations, close loops, and require review before sensitive actions run.",
    icon: "xMark",
    metric: "Policy first",
  },
];
