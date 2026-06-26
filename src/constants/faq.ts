export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Can FlowPilot connect to our existing tools?",
    answer:
      "Yes. It is designed around webhook, CRM, database, and approval-system handoffs so teams can automate without replacing their current stack.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing starts from the base USD tier rate, applies the selected regional tariff, then applies a 20% discount automatically for annual billing.",
  },
  {
    question: "Does the platform support approval gates?",
    answer:
      "Yes. Sensitive workflows can require human review, policy checks, and rollback paths before actions run.",
  },
  {
    question: "What happens if a workflow fails?",
    answer:
      "FlowPilot surfaces the failure, owner, source data, and recovery path in the operations cockpit so teams can resolve issues quickly.",
  },
];
