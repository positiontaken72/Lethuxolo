import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Safety First",
    description:
      "Strict adherence to safety and compliance standards in every operation. Personnel and assets protected at every stage.",
    href: "#about",
  },
  {
    title: "Reliability",
    description:
      "Consistent performance in demanding environments. Clients depend on us for uninterrupted, on-schedule service delivery.",
    href: "#about",
  },
  {
    title: "Industry Aligned",
    description:
      "Built specifically for mining and heavy industry, not adapted from general-purpose service providers.",
    href: "#services",
  },
  {
    title: "Scalable Operations",
    description:
      "Flexible support for projects of all sizes. From single-site mobilization to multi-operation engagements.",
    href: "#services",
  },
  {
    title: "Efficient Execution",
    description:
      "We keep our processes lean and our teams focused. Every project runs on schedule and within budget.",
    href: "#services",
  },
  {
    title: "Community Driven",
    description:
      "Supporting local economic growth across Mpumalanga and surrounding regions through skills and opportunity.",
    href: "#about",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#F5F5F5] py-16 md:py-28">
      <div className="container mx-auto px-6 md:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-12 pb-8 md:pb-10 border-b border-[#111111]/10">
          <div>
            <p
              className="text-[9px] tracking-[0.45em] uppercase font-bold text-[#ffd200] mb-4 md:mb-5"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Our Capabilities
            </p>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#111111] leading-tight"
              style={{ fontFamily: "var(--app-font-heading)" }}
            >
              Why Lethuxolo<br />Trading.
            </h2>
          </div>
          <p
            className="text-[#666666] text-sm leading-relaxed max-w-xs md:text-right font-light"
            style={{ fontFamily: "var(--app-font-sans)" }}
          >
            Grounded in the mining and industrial sector, with the experience,
            leadership, and structure to back it up.
          </p>
        </div>

        {/* Grid — container border-l creates left edge; each item adds right + bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-[#111111]/10">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="border-b border-r border-[#111111]/10 py-8 md:py-10 px-6 md:px-8 group"
            >
              {/* Yellow rule */}
              <div className="w-8 h-[3px] bg-[#ffd200] mb-5 md:mb-6" />

              <h3
                className="text-[1.05rem] font-bold text-[#111111] mb-3 leading-snug"
                style={{ fontFamily: "var(--app-font-heading)" }}
              >
                {cap.title}
              </h3>
              <p
                className="text-[#666666] text-[13.5px] leading-relaxed mb-6 md:mb-7 font-light"
                style={{ fontFamily: "var(--app-font-sans)" }}
              >
                {cap.description}
              </p>
              <a
                href={cap.href}
                className="inline-flex items-center gap-1.5 text-[#111111] text-[10px] font-bold tracking-[0.16em] uppercase hover:text-[#ffd200] transition-colors group/link"
                style={{ fontFamily: "var(--app-font-heading)" }}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
