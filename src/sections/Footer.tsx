import { BrandMark } from "../components/BrandMark";
import { Icon } from "../components/Icon";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-nocturnal/10 bg-mint/55 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-md text-sm leading-6 text-nocturnal/72">
            AI-powered data automation for teams that need fast execution, clear ownership, and audit-ready workflows.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-[8px] px-3 py-2 text-sm font-bold text-nocturnal/76 transition duration-200 ease-premium hover:bg-white/60 hover:text-oceanic"
                >
                  {link.label}
                  <Icon name="chevronRight" className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-nocturnal/10 pt-5 text-xs font-semibold text-nocturnal/62 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 FlowPilot AI. Built for Frontend Battle.</p>
        <p>React · Vite · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
}
