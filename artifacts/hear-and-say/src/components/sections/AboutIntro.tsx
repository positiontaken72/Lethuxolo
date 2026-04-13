import { ArrowRight } from "lucide-react";

export function AboutIntro() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: text block */}
          <div>
            <p className="text-[9px] tracking-[0.45em] uppercase font-bold text-[#ffd200] mb-5 md:mb-6" style={{ fontFamily: "var(--app-font-heading)" }}>
              Who We Are
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-[#111111] leading-[1.08] mb-5 md:mb-6" style={{ fontFamily: "var(--app-font-heading)" }}>
              How can we<br />help you?
            </h2>
            <p className="text-[#555555] text-base md:text-[17px] leading-relaxed mb-4 max-w-lg font-light" style={{ fontFamily: "var(--app-font-sans)" }}>
              Lethuxolo Trading is a South African mining and industrial
              support services company, strategically headquartered in
              Mpumalanga, the country's coal and mining heartland.
            </p>
            <p className="text-[#555555] text-base md:text-[17px] leading-relaxed mb-8 md:mb-10 max-w-lg font-light" style={{ fontFamily: "var(--app-font-sans)" }}>
              We are more than a service provider. We are an operational
              partner built to integrate into demanding environments and
              deliver without disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[#111111] text-sm font-bold tracking-wide hover:text-[#ffd200] transition-colors group border-b border-[#111111]/25 hover:border-[#ffd200]/60 pb-0.5"
              >
                Explore our services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-[#111111] text-sm font-bold tracking-wide hover:text-[#ffd200] transition-colors group border-b border-[#111111]/25 hover:border-[#ffd200]/60 pb-0.5"
              >
                About us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: image — landscape on mobile, square on desktop */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-square overflow-hidden bg-[#f0f0f0]">
              <img
                src="/images/hero-open-pit.jpeg"
                alt="Lethuxolo Trading operations"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
