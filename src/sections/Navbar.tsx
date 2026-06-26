import { BrandMark } from "../components/BrandMark";
import { ButtonLink } from "../components/ButtonLink";
import { Icon } from "../components/Icon";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/35 bg-arctic/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <BrandMark />
        <div className="hidden items-center gap-1 rounded-[8px] border border-nocturnal/10 bg-white/45 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[6px] px-4 py-2 text-sm font-semibold text-nocturnal/80 transition duration-200 ease-premium hover:bg-mint hover:text-oceanic"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#search"
            className="hidden h-11 w-11 place-items-center rounded-[8px] border border-nocturnal/15 bg-white/50 transition duration-200 ease-premium hover:-translate-y-0.5 hover:bg-white sm:grid"
            aria-label="Search platform"
          >
            <Icon name="search" className="h-4 w-4" />
          </a>
          <ButtonLink href="#pricing" className="hidden sm:inline-flex">
            Start free
            <Icon name="chevronRight" className="h-4 w-4 invert" />
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
