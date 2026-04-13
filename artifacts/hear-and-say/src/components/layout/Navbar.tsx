import { ChevronDown, Menu, X, Linkedin, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Bulk Transportation", sub: "Logistics", href: "#bulk-transport" },
  { label: "Yellow Plant Machinery", sub: "Equipment", href: "#yellow-plant" },
  { label: "Road Maintenance", sub: "Infrastructure", href: "#road-maintenance" },
  { label: "Industrial Cleaning", sub: "Operations", href: "#industrial-cleaning" },
  { label: "Supply of Goods", sub: "Procurement", href: "#supply-goods" },
  { label: "Lighting Solutions", sub: "Site Services", href: "#lighting" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      <header
        className="w-full sticky top-0 z-50 bg-white"
        style={{
          borderBottom: "1.5px solid #e0e0e0",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        {/* Mobile height: 60px · Desktop height: 88px */}
        <div className="px-5 md:px-10 h-[60px] md:h-[88px] flex items-center justify-between">

          {/* ── Logo block ── */}
          <a href="/" className="flex items-center gap-3 md:gap-4 shrink-0 group">
            {/* Logo circle: 44px mobile, 64px desktop */}
            <div className="h-[44px] w-[44px] md:h-[64px] md:w-[64px] rounded-full ring-2 ring-[#ffd200]/30 group-hover:ring-[#ffd200]/70 transition-all overflow-hidden flex-shrink-0 bg-white">
              <img
                src="/lethuxolo-logo.png"
                alt="Lethuxolo Trading"
                className="h-full w-full object-cover scale-125"
              />
            </div>

            <div className="flex flex-col justify-center leading-none">
              {/* Company name: slightly smaller on mobile */}
              <span
                className="text-[#111111] font-extrabold text-[16px] md:text-[20px] leading-tight whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-heading)", letterSpacing: "0.01em" }}
              >
                Lethuxolo Trading
              </span>
              {/* Slogan: hidden on mobile, visible on desktop */}
              <span
                className="hidden md:block text-[#ffd200] text-[9.5px] tracking-[0.32em] uppercase font-semibold mt-[4px] whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-heading)" }}
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
                className="px-4 py-2 text-[14px] font-medium text-[#444444] hover:text-[#111111] transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-sans)" }}
              >
                {link.label}
              </a>
            ))}

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium text-[#444444] hover:text-[#111111] transition-colors outline-none whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-sans)" }}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  className="w-3.5 h-3.5 opacity-50 transition-transform duration-200"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute right-0 top-full mt-0 w-[420px] bg-[#111111] shadow-2xl z-50"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <div className="h-[3px] bg-[#ffd200]" />
                  <div className="p-2">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 group hover:bg-white/5 transition-colors"
                      >
                        <div>
                          <p
                            className="text-white text-[13.5px] font-semibold group-hover:text-[#ffd200] transition-colors"
                            style={{ fontFamily: "var(--app-font-heading)" }}
                          >
                            {s.label}
                          </p>
                          <p
                            className="text-white/35 text-[10px] tracking-[0.2em] uppercase mt-0.5"
                            style={{ fontFamily: "var(--app-font-sans)" }}
                          >
                            {s.sub}
                          </p>
                        </div>
                        <div className="w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-1.5 h-1.5 bg-[#ffd200] rotate-45" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="ml-3 pl-3 border-l border-[#e0e0e0]">
              <a
                href="#contact"
                className="inline-block bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] px-6 py-2.5 text-[12px] font-bold tracking-[0.12em] uppercase transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--app-font-heading)" }}
              >
                Get Quote
              </a>
            </div>
          </nav>

          {/* ── Mobile: Get Quote pill + hamburger ── */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="#contact"
              className="bg-[#ffd200] text-[#111111] px-4 py-2 text-[10px] font-bold tracking-[0.14em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Get Quote
            </a>
            <button
              className="text-[#444444] hover:text-[#111111] p-1 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile slide-in drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="flex-1 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-[280px] bg-white h-full flex flex-col border-l border-[#e0e0e0] shadow-2xl">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-[60px] border-b border-[#eeeeee]">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/lethuxolo-logo.png"
                    alt="Lethuxolo"
                    className="h-full w-full object-cover scale-125"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className="text-[#111111] font-extrabold text-[14px]"
                    style={{ fontFamily: "var(--app-font-heading)" }}
                  >
                    Lethuxolo Trading
                  </span>
                  <span
                    className="text-[#ffd200] text-[8px] tracking-[0.22em] uppercase font-semibold mt-0.5"
                    style={{ fontFamily: "var(--app-font-heading)" }}
                  >
                    Inspired by the Impossible
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#aaaaaa] hover:text-[#111111] transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-5 py-4 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 text-[13.5px] font-medium text-[#333333] hover:text-[#111111] border-b border-[#f0f0f0] transition-colors"
                  style={{ fontFamily: "var(--app-font-sans)" }}
                >
                  {link.label}
                </a>
              ))}

              <div className="py-4 border-b border-[#f0f0f0]">
                <p
                  className="text-[9px] text-[#ffd200] tracking-[0.28em] uppercase mb-3 font-bold"
                  style={{ fontFamily: "var(--app-font-heading)" }}
                >
                  Services
                </p>
                <div className="flex flex-col gap-0.5">
                  {serviceLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2.5 px-2 text-[13px] font-medium text-[#555555] hover:text-[#111111] hover:bg-[#f8f8f8] transition-colors"
                      style={{ fontFamily: "var(--app-font-sans)" }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="py-4 flex gap-4">
                <a href="#" className="text-[#aaaaaa] hover:text-[#111111] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:info@lethuxolotrading.co.za" className="text-[#aaaaaa] hover:text-[#111111] transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </nav>

            <div className="px-5 pb-8 pt-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] py-4 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors"
                style={{ fontFamily: "var(--app-font-heading)" }}
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
