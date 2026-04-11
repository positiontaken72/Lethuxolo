import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Download } from "lucide-react";

const slides = [
  {
    image: "/images/hero-open-pit.jpeg",
    label: "Mining & Industrial",
    title: "Mining & Industrial\nSupport Services.",
    sub: "Mpumalanga, South Africa · Est. 2022",
    cta: "Explore our services",
    href: "#services",
  },
  {
    image: "/images/service-bulk-transport-new.png",
    label: "Logistics",
    title: "Bulk Transportation\nAcross South Africa.",
    sub: "Coal · Manganese · Steel",
    cta: "Bulk transportation",
    href: "#bulk-transport",
  },
  {
    image: "/images/service-yellow-plant.png",
    label: "Equipment",
    title: "Yellow Plant\nMachinery Operations.",
    sub: "Excavators · Loaders · Dump Trucks",
    cta: "Plant machinery",
    href: "#yellow-plant",
  },
  {
    image: "/images/service-road-maintenance-new.jpg",
    label: "Infrastructure",
    title: "Road Maintenance\n& Rehabilitation.",
    sub: "Mining Access Routes · Compliance",
    cta: "Road maintenance",
    href: "#road-maintenance",
  },
  {
    image: "/images/service-industrial-cleaning-new.jpeg",
    label: "Operations",
    title: "Industrial Cleaning\nAt Scale.",
    sub: "Safety-First · Protocol-Driven",
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
      style={{ height: "clamp(380px, 52vw, 520px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out flex"
          style={{ opacity: active === i ? 1 : 0 }}
        >
          {/* LEFT PANEL — dark overlay, text here */}
          <div className="relative w-[46%] h-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ transform: "scale(1.04)" }}
            />
            {/* Heavy dark veil for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.68) 75%, rgba(0,0,0,0.55) 100%)",
              }}
            />
          </div>

          {/* RIGHT PANEL — bright, lighter treatment */}
          <div className="relative w-[54%] h-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Subtle veil only — keeps image bright */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.12)" }}
            />
            {/* Left-edge fade to blend panels */}
            <div
              className="absolute inset-y-0 left-0 w-20"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      ))}

      {/* ── Text overlay — sits above both panels ── */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-[46%] px-8 md:px-12 lg:px-16">
          {/* Overline */}
          <p
            className="text-[#ffd200] text-[10px] tracking-[0.4em] uppercase font-bold mb-5"
            style={{ fontFamily: "var(--app-font-sans)" }}
          >
            {slides[active].label}
          </p>

          {/* Headline */}
          <h1
            className="text-white font-black leading-[1.05] mb-4"
            style={{
              fontFamily: "var(--app-font-heading)",
              fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)",
            }}
          >
            {slides[active].title.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          {/* Sub-label */}
          <p
            className="text-white/55 text-[12.5px] mb-7"
            style={{ fontFamily: "var(--app-font-sans)" }}
          >
            {slides[active].sub}
          </p>

          {/* CTA — Download Company Profile */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#ffd200] hover:bg-[#e6c400] text-[#111111] px-5 py-3 text-[11.5px] font-bold tracking-[0.1em] uppercase transition-colors group"
            style={{ fontFamily: "var(--app-font-heading)" }}
          >
            Download Company Profile
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* ── Centered slide counter — Arcadis signature ── */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-full border border-white/35 hover:border-[#ffd200] text-white hover:text-[#ffd200] flex items-center justify-center transition-all duration-200"
          aria-label="Previous"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>

        <span
          className="text-white text-[12px] font-semibold tracking-widest tabular-nums"
          style={{ fontFamily: "var(--app-font-sans)" }}
        >
          {active + 1} / {slides.length}
        </span>

        <button
          onClick={next}
          className="w-8 h-8 rounded-full border border-white/35 hover:border-[#ffd200] text-white hover:text-[#ffd200] flex items-center justify-center transition-all duration-200"
          aria-label="Next"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── Yellow accent bar — Arcadis signature ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#ffd200] z-20" />
    </section>
  );
}
