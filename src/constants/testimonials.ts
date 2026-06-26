export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "FlowPilot replaced three fragile handoff chains with one calm automation layer our ops team actually trusts.",
    name: "Mira Shah",
    role: "VP Revenue Operations",
    company: "Aster Bank",
  },
  {
    quote: "The context lock between analytics and approvals is the reason our managers stopped asking for spreadsheet exports.",
    name: "Theo Grant",
    role: "Head of Automation",
    company: "Northstar Labs",
  },
  {
    quote: "We moved from reactive cleanup to proactive orchestration in the first week. The audit trail made compliance painless.",
    name: "Leah Kim",
    role: "Data Platform Lead",
    company: "HelioGrid",
  },
];
