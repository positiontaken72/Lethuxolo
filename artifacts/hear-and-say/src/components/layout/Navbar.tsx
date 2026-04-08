import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="w-full sticky top-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 1px 0 0 #e5e5e5" : "none", borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="px-6 md:px-8 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/lethuxolo-logo.png"
              alt="Lethuxolo Trading Logo"
              className="h-9 w-9 object-contain rounded-full"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span
                className="text-[#111111] font-bold text-[15px] tracking-tight whitespace-nowrap"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "-0.01em" }}
              >
                Lethuxolo Trading
              </span>
              <span className="text-[#888888] text-[9.5px] tracking-[0.22em] uppercase whitespace-nowrap font-medium">
                Inspired by the Impossible
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-[#444444] hover:text-[#111111] transition-colors"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {link.label}
              </a>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-[#444444] hover:text-[#111111] transition-colors outline-none"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Services <ChevronDown className="w-3.5 h-3.5 mt-px opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-white border border-[#e8e8e8] rounded-none shadow-lg w-60 p-1.5"
              >
                {serviceLinks.map((s) => (
                  <DropdownMenuItem key={s.label} className="rounded-none focus:bg-[#f7f7f7] px-0">
                    <a
                      href={s.href}
                      className="w-full text-[13px] text-[#444444] hover:text-[#111111] px-3 py-1.5 block"
                      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                    >
                      {s.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="ml-5 pl-5 border-l border-[#e5e5e5]">
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
            className="lg:hidden text-[#444444] hover:text-[#111111] p-1 transition-colors"
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
          <div
            className="flex-1 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-[300px] bg-white h-full flex flex-col border-l border-[#e8e8e8]">
            <div className="flex items-center justify-between px-6 h-[68px] border-b border-[#e8e8e8]">
              <span
                className="text-[#111111] font-bold text-[15px]"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#888888] hover:text-[#111111] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 gap-0 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 text-[13px] text-[#444444] hover:text-[#111111] border-b border-[#f0f0f0] transition-colors"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="py-4 border-b border-[#f0f0f0]">
                <p
                  className="text-[10px] text-[#aaaaaa] tracking-[0.2em] uppercase mb-3 font-semibold"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  Services
                </p>
                <div className="flex flex-col gap-2.5">
                  {serviceLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[13px] text-[#666666] hover:text-[#111111] transition-colors"
                      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
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
