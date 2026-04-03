import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] rounded-full border-[40px] border-gray-50/50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full border-[20px] border-gray-50/50 pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

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

          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-[4/3] md:aspect-[16/10] lg:aspect-square xl:aspect-[4/3]">
              <img
                src="/images/hero-mining.png"
                alt="Heavy mining and industrial operations"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-[#ffd200] rounded-xl shadow-lg p-4 flex items-center gap-4"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex flex-col">
                <span className="font-bold text-[#111111] text-lg">4M+ Tons</span>
                <span className="text-xs text-[#111111]/70 font-medium">Coal Handled</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
