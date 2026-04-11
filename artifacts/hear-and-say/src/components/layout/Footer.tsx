import { Linkedin, Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">

        {/* Top border accent */}
        <div className="w-12 h-[3px] bg-[#ffd200] mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-white">
                <img
                  src="/lethuxolo-logo.png"
                  alt="Lethuxolo Trading Logo"
                  className="h-full w-full object-cover scale-125"
                />
              </div>
              <span
                className="text-white font-bold text-[16px] leading-tight"
                style={{ fontFamily: "var(--app-font-heading)" }}
              >
                Lethuxolo<br />Trading
              </span>
            </div>
            <p
              className="text-[13px] text-white/40 leading-relaxed max-w-[220px] font-light"
              style={{ fontFamily: "var(--app-font-sans)" }}
            >
              Inspired by the Impossible. Delivering reliable mining and
              industrial support services across South Africa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#ffd200] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@lethuxolotrading.co.za"
                className="text-white/30 hover:text-[#ffd200] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#ffd200] mb-6"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Our Services
            </p>
            <ul className="flex flex-col gap-3">
              {[
                ["Bulk Transportation", "#bulk-transport"],
                ["Yellow Plant Machinery", "#yellow-plant"],
                ["Road Maintenance", "#road-maintenance"],
                ["Industrial Cleaning", "#industrial-cleaning"],
                ["Supply of Goods", "#supply-goods"],
                ["Lighting Solutions", "#lighting"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13px] text-white/40 hover:text-white transition-colors font-light"
                    style={{ fontFamily: "var(--app-font-sans)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#ffd200] mb-6"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {[
                ["About Us", "#about"],
                ["Leadership", "#leadership"],
                ["Company Profile", "#profile"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13px] text-white/40 hover:text-white transition-colors font-light"
                    style={{ fontFamily: "var(--app-font-sans)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[9px] tracking-[0.35em] uppercase font-bold text-[#ffd200] mb-6"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Contact Us
            </p>
            <ul className="flex flex-col gap-3 text-[13px] text-white/40 font-light" style={{ fontFamily: "var(--app-font-sans)" }}>
              <li>066 518 4543</li>
              <li>info@lethuxolotrading.co.za</li>
              <li>Mpumalanga, South Africa</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 mt-6 text-[10px] font-semibold tracking-[0.18em] uppercase text-white hover:text-[#ffd200] transition-colors group"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Get a Quote
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[11px] text-white/25 tracking-wide font-light"
            style={{ fontFamily: "var(--app-font-sans)" }}
          >
            © {new Date().getFullYear()} Lethuxolo Trading. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] text-white/25" style={{ fontFamily: "var(--app-font-sans)" }}>
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
