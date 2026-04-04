import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    index: "01",
    title: "Bulk Transportation",
    short: "Coal · Manganese · Steel logistics",
    description:
      "Efficient and reliable transportation of coal, manganese, steel, and other bulk materials. We maintain consistent supply chain movement with full fleet readiness and real-time coordination across supply routes.",
    image: "/images/service-bulk-transport.png",
    id: "bulk-transport",
  },
  {
    index: "02",
    title: "Yellow Plant Machinery",
    short: "Excavators · Loaders · Dump trucks",
    description:
      "Provision, rental, and operation of heavy-duty equipment including excavators, loaders, and dump trucks. Performance and uptime are non-negotiable — we mobilize fast and keep machines running.",
    image: "/images/service-yellow-plant.png",
    id: "yellow-plant",
  },
  {
    index: "03",
    title: "Road Maintenance",
    short: "Grading · Resurfacing · Repair",
    description:
      "Maintenance and rehabilitation of mining and industrial roads to ensure operational continuity. From routine grading to full resurfacing, we keep access routes safe and operational at all times.",
    image: "/images/service-road-maintenance.png",
    id: "road-maintenance",
  },
  {
    index: "04",
    title: "Industrial Cleaning",
    short: "Compliance · Safety · Large-scale environments",
    description:
      "Professional cleaning services engineered for large-scale industrial environments. Every engagement meets compliance standards and is executed with full safety protocol adherence.",
    image: "/images/service-industrial-cleaning.png",
    id: "industrial-cleaning",
  },
  {
    index: "05",
    title: "Supply of Goods",
    short: "Procurement · Delivery · Operations support",
    description:
      "End-to-end procurement and delivery of essential materials and equipment for active mining and industrial operations. We eliminate delays and keep your supply chain unbroken.",
    image: "/images/service-supply-goods.png",
    id: "supply-goods",
  },
  {
    index: "06",
    title: "Lighting Solutions",
    short: "Portable plants · Night operations · Low-visibility sites",
    description:
      "Provision of portable lighting plants to support night operations and low-visibility working conditions. Reliable illumination deployed rapidly across any site configuration.",
    image: "/images/service-lighting.png",
    id: "lighting",
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-white">

      {/* Header strip */}
      <div className="border-b border-[#111111]/10 py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#888888] mb-5 font-semibold">
                What We Deliver
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#111111] leading-[1.05] tracking-tight">
                Our Services
              </h2>
            </div>
            <p className="text-[#666666] max-w-xs text-sm leading-relaxed md:text-right border-t md:border-t-0 md:border-l border-[#111111]/10 pt-4 md:pt-0 md:pl-8">
              Every service is delivered with emphasis on reliability,
              safety compliance, efficiency, and responsiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-0">

          {/* Left: Interactive numbered list */}
          <div className="flex-1 lg:pr-12 xl:pr-20 divide-y divide-[#111111]/8">
            {services.map((service, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-full text-left group"
                >
                  <div className="flex items-stretch gap-0 py-7 md:py-9 relative">

                    {/* Left yellow accent line */}
                    <div
                      className={`w-[3px] mr-6 md:mr-8 shrink-0 rounded-full transition-all duration-500 ${
                        isActive ? "bg-[#ffd200]" : "bg-transparent"
                      }`}
                    />

                    {/* Index number */}
                    <span
                      className={`text-[11px] font-mono font-bold tracking-widest shrink-0 mt-1.5 transition-colors duration-300 ${
                        isActive
                          ? "text-[#ffd200]"
                          : "text-[#cccccc] group-hover:text-[#999999]"
                      }`}
                    >
                      {service.index}
                    </span>

                    {/* Content */}
                    <div className="flex-1 ml-5 md:ml-8">
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className={`text-xl md:text-2xl font-bold leading-snug transition-colors duration-300 ${
                            isActive
                              ? "text-[#111111]"
                              : "text-[#999999] group-hover:text-[#333333]"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <ArrowUpRight
                          className={`w-5 h-5 shrink-0 mt-1 transition-all duration-300 ${
                            isActive
                              ? "text-[#ffd200] opacity-100 translate-x-0 -translate-y-0"
                              : "text-[#cccccc] group-hover:text-[#aaaaaa] translate-x-1 translate-y-1"
                          }`}
                        />
                      </div>

                      {/* Short tag — always visible when inactive */}
                      <p
                        className={`text-xs text-[#aaaaaa] mt-1 tracking-wide transition-all duration-300 ${
                          isActive ? "opacity-0 h-0 mb-0" : "opacity-100 mt-2"
                        }`}
                      >
                        {service.short}
                      </p>

                      {/* Expanded description */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isActive
                            ? "max-h-48 opacity-100 mt-4"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p className="text-[#555555] text-sm md:text-base leading-relaxed pr-4">
                          {service.description}
                        </p>
                        <a
                          href={`#${service.id}`}
                          className="inline-flex items-center gap-2 mt-5 text-[#111111] font-bold text-sm border-b border-[#ffd200] pb-0.5 hover:text-[#ffd200] transition-colors duration-200"
                        >
                          Request this service
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Portrait image panel — sticky */}
          <div className="hidden lg:block w-[340px] xl:w-[380px] shrink-0 py-10 border-l border-[#111111]/8 pl-12 xl:pl-16">
            <div className="sticky top-24">

              {/* Portrait image frame */}
              <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden bg-[#f0f0f0]">
                {services.map((service, i) => (
                  <img
                    key={i}
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      active === i
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.04]"
                    }`}
                  />
                ))}

                {/* Bottom overlay with service info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                  <p className="text-[#ffd200] text-[10px] tracking-[0.3em] uppercase font-bold mb-1">
                    {services[active].index} / 06
                  </p>
                  <p className="text-white font-bold text-lg leading-tight">
                    {services[active].title}
                  </p>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-1.5 mt-5">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-[3px] rounded-full transition-all duration-400 ${
                      active === i
                        ? "bg-[#ffd200] w-6"
                        : "bg-[#111111]/15 w-3 hover:bg-[#111111]/30"
                    }`}
                    aria-label={`View ${services[i].title}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
