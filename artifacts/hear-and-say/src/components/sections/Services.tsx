import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Audiology & Hearing Health",
    description: "Specialised hearing tests, tailored to each individual’s age and needs, to accurately assess and diagnose hearing loss.",
    image: "/images/service-audiology.png",
    link: "#audiology"
  },
  {
    title: "Therapy & Wellbeing",
    description: "We provide specialised therapies and resilience programs to help people overcome communication challenges, build confidence, and thrive at any age.",
    image: "/images/service-therapy.png",
    link: "#therapy"
  },
  {
    title: "Telehealth Services",
    description: "Location is no barrier to receiving high-quality care. We provide expert therapy via online sessions and connect regional families.",
    image: "/images/service-telehealth.png",
    link: "#telehealth"
  },
  {
    title: "NDIS & Financial Support",
    description: "As a registered NDIS provider, we help you access, plan, and use your NDIS funds for our eligible programs and services.",
    image: "/images/service-ndis.png",
    link: "#ndis"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#003976]">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a range of specialised services to support hearing and communication for babies, children, and adults. Whether you or your child needs detailed hearing assessments, speech therapy, or early screening, our team is here to guide you every step of the way.
            </p>
          </div>
          
          <Button variant="outline" className="shrink-0 bg-white border-border text-[#003976] hover:bg-gray-100 hover:text-[#007FB0] rounded-[10px] h-12 px-6 shadow-none">
            View All Services
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-border/50 flex flex-col group hover:shadow-md transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms`, animationDuration: "700ms" }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#003976] mb-3 leading-tight group-hover:text-[#007FB0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-[#003976] font-semibold text-sm hover:text-[#007FB0] transition-colors mt-auto"
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
