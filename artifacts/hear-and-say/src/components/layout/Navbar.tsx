import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Bulk Transportation", href: "#bulk-transport" },
  { label: "Yellow Plant Machinery", href: "#yellow-plant" },
  { label: "Road Maintenance", href: "#road-maintenance" },
  { label: "Industrial Cleaning", href: "#industrial-cleaning" },
  { label: "Supply of Goods", href: "#supply-goods" },
  { label: "Lighting Solutions", href: "#lighting" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-[#111111]">
        <div className="px-6 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/lethuxolo-logo.png"
              alt="Lethuxolo Trading Logo"
              className="h-9 w-9 object-contain rounded-full"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-semibold text-[15px] tracking-wide whitespace-nowrap" style={{ fontFamily: "var(--app-font-heading)" }}>
                Lethuxolo Trading
              </span>
              <span className="text-white/35 text-[10px] tracking-[0.18em] uppercase whitespace-nowrap font-light">
                Inspired by the Impossible
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[11px] font-semibold text-white/55 hover:text-white transition-colors tracking-[0.15em] uppercase"
              >
                {link.label}
              </a>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-[11px] font-semibold text-white/55 hover:text-white transition-colors tracking-[0.15em] uppercase outline-none">
                Services <ChevronDown className="w-3 h-3 mt-px" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-[#1a1a1a] border-white/10 rounded-none w-56 p-1"
              >
                {serviceLinks.map((s) => (
                  <DropdownMenuItem key={s.label} className="rounded-none focus:bg-white/5">
                    <a
                      href={s.href}
                      className="w-full text-[11px] text-white/60 hover:text-white tracking-wide uppercase py-0.5"
                    >
                      {s.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="ml-4 pl-4 border-l border-white/10">
              <a
                href="#contact"
                className="inline-block bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors"
              >
                Get Quote
              </a>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-white p-1 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div className="w-[300px] bg-[#111111] h-full flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/8">
              <span className="text-white font-semibold text-sm tracking-wide" style={{ fontFamily: "var(--app-font-heading)" }}>
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[11px] font-semibold text-white/50 hover:text-white tracking-[0.18em] uppercase border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="py-3 border-b border-white/5">
                <p className="text-[10px] text-white/30 tracking-[0.18em] uppercase mb-3 font-semibold">Services</p>
                <div className="flex flex-col gap-2">
                  {serviceLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[11px] text-white/40 hover:text-white/80 tracking-wide pl-2 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            <div className="px-6 pb-8">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] py-4 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
