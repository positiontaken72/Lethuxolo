import { Shield, Truck, Zap, BarChart3, Users, TreePine } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Strict adherence to safety and compliance standards in every operation, protecting personnel and assets."
  },
  {
    icon: Truck,
    title: "Reliability",
    description: "Consistent performance in demanding environments. Clients depend on us for uninterrupted service delivery."
  },
  {
    icon: BarChart3,
    title: "Industry Aligned",
    description: "Tailored solutions built specifically for mining and heavy industries — not adapted from elsewhere."
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Flexible operational support for projects of all sizes, from single-site to multi-operation engagements."
  },
  {
    icon: Users,
    title: "Operational Efficiency",
    description: "Optimized processes and streamlined execution for cost and time effectiveness on every project."
  },
  {
    icon: TreePine,
    title: "Community Driven",
    description: "Supporting local economic growth and empowerment across Mpumalanga and surrounding regions."
  }
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111111]">
            Why Choose Us
          </h2>
          <p className="text-lg text-[#555555]">
            Strategically positioned to deliver value through industry-relevant services, strong leadership experience, and a commitment to quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[20px] p-8 border border-border/70 shadow-sm hover:shadow-md hover:border-[#F2B705]/40 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
                data-testid={`card-reason-${index}`}
              >
                <div className="w-14 h-14 bg-[#F2B705]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F2B705]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#F2B705]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
