import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-end overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-open-pit.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "60% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Desktop: smooth white-to-transparent gradient, left to right */}
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,1) 28%, rgba(255,255,255,0.92) 42%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.08) 80%, rgba(255,255,255,0) 100%)",
        }}
      />
      {/* Mobile: soft white veil so text is readable */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{ background: "rgba(255,255,255,0.82)" }}
      />

      {/* Very subtle bottom shadow to separate from next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-white/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 md:px-8 pt-36 pb-16 md:pb-20">
        <div className="max-w-[520px]">

          {/* Overline */}
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-[#ffd200]" />
            <p className="text-[10px] tracking-[0.42em] uppercase font-bold text-[#111111]/50">
              Mpumalanga, South Africa · Est. 2022
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-[#111111] leading-[1.0] tracking-[-0.02em] mb-8">
            Mining<br />&amp; Industrial<br />
            <span className="text-[#111111]/30">Support.</span>
          </h1>

          {/* Sub */}
          <p className="text-[15px] md:text-base text-[#444444] leading-relaxed mb-10 max-w-[380px]">
            Built for demanding environments. Reliability, safety, and
            operational excellence — delivered across Mpumalanga and beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Button
              size="lg"
              className="bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] rounded-none h-13 px-8 text-sm font-bold tracking-[0.08em] uppercase shadow-none"
            >
              Get Quote
            </Button>
            <a
              href="#profile"
              className="inline-flex items-center h-13 px-4 text-[#111111] font-semibold hover:text-[#ffd200] transition-colors text-sm group border-b border-[#111111]/15 hover:border-[#ffd200]/50 py-3"
            >
              <Download className="mr-2 w-4 h-4 shrink-0" />
              Download Company Profile
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

          {/* Stat row */}
          <div className="flex items-center gap-6 md:gap-10 mt-16 pt-8 border-t border-[#111111]/10">
            {[
              { val: "4M+", label: "Tons Handled" },
              { val: "6", label: "Core Services" },
              { val: "100%", label: "Client Focused" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-[#111111] leading-none">
                  {stat.val}
                </span>
                <span className="text-[9px] text-[#888888] uppercase tracking-[0.25em] font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
