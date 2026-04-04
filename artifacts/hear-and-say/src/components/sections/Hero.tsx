import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-0">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-end">

          {/* Text Content */}
          <div className="flex flex-col space-y-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111111] leading-[1.1] tracking-tight">
              Mining &amp; Industrial<br />
              Support Services
            </h1>

            <p className="text-lg md:text-xl text-[#555555] leading-relaxed">
              Built for demanding environments. Focused on reliability, safety, and operational excellence. Lethuxolo Trading delivers dependable industrial support across logistics, machinery, and infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#ffd200] hover:bg-[#b39400] text-[#111111] rounded-[10px] px-8 h-14 text-base font-bold shadow-none w-full sm:w-auto"
                data-testid="button-get-quote"
              >
                Get Quote
              </Button>

              <a
                href="#profile"
                className="inline-flex items-center text-[#111111] font-semibold hover:text-[#ffd200] transition-colors text-base group"
                data-testid="link-download-profile"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Company Profile
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image — portrait orientation */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] lg:max-w-none lg:w-[88%] xl:w-[80%]">
              {/* Portrait frame */}
              <div className="relative rounded-[6px] overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src="/images/hero-mining.png"
                  alt="Heavy mining and industrial operations"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Bottom text overlay inside image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">Mpumalanga, South Africa</p>
                  <p className="text-white font-bold text-base leading-snug">Active mining & industrial operations</p>
                </div>
              </div>

              {/* Floating badge — anchored to top-right of portrait */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-[#ffd200] rounded-[4px] shadow-lg px-4 py-3">
                <span className="font-bold text-[#111111] text-xl leading-none block">4M+</span>
                <span className="text-[10px] text-[#111111]/70 font-semibold tracking-wide uppercase leading-none">Tons Handled</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
