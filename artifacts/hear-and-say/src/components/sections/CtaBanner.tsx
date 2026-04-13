import { ArrowRight, Download } from "lucide-react";

export function CtaBanner() {
  return (
    <section id="contact" className="bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

          {/* Left: text */}
          <div className="py-16 md:py-20 lg:py-28 pr-0 lg:pr-16 flex flex-col justify-center">
            <p className="text-[9px] tracking-[0.45em] uppercase font-bold text-[#ffd200] mb-5">
              Work With Us
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 md:mb-6"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Ready to get<br />started?
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-8 md:mb-10 max-w-sm">
              Whether you need operational support, a reliable logistics partner,
              or industrial services — we mobilize fast and deliver to spec.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#ffd200] text-[#111111] px-6 py-4 text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white transition-colors"
              >
                Download Company Profile
                <Download className="w-4 h-4 flex-shrink-0" />
              </a>
              <a
                href="mailto:info@lethuxolotrading.co.za"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-4 text-[11px] font-bold tracking-[0.18em] uppercase hover:border-[#ffd200] hover:text-[#ffd200] transition-colors"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Right: image panel — desktop only */}
          <div className="hidden lg:block relative overflow-hidden">
            <img
              src="/images/service-yellow-plant.png"
              alt="Lethuxolo operations"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Stats overlay on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "6", label: "Core Services" },
                  { value: "100%", label: "Client Focused" },
                  { value: "Level 1", label: "B-BBEE Certified" },
                  { value: "2022", label: "Established" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p
                      className="text-[#ffd200] text-3xl font-bold leading-none"
                      style={{ fontFamily: "var(--app-font-heading)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-white/40 text-[9px] tracking-[0.25em] uppercase mt-1 font-semibold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
