import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const slides = [
  {
    image: "/images/hero-open-pit.jpeg",
    label: "LETHUXOLO TRADING",
    title: "Mining & Industrial\nSupport Services.",
    cta: "Explore our services",
    href: "#services",
  },
  {
    image: "/images/service-bulk-transport-new.png",
    label: "LOGISTICS",
    title: "Bulk Transportation\nAcross South Africa.",
    cta: "Bulk transportation",
    href: "#bulk-transport",
  },
  {
    image: "/images/service-yellow-plant.png",
    label: "EQUIPMENT",
    title: "Yellow Plant\nMachinery Operations.",
    cta: "Plant machinery",
    href: "#yellow-plant",
  },
  {
    image: "/images/service-road-maintenance-new.jpg",
    label: "INFRASTRUCTURE",
    title: "Road Maintenance\n& Rehabilitation.",
    cta: "Road maintenance",
    href: "#road-maintenance",
  },
  {
    image: "/images/service-industrial-cleaning-new.jpeg",
    label: "OPERATIONS",
    title: "Industrial Cleaning\nAt Scale.",
    cta: "Industrial cleaning",
    href: "#industrial-cleaning",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111111]"
      style={{ height: "calc(100vh - 64px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: active === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Arcadis-style: strong bottom gradient + left fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.10) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.30) 0%, transparent 60%)",
            }}
          />
        </div>
      ))}

      {/* Bottom content bar */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-end justify-between gap-8">

            {/* Text — left side */}
            <div className="flex-1 max-w-2xl">
              <p className="text-[#ffd200] text-[9px] tracking-[0.45em] uppercase font-bold mb-5">
                {slides[active].label}
              </p>
              <h1
                className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold text-white leading-[1.02] mb-6"
                style={{ fontFamily: "var(--app-font-heading)" }}
              >
                {slides[active].title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>
              <a
                href={slides[active].href}
                className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-wide hover:text-[#ffd200] transition-colors group border-b border-white/25 hover:border-[#ffd200]/60 pb-0.5"
              >
                {slides[active].cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Controls — right side (Arcadis-style) */}
            <div className="shrink-0 flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-9 h-9 border border-white/25 hover:border-[#ffd200] hover:text-[#ffd200] text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Previous"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 border border-white/25 hover:border-[#ffd200] hover:text-[#ffd200] text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Next"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-white/40 font-mono text-[11px] tracking-widest">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Progress bar — Arcadis style (thin line, fills per slide) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
        <div
          className="h-full bg-[#ffd200] transition-all duration-300"
          style={{ width: `${((active + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
