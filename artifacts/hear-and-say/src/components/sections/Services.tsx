import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const services = [
  {
    title: "Bulk Transportation",
    category: "Logistics",
    description:
      "Reliable movement of coal, manganese, and steel across supply chains. Full fleet readiness with real-time coordination, keeping operations running without interruption.",
    image: "/images/service-bulk-transport-lt.webp",
    id: "bulk-transport",
  },
  {
    title: "Yellow Plant Machinery",
    category: "Equipment",
    description:
      "Provision and operation of excavators, loaders, and dump trucks. Performance and uptime are non-negotiable. Rapid mobilization for any scale of operation.",
    image: "/images/service-yellow-plant-lt.jpg",
    id: "yellow-plant",
  },
  {
    title: "Road Maintenance",
    category: "Infrastructure",
    description:
      "Grading, resurfacing, and rehabilitation of mining roads. We keep access routes operational, safe, and compliant under the most demanding conditions.",
    image: "/images/service-road-maintenance-lt.jpg",
    id: "road-maintenance",
  },
  {
    title: "Industrial Cleaning",
    category: "Operations",
    description:
      "Large-scale cleaning services built around compliance and safety. Executed with full protocol adherence across industrial and mining environments.",
    image: "/images/service-industrial-cleaning-lt.webp",
    id: "industrial-cleaning",
  },
  {
    title: "Supply of Goods",
    category: "Procurement",
    description:
      "End-to-end procurement and delivery of materials and equipment. Eliminating supply delays and keeping active operations fully resourced.",
    image: "/images/service-supply-goods-lt.jpeg",
    id: "supply-goods",
  },
  {
    title: "Lighting Solutions",
    category: "Site Services",
    description:
      "Portable lighting plants deployed for night operations and low-visibility sites. Rapid setup, industrial-grade reliability.",
    image: "/images/service-lighting.png",
    id: "lighting",
  },
];

const INTERVAL_MS = 3800;

export function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number, dir?: "next" | "prev") => {
      setPrevActive(active);
      setDirection(dir ?? (index > active ? "next" : "prev"));
      setActive(index);
    },
    [active]
  );

  const goNext = useCallback(() => {
    goTo((active + 1) % services.length, "next");
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo((active - 1 + services.length) % services.length, "prev");
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, goNext]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <section id="services" className="bg-white">

      {/* White header strip */}
      <div className="container mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-bold text-[#ffd200] mb-3 md:mb-4" style={{ fontFamily: "var(--app-font-heading)" }}>
              What We Deliver
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] leading-tight" style={{ fontFamily: "var(--app-font-heading)" }}>
              Our Services
            </h2>
          </div>
          <p className="text-[#888888] text-sm leading-relaxed max-w-xs md:text-right font-light" style={{ fontFamily: "var(--app-font-sans)" }}>
            Six specialised service lines built for the demands of mining and
            heavy industry.
          </p>
        </div>
      </div>

      {/* Cinematic panel */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(420px, 62vh, 700px)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background image layers — crossfade */}
        {services.map((service, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: active === i ? 1 : 0 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.10) 100%)",
              }}
            />
          </div>
        ))}

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between">

          {/* Service info — vertically centered */}
          <div className="flex-1 flex items-center">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-xl w-full">

                {/* Category + counter */}
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <span className="text-[#ffd200] text-[10px] tracking-[0.35em] uppercase font-bold">
                    {services[active].category}
                  </span>
                  <span className="text-white/20 text-[10px]">·</span>
                  <span className="text-white/30 text-[10px] font-mono tracking-wider">
                    {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-3 md:mb-5 tracking-tight">
                  {services[active].title}
                </h3>

                {/* Description */}
                <p className="text-white/65 text-sm leading-relaxed max-w-md mb-6 md:mb-8">
                  {services[active].description}
                </p>

                {/* CTA */}
                <a
                  href={`#${services[active].id}`}
                  className="inline-flex items-center gap-2 text-white border-b border-white/30 hover:border-[#ffd200] hover:text-[#ffd200] transition-colors text-sm font-bold pb-0.5 tracking-wide group"
                >
                  Request this service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom nav strip */}
          <div className="border-t border-white/10 bg-black/40 backdrop-blur-[2px]">
            <div className="container mx-auto px-6 md:px-8">

              {/* Desktop: all tabs */}
              <div className="hidden md:flex">
                {services.map((service, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`flex-1 py-4 px-2 text-center transition-all duration-300 border-t-2 group ${
                      active === i
                        ? "border-[#ffd200] text-white"
                        : "border-transparent text-white/35 hover:text-white/70"
                    }`}
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] leading-tight">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile: title + arrows */}
              <div className="flex md:hidden items-center justify-between py-4">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  aria-label="Previous"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="text-center px-4">
                  <p className="text-white text-xs font-bold uppercase tracking-wider">
                    {services[active].title}
                  </p>
                  <p className="text-white/30 text-[10px] mt-0.5">
                    {active + 1} of {services.length}
                  </p>
                </div>
                <button
                  onClick={goNext}
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  aria-label="Next"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Side arrow controls — desktop only */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-none bg-white/10 hover:bg-[#ffd200] border border-white/20 hover:border-[#ffd200] items-center justify-center transition-all duration-200 hidden md:flex group"
          aria-label="Previous service"
        >
          <ArrowLeft className="w-4 h-4 text-white group-hover:text-[#111111]" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-none bg-white/10 hover:bg-[#ffd200] border border-white/20 hover:border-[#ffd200] items-center justify-center transition-all duration-200 hidden md:flex group"
          aria-label="Next service"
        >
          <ArrowRight className="w-4 h-4 text-white group-hover:text-[#111111]" />
        </button>

        {/* Auto-progress bar */}
        {!paused && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 z-20">
            <div
              key={active}
              className="h-full bg-[#ffd200]"
              style={{
                animation: `progressBar ${INTERVAL_MS}ms linear forwards`,
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

    </section>
  );
}
