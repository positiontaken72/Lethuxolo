import { ChevronDown, Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#services" },
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="w-full sticky top-0 z-50 bg-white"
        style={{
          borderBottom: "1.5px solid #e0e0e0",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.07)" : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        <div className="px-6 md:px-10 h-[76px] flex items-center justify-between gap-8">

          {/* ── Logo block ── */}
          <a href="/" className="flex items-center gap-4 shrink-0 group">
            <img
              src="/lethuxolo-logo.png"
              alt="Lethuxolo Trading"
              className="h-12 w-12 object-contain rounded-full ring-2 ring-[#ffd200]/30 group-hover:ring-[#ffd200]/60 transition-all"
            />
            <div className="flex flex-col justify-center leading-none">
              <span
                className="text-[#111111] font-black text-[22px] tracking-tight leading-tight whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-heading)", letterSpacing: "-0.02em" }}
              >
                Lethuxolo Trading
              </span>
              <span
                className="text-[#888888] text-[10px] tracking-[0.28em] uppercase font-semibold mt-[3px] whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-sans)" }}
              >
                Inspired by the Impossible
              </span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[14.5px] font-medium text-[#333333] hover:text-[#111111] transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-sans)" }}
              >
                {link.label}
              </a>
            ))}

            {/* Services dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center gap-1 px-4 py-2 text-[14.5px] font-medium text-[#333333] hover:text-[#111111] transition-colors outline-none whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-sans)" }}
              >
                Services <ChevronDown className="w-4 h-4 mt-0.5 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white border border-[#e0e0e0] rounded-none shadow-xl w-64 p-2"
              >
                {serviceLinks.map((s) => (
                  <DropdownMenuItem
                    key={s.label}
                    className="rounded-none focus:bg-[#f5f5f5] px-0 py-0"
                  >
                    <a
                      href={s.href}
                      className="w-full text-[13.5px] font-medium text-[#444444] hover:text-[#111111] px-3 py-2.5 block transition-colors"
                      style={{ fontFamily: "var(--app-font-sans)" }}
                    >
                      {s.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search icon */}
            <button
              className="p-2.5 ml-1 text-[#666666] hover:text-[#111111] transition-colors"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* CTA */}
            <div className="ml-3 pl-3 border-l border-[#e0e0e0]">
              <a
                href="#contact"
                className="inline-block bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] px-6 py-2.5 text-[12px] font-bold tracking-[0.12em] uppercase transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-sans)" }}
              >
                Get Quote
              </a>
            </div>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden text-[#444444] hover:text-[#111111] p-1 ml-auto transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="flex-1 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-[300px] bg-white h-full flex flex-col border-l border-[#e0e0e0] shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-[76px] border-b border-[#e8e8e8]">
              <div className="flex items-center gap-3">
                <img
                  src="/lethuxolo-logo.png"
                  alt="Lethuxolo"
                  className="h-9 w-9 object-contain rounded-full"
                />
                <span
                  className="text-[#111111] font-black text-[15px] tracking-tight"
                  style={{ fontFamily: "var(--app-font-heading)" }}
                >
                  Lethuxolo Trading
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#888888] hover:text-[#111111] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-6 py-5 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-[14px] font-medium text-[#333333] hover:text-[#111111] border-b border-[#f0f0f0] transition-colors"
                  style={{ fontFamily: "var(--app-font-sans)" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="py-4 border-b border-[#f0f0f0]">
                <p
                  className="text-[10px] text-[#aaaaaa] tracking-[0.22em] uppercase mb-3 font-bold"
                  style={{ fontFamily: "var(--app-font-sans)" }}
                >
                  Services
                </p>
                <div className="flex flex-col gap-3">
                  {serviceLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[13.5px] font-medium text-[#666666] hover:text-[#111111] transition-colors pl-1"
                      style={{ fontFamily: "var(--app-font-sans)" }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            <div className="px-6 pb-8 pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] py-4 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors"
                style={{ fontFamily: "var(--app-font-sans)" }}
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
