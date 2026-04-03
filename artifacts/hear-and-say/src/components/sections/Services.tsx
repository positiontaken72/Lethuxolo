import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Bulk Transportation",
    description: "Efficient and reliable transportation of coal, manganese, steel, and other bulk materials, ensuring consistent movement across supply chains.",
    image: "/images/service-bulk-transport.png",
    link: "#bulk-transport",
    id: "bulk-transport"
  },
  {
    title: "Yellow Plant Machinery",
    description: "Provision, rental, and operation of heavy-duty equipment including excavators, loaders, and dump trucks to support on-site operations.",
    image: "/images/service-yellow-plant.png",
    link: "#yellow-plant",
    id: "yellow-plant"
  },
  {
    title: "Road Maintenance",
    description: "Maintenance and rehabilitation of mining and industrial roads, including grading, resurfacing, and repair to ensure operational continuity.",
    image: "/images/service-road-maintenance.png",
    link: "#road-maintenance",
    id: "road-maintenance"
  },
  {
    title: "Industrial Cleaning",
    description: "Professional cleaning services tailored to large-scale industrial environments, ensuring compliance, safety, and operational efficiency.",
    image: "/images/service-industrial-cleaning.png",
    link: "#industrial-cleaning",
    id: "industrial-cleaning"
  },
  {
    title: "Supply of Goods",
    description: "Procurement and delivery of essential materials and equipment required for ongoing mining and industrial operations.",
    image: "/images/service-supply-goods.png",
    link: "#supply-goods",
    id: "supply-goods"
  },
  {
    title: "Lighting Solutions",
    description: "Provision of portable lighting plants to support night operations and low-visibility working conditions across all sites.",
    image: "/images/service-lighting.png",
    link: "#lighting",
    id: "lighting"
  }
];

const ITEMS_PER_SLIDE = 3;

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = services.length - ITEMS_PER_SLIDE;

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111111]">
              Our Services
            </h2>
            <p className="text-lg text-[#555555]">
              Delivering tailored solutions for mining and industrial operations. Every service built on reliability, safety, and operational excellence.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-[#111111] flex items-center justify-center hover:bg-[#ffd200] hover:border-[#ffd200] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous services"
            >
              <ArrowLeft className="w-5 h-5 text-[#111111]" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center hover:bg-[#ffd200] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next services"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / ITEMS_PER_SLIDE)}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="w-1/3 flex-shrink-0 px-3"
              >
                <div className="rounded-[20px] overflow-hidden flex flex-col group h-full">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#111111] mb-3 leading-tight group-hover:text-[#ffd200] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#555555] mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className="inline-flex items-center text-[#111111] font-semibold text-sm hover:text-[#ffd200] transition-colors mt-auto"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-[#ffd200] w-8" : "bg-[#111111]/20 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
