import { MapPin, HardHat, ArrowRight } from "lucide-react";

export function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-[#F5F5F5] border-y border-border">
      <div className="container mx-auto px-4 md:px-8">

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 text-center md:text-left">
            Where We Operate
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl">
            Based in Mpumalanga — South Africa's key mining heartland — Lethuxolo Trading delivers operational support across the region and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* Card 1: Regional Base */}
          <a
            href="#contact"
            className="group bg-white rounded-[24px] p-8 md:p-10 border border-border shadow-sm hover:shadow-lg hover:border-[#ffd200]/40 transition-all duration-300 flex flex-col h-full"
            data-testid="card-regional-base"
          >
            <div className="w-16 h-16 bg-[#ffd200]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#ffd200]/20 transition-colors">
              <MapPin className="w-8 h-8 text-[#ffd200]" />
            </div>

            <h3 className="text-2xl font-bold text-[#111111] mb-4">Mpumalanga Base</h3>

            <p className="text-[#555555] mb-8 flex-grow text-lg">
              Strategically headquartered in Mpumalanga, we are positioned at the core of South Africa's coal and mining operations, enabling rapid deployment across the region.
            </p>

            <div className="inline-flex items-center text-[#111111] font-bold text-lg group-hover:translate-x-2 transition-transform">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </a>

          {/* Card 2: On-site Operations */}
          <a
            href="#services"
            className="group bg-[#111111] rounded-[24px] p-8 md:p-10 shadow-sm hover:shadow-lg hover:shadow-black/20 transition-all duration-300 flex flex-col h-full text-white"
            data-testid="card-onsite-operations"
          >
            <div className="w-16 h-16 bg-[#ffd200]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#ffd200]/30 transition-colors">
              <HardHat className="w-8 h-8 text-[#ffd200]" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">On-Site Deployment</h3>

            <p className="text-white/70 mb-8 flex-grow text-lg">
              Our teams integrate directly into your operations. From coal mines to industrial facilities, we mobilize quickly and maintain high performance standards throughout.
            </p>

            <div className="inline-flex items-center text-[#ffd200] font-bold text-lg group-hover:translate-x-2 transition-transform">
              View Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
