import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "2022", label: "Year established", suffix: "" },
  { value: "6", label: "Core service lines", suffix: "" },
  { value: "100%", label: "Client-focused delivery", suffix: "" },
  { value: "Level 1", label: "B-BBEE Certified", suffix: "" },
];

function CountUp({ target, duration = 1200 }: { target: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numericPart = parseInt(target.replace(/\D/g, ""), 10);
          const prefix = target.match(/^[^\d]*/)?.[0] ?? "";
          const suffix = target.match(/[^\d]*$/)?.[0] ?? "";

          if (isNaN(numericPart)) {
            setDisplay(target);
            return;
          }

          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numericPart);
            setDisplay(`${prefix}${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{display || target}</span>;
}

export function Locations() {
  return (
    <section id="locations" className="bg-[#111111] text-white overflow-hidden">

      {/* Top: Headline */}
      <div className="container mx-auto px-6 md:px-8 py-14 md:py-24">
        <div className="max-w-2xl">
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-[#ffd200] mb-4 md:mb-5 font-bold"
            style={{ fontFamily: "var(--app-font-heading)" }}
          >
            Operational Reach
          </p>
          <h2
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6"
            style={{ fontFamily: "var(--app-font-heading)" }}
          >
            Where We<br />Operate
          </h2>
          <p
            className="text-white/50 text-base leading-relaxed max-w-md font-light"
            style={{ fontFamily: "var(--app-font-sans)" }}
          >
            Headquartered in Mpumalanga — South Africa's coal and mining heartland.
            Positioned to deploy across the region with speed and precision.
          </p>
        </div>
      </div>

      {/* Bottom: metric strip */}
      <div className="border-t border-white/[0.08]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="py-8 md:py-12 flex flex-col gap-2 px-4 md:px-10 first:pl-0 [&:nth-child(2)]:pr-0 md:[&:nth-child(2)]:pr-10 [&:nth-child(3)]:pl-4 md:[&:nth-child(3)]:pl-10 last:pr-0"
              >
                <p
                  className="text-[#ffd200] text-3xl md:text-5xl font-bold leading-none tracking-tight"
                  style={{ fontFamily: "var(--app-font-heading)" }}
                >
                  <CountUp target={m.value} />
                </p>
                <p
                  className="text-white/40 text-[10px] md:text-xs tracking-wide leading-relaxed uppercase font-medium"
                  style={{ fontFamily: "var(--app-font-sans)" }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
