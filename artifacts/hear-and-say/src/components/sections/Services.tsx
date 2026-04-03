import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F5F5] relative overflow-hidden">
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

          <Button
            variant="outline"
            className="shrink-0 bg-white border-border text-[#111111] hover:bg-[#F2B705] hover:border-[#F2B705] hover:text-[#111111] rounded-[10px] h-12 px-6 shadow-none font-semibold"
          >
            View All Services
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-border/50 flex flex-col group hover:shadow-md transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
              data-testid={`card-service-${index}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#111111] mb-3 leading-tight group-hover:text-[#F2B705] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#555555] mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-[#111111] font-semibold text-sm hover:text-[#F2B705] transition-colors mt-auto"
                  data-testid={`link-service-${index}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
