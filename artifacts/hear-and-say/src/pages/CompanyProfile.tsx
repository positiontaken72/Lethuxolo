import {
  Truck, Hammer, Wrench, Wind, Package, Lightbulb,
  Shield, Clock, TrendingUp, Zap, Users, Star,
  Phone, Mail, MapPin, Target, Eye, Lock, Award,
  Download, CheckCircle, ChevronRight, BarChart2,
  Layers, HardHat, Sparkles, Globe, Calendar,
} from "lucide-react";

const Y = "#ffd200";
const D = "#111111";
const G = "#555555";
const LG = "#f4f4f4";

const hdg: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };
const sans: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

/* ─── tiny helpers ─── */
const YBar = ({ h = 6 }: { h?: number }) => (
  <div style={{ height: h, background: Y, width: "100%" }} />
);

const SectionLabel = ({
  num,
  title,
  light = false,
}: {
  num: string;
  title: string;
  light?: boolean;
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
    <span style={{ ...hdg, fontSize: 44, fontWeight: 900, color: Y, lineHeight: 1 }}>
      {num}
    </span>
    <div style={{ width: 2, height: 36, background: light ? "rgba(255,255,255,0.2)" : "#ddd" }} />
    <span
      style={{
        ...sans,
        fontSize: 10,
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        fontWeight: 700,
        color: light ? "rgba(255,255,255,0.55)" : G,
      }}
    >
      {title}
    </span>
  </div>
);

const IconCircle = ({
  icon: Icon,
  size = 20,
  bg = Y,
  color = D,
  pad = 10,
}: {
  icon: React.ElementType;
  size?: number;
  bg?: string;
  color?: string;
  pad?: number;
}) => (
  <div
    style={{
      width: size + pad * 2,
      height: size + pad * 2,
      borderRadius: "50%",
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Icon size={size} color={color} />
  </div>
);

/* ═══════════════════════════════════════════════════
   PAGE 1 – COVER
═══════════════════════════════════════════════════ */
function CoverPage() {
  return (
    <div
      className="cp-page"
      style={{
        position: "relative",
        background: D,
        display: "flex",
        flexDirection: "column",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Full-bleed background image */}
      <img
        src="/images/hero-open-pit.jpeg"
        alt="Mining operations"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Yellow top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: Y, zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", padding: "52px 60px 0" }}>

        {/* Top row: logo + badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "white",
                overflow: "hidden",
                border: `2px solid ${Y}`,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/lethuxolo-logo.png"
                alt="Lethuxolo Trading"
                style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }}
              />
            </div>
            <div>
              <div style={{ ...hdg, fontSize: 18, fontWeight: 800, color: "white", lineHeight: 1.2 }}>
                Lethuxolo Trading
              </div>
              <div style={{ ...sans, fontSize: 9, letterSpacing: "0.3em", color: Y, textTransform: "uppercase", marginTop: 4 }}>
                Inspired by the Impossible
              </div>
            </div>
          </div>
          <div
            style={{
              background: Y,
              color: D,
              padding: "8px 18px",
              fontWeight: 800,
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              ...hdg,
            }}
          >
            Company Profile 2025
          </div>
        </div>

        {/* Hero text block */}
        <div style={{ marginTop: 120, marginBottom: 60 }}>
          {/* Tag line above */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div style={{ width: 32, height: 2, background: Y }} />
            <span style={{ ...sans, fontSize: 10, letterSpacing: "0.4em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
              Mining & Industrial Support Services
            </span>
          </div>

          <h1
            style={{
              ...hdg,
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 0.95,
              color: "white",
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            LETHUXOLO<br />
            <span style={{ color: Y }}>TRADING</span>
          </h1>

          {/* Yellow divider */}
          <div style={{ width: 80, height: 4, background: Y, marginBottom: 24 }} />

          <p style={{ ...sans, fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 460, lineHeight: 1.7, fontWeight: 300 }}>
            Your trusted operational partner in mining and heavy industry
            delivering reliable services across South Africa since 2022.
          </p>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginBottom: 0,
          }}
        >
          {[
            { value: "2022", label: "Established" },
            { value: "6", label: "Core Services" },
            { value: "Level 1", label: "B-BBEE Certified" },
            { value: "100%", label: "Client Focused" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "20px 0",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                paddingLeft: i > 0 ? 24 : 0,
              }}
            >
              <div style={{ ...hdg, fontSize: 30, fontWeight: 800, color: Y, lineHeight: 1 }}>{s.value}</div>
              <div style={{ ...sans, fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom contact bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: Y,
          padding: "14px 60px",
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        {[
          { icon: Phone, text: "066 518 4543" },
          { icon: Mail, text: "info@lethuxolotrading.co.za" },
          { icon: MapPin, text: "Mpumalanga, South Africa" },
          { icon: Globe, text: "www.lethuxolotrading.co.za" },
        ].map(({ icon: Icon, text }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <Icon size={12} color={D} />
            <span style={{ ...sans, fontSize: 10, color: D, fontWeight: 600 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE 2 – TABLE OF CONTENTS
═══════════════════════════════════════════════════ */
function TocPage() {
  const items = [
    { num: "01", title: "Executive Summary", page: "03" },
    { num: "02", title: "Mission, Vision & Values", page: "04" },
    { num: "03", title: "Our Core Services Part I", page: "05" },
    { num: "04", title: "Our Core Services Part II", page: "06" },
    { num: "05", title: "Why Choose Lethuxolo Trading", page: "07" },
    { num: "06", title: "Compliance & B-BBEE Certification", page: "07" },
    { num: "07", title: "Our Capabilities & Advantages", page: "07" },
    { num: "08", title: "Contact & Get In Touch", page: "08" },
  ];

  return (
    <div className="cp-page" style={{ background: "white", display: "flex", overflow: "hidden" }}>
      {/* Left content */}
      <div style={{ flex: 1, padding: "60px 48px 60px 60px", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 4, height: 40, background: Y }} />
            <div>
              <div style={{ ...sans, fontSize: 9, letterSpacing: "0.35em", color: G, textTransform: "uppercase", marginBottom: 6 }}>
                Lethuxolo Trading Company Profile 2025
              </div>
              <div style={{ ...hdg, fontSize: 38, fontWeight: 900, color: D, lineHeight: 1 }}>
                Table of Contents
              </div>
            </div>
          </div>
          <div style={{ width: 56, height: 3, background: Y, marginLeft: 16 }} />
        </div>

        {/* TOC items */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px 0",
                borderBottom: "1px solid #efefef",
                gap: 16,
              }}
            >
              <span style={{ ...hdg, fontSize: 22, fontWeight: 800, color: Y, width: 36, flexShrink: 0 }}>
                {item.num}
              </span>
              <span style={{ ...sans, fontSize: 13.5, fontWeight: 500, color: D, flex: 1 }}>
                {item.title}
              </span>
              <div style={{ flex: 1, borderBottom: "1px dashed #ddd", margin: "0 8px" }} />
              <span
                style={{
                  ...hdg,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "white",
                  background: D,
                  padding: "2px 10px",
                  minWidth: 28,
                  textAlign: "center",
                }}
              >
                {item.page}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 24, height: 2, background: Y }} />
          <span style={{ ...sans, fontSize: 9.5, color: "#aaa", letterSpacing: "0.1em" }}>
            Confidential · For Distribution to Authorised Parties Only
          </span>
        </div>
      </div>

      {/* Right image panel */}
      <div
        style={{
          width: 240,
          position: "relative",
          background: D,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src="/images/service-yellow-plant-lt.jpg"
          alt="Operations"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
        />
        <div style={{ position: "relative", zIndex: 1, flex: 1, padding: 32, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ width: 24, height: 3, background: Y, marginBottom: 16 }} />
          <p style={{ ...hdg, fontSize: 20, fontWeight: 800, color: "white", lineHeight: 1.3, marginBottom: 8 }}>
            Inspired by<br />the Impossible
          </p>
          <p style={{ ...sans, fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
            Delivering mining and industrial support services with precision, safety, and commitment.
          </p>
        </div>
        <YBar h={6} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE 3 – EXECUTIVE SUMMARY
═══════════════════════════════════════════════════ */
function ExecutiveSummaryPage() {
  return (
    <div className="cp-page" style={{ background: "white", padding: "56px 60px 0", display: "flex", flexDirection: "column" }}>
      <SectionLabel num="01" title="Executive Summary" />

      <h2 style={{ ...hdg, fontSize: 42, fontWeight: 900, color: D, lineHeight: 1.05, marginBottom: 32 }}>
        About Lethuxolo Trading
      </h2>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, flex: 1 }}>
        {/* Left: text */}
        <div>
          <p style={{ ...sans, fontSize: 14, color: G, lineHeight: 1.8, marginBottom: 18, fontWeight: 300 }}>
            Lethuxolo Trading is a proudly South African mining and industrial support
            services company headquartered in Mpumalanga, the country's coal and mining
            heartland. Founded in 2022, the company was built to fill a clear gap: large
            mining operations need reliable hands-on support across logistics, equipment,
            maintenance, and site services, and that is exactly what we provide.
          </p>
          <p style={{ ...sans, fontSize: 14, color: G, lineHeight: 1.8, marginBottom: 18, fontWeight: 300 }}>
            We are more than a service provider. We work closely with clients, get to know
            their sites, and show up when it matters. Our team carries real industry experience
            and keeps safety at the front of everything, from the first briefing to the
            final sign-off.
          </p>
          <p style={{ ...sans, fontSize: 14, color: G, lineHeight: 1.8, marginBottom: 32, fontWeight: 300 }}>
            Lethuxolo Trading holds a Level 1 B-BBEE certification and takes local job
            creation seriously. Most of our workforce comes from communities in and around
            Mpumalanga. We mobilise quickly, work to the required standard, and see every
            project through to completion.
          </p>

          {/* Key points */}
          {[
            "Mining support covering logistics, equipment, maintenance, and site services",
            "Fast to mobilise and on-site quickly across South Africa",
            "Level 1 B-BBEE rated with a strong focus on local employment",
            "Safety and compliance taken seriously at every stage of every job",
          ].map((point, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
              <CheckCircle size={15} color={Y} style={{ marginTop: 2, flexShrink: 0 }} />
              <span style={{ ...sans, fontSize: 13, color: D, fontWeight: 500 }}>{point}</span>
            </div>
          ))}
        </div>

        {/* Right: image + badge */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", overflow: "hidden", flex: 1, minHeight: 220 }}>
            <img
              src="/images/hero-open-pit.jpeg"
              alt="Lethuxolo Operations"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
              }}
            />
          </div>
          {/* Badge overlay */}
          <div
            style={{
              background: Y,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <Award size={24} color={D} />
            <div>
              <div style={{ ...hdg, fontSize: 14, fontWeight: 800, color: D }}>B-BBEE Level 1</div>
              <div style={{ ...sans, fontSize: 10, color: "#5a4800", marginTop: 2 }}>
                Verified Contributor · Highest Rating
              </div>
            </div>
          </div>
          <div style={{ background: D, padding: "14px 20px", flexShrink: 0 }}>
            <p style={{ ...sans, fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
              Headquartered in Mpumalanga, South Africa's coal and mining heartland.
            </p>
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div
        style={{
          marginTop: 36,
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          background: D,
        }}
      >
        {[
          { icon: Calendar, val: "2022", sub: "Year Established" },
          { icon: Layers, val: "6", sub: "Core Service Lines" },
          { icon: Award, val: "Level 1", sub: "B-BBEE Certification" },
          { icon: MapPin, val: "Mpumalanga", sub: "Headquarters" },
        ].map(({ icon: Icon, val, sub }, i) => (
          <div
            key={i}
            style={{
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <IconCircle icon={Icon} size={14} bg={Y} color={D} pad={7} />
            <div>
              <div style={{ ...hdg, fontSize: 18, fontWeight: 800, color: "white" }}>{val}</div>
              <div style={{ ...sans, fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 2 }}>
                {sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE 4 – MISSION, VISION & VALUES
═══════════════════════════════════════════════════ */
function MissionPage() {
  const mvv = [
    {
      icon: Target,
      label: "Mission",
      heading: "Our Mission",
      body: "To provide reliable, safety-driven, and efficient mining and industrial support services that enable our clients to focus on what they do best while we handle the operational foundation that keeps them running.",
      dark: false,
    },
    {
      icon: Eye,
      label: "Vision",
      heading: "Our Vision",
      body: "To be the go-to mining support partner in South Africa, known for doing the work right, empowering local communities, and earning long-term trust from every client we serve.",
      dark: true,
    },
    {
      icon: Star,
      label: "Values",
      heading: "Our Values",
      body: "Integrity in all we do. Safety above all else. Excellence in every delivery. Commitment to our clients, our people, and the communities we serve.",
      dark: true,
    },
  ];

  const coreValues = [
    { icon: Lock, title: "Integrity", desc: "Honest, transparent, and accountable in every engagement." },
    { icon: Shield, title: "Safety First", desc: "Zero-compromise approach to protecting people and assets." },
    { icon: Star, title: "Excellence", desc: "Every task executed to the highest possible standard." },
    { icon: Zap, title: "Innovation", desc: "Continuously improving how we deliver value and efficiency." },
    { icon: Clock, title: "Reliability", desc: "Consistent, on-time, on-spec delivery every time." },
    { icon: Users, title: "Community", desc: "Growing local opportunity and driving social impact." },
  ];

  return (
    <div className="cp-page" style={{ background: D, padding: "56px 60px 0", display: "flex", flexDirection: "column" }}>
      <SectionLabel num="02" title="Mission, Vision & Values" light />

      {/* MVV cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 36 }}>
        {mvv.map((item, i) => (
          <div
            key={i}
            style={{
              background: i === 0 ? Y : "rgba(255,255,255,0.05)",
              border: i === 0 ? "none" : `1px solid rgba(255,255,255,0.1)`,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <IconCircle
              icon={item.icon}
              size={18}
              bg={i === 0 ? D : Y}
              color={i === 0 ? Y : D}
              pad={9}
            />
            <div
              style={{
                ...sans,
                fontSize: 9,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: i === 0 ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.35)",
                fontWeight: 700,
              }}
            >
              {item.label}
            </div>
            <div style={{ ...hdg, fontSize: 20, fontWeight: 800, color: i === 0 ? D : "white" }}>
              {item.heading}
            </div>
            <div style={{ width: 28, height: 2, background: i === 0 ? D : Y }} />
            <p style={{ ...sans, fontSize: 12.5, lineHeight: 1.7, color: i === 0 ? "#3a2f00" : "rgba(255,255,255,0.55)", fontWeight: 300 }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* Core values grid */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32, flex: 1 }}>
        <div style={{ ...sans, fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20, fontWeight: 700 }}>
          Core Values
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {coreValues.map((v, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                padding: "18px 20px",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <v.icon size={16} color={Y} style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div style={{ ...hdg, fontSize: 13, fontWeight: 700, color: "white", marginBottom: 4 }}>{v.title}</div>
                <div style={{ ...sans, fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, fontWeight: 300 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "auto" }}>
        <YBar h={6} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SERVICES – shared card
═══════════════════════════════════════════════════ */
function ServiceCard({
  service,
}: {
  service: {
    icon: React.ElementType;
    category: string;
    title: string;
    desc: string;
    image: string;
    features: string[];
  };
}) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e8e8e8",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Image strip */}
      <div style={{ height: 140, position: "relative", overflow: "hidden" }}>
        <img
          src={service.image}
          alt={service.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
          }}
        />
        {/* Category pill */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: Y,
            color: D,
            padding: "3px 10px",
            ...hdg,
            fontSize: 8.5,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          {service.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <service.icon size={16} color={Y} />
          <h3 style={{ ...hdg, fontSize: 16, fontWeight: 800, color: D, lineHeight: 1.1 }}>
            {service.title}
          </h3>
        </div>

        <div style={{ width: 28, height: 2, background: Y, marginBottom: 12 }} />

        <p style={{ ...sans, fontSize: 11.5, color: G, lineHeight: 1.7, marginBottom: 14, fontWeight: 300, flex: 1 }}>
          {service.desc}
        </p>

        {/* Features */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {service.features.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ChevronRight size={10} color={Y} />
              <span style={{ ...sans, fontSize: 10.5, color: D, fontWeight: 500 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE 5 – SERVICES PART 1
═══════════════════════════════════════════════════ */
function ServicesPage1() {
  const services = [
    {
      icon: Truck,
      category: "Logistics",
      title: "Bulk Transportation",
      image: "/images/service-bulk-transport-lt.webp",
      desc: "Reliable movement of coal, manganese, and steel across supply chains. Full fleet readiness with real-time coordination, ensuring operations run without interruption regardless of volume or distance.",
      features: [
        "Coal, manganese & steel haulage",
        "Real-time fleet coordination",
        "Long and short haul capability",
        "Compliance with road regulations",
      ],
    },
    {
      icon: HardHat,
      category: "Equipment",
      title: "Yellow Plant Machinery",
      image: "/images/service-yellow-plant-lt.jpg",
      desc: "Provision and operation of excavators, loaders, and dump trucks. Performance and uptime are non-negotiable rapid mobilisation for any scale of operation, delivered with full operator support.",
      features: [
        "Excavators, loaders & dump trucks",
        "Experienced plant operators",
        "Rapid site mobilisation",
        "Preventive maintenance included",
      ],
    },
    {
      icon: Wrench,
      category: "Infrastructure",
      title: "Road Maintenance",
      image: "/images/service-road-maintenance-lt.jpg",
      desc: "Grading, resurfacing, and rehabilitation of mining access roads. We keep routes operational, safe, and compliant under the most demanding conditions and heavy vehicle loads.",
      features: [
        "Grading & resurfacing",
        "Access road rehabilitation",
        "Compliance with mine standards",
        "Emergency road response",
      ],
    },
  ];

  return (
    <div className="cp-page" style={{ background: LG, padding: "56px 60px 0", display: "flex", flexDirection: "column" }}>
      <SectionLabel num="03" title="Our Core Services" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
        <h2 style={{ ...hdg, fontSize: 36, fontWeight: 900, color: D }}>
          What We Deliver Part I
        </h2>
        <div style={{ ...sans, fontSize: 10, color: G, letterSpacing: "0.1em" }}>
          Showing 3 of 6 services
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, flex: 1 }}>
        {services.map((s, i) => <ServiceCard key={i} service={s} />)}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          marginTop: 28,
          background: D,
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ ...sans, fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
          Lethuxolo Trading Company Profile 2025
        </span>
        <span style={{ ...hdg, fontSize: 11, color: Y }}>Continued overleaf →</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE 6 – SERVICES PART 2
═══════════════════════════════════════════════════ */
function ServicesPage2() {
  const services = [
    {
      icon: Wind,
      category: "Operations",
      title: "Industrial Cleaning",
      image: "/images/service-industrial-cleaning-lt.webp",
      desc: "Large-scale cleaning services built around compliance and safety. Executed with full protocol adherence across industrial and mining environments, from equipment cleaning to full site decontamination.",
      features: [
        "Full site & equipment cleaning",
        "Safety protocol driven",
        "Hazardous area compliant",
        "Industrial waste management",
      ],
    },
    {
      icon: Package,
      category: "Procurement",
      title: "Supply of Goods",
      image: "/images/service-supply-goods-lt.jpeg",
      desc: "End-to-end procurement and delivery of materials, consumables, and equipment to active operations. Eliminating supply delays and keeping mining operations fully resourced at all times.",
      features: [
        "Materials & consumables supply",
        "Equipment procurement",
        "Reliable delivery scheduling",
        "Vendor relationship management",
      ],
    },
    {
      icon: Lightbulb,
      category: "Site Services",
      title: "Lighting Solutions",
      image: "/images/service-lighting.png",
      desc: "Portable and fixed lighting plants deployed for night operations, low-visibility sites, and emergency scenarios. Rapid setup, industrial-grade reliability, and full compliance with mine safety standards.",
      features: [
        "Portable lighting plant hire",
        "Night operation support",
        "Industrial-grade equipment",
        "Rapid deployment & setup",
      ],
    },
  ];

  return (
    <div className="cp-page" style={{ background: LG, padding: "56px 60px 0", display: "flex", flexDirection: "column" }}>
      <SectionLabel num="04" title="Our Core Services Continued" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
        <h2 style={{ ...hdg, fontSize: 36, fontWeight: 900, color: D }}>
          What We Deliver Part II
        </h2>
        <div style={{ ...sans, fontSize: 10, color: G, letterSpacing: "0.1em" }}>
          Showing 4 to 6 of 6 services
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, flex: 1 }}>
        {services.map((s, i) => <ServiceCard key={i} service={s} />)}
      </div>

      {/* Services summary strip */}
      <div
        style={{
          marginTop: 28,
          background: Y,
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Layers size={20} color={D} />
        <span style={{ ...hdg, fontSize: 13, fontWeight: 800, color: D }}>
          6 Specialised Service Lines
        </span>
        <div style={{ width: 1, height: 20, background: "rgba(0,0,0,0.15)" }} />
        <span style={{ ...sans, fontSize: 11, color: "#4a3800" }}>
          Built specifically for the demands of mining and heavy industry across South Africa
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE 7 – WHY CHOOSE US + B-BBEE
═══════════════════════════════════════════════════ */
function WhyChoosePage() {
  const capabilities = [
    { icon: Shield, title: "Safety First", desc: "Strict adherence to safety and compliance standards. People and equipment are protected at every stage of every job." },
    { icon: Clock, title: "Reliability", desc: "Clients know what to expect from us and we deliver on it. Consistent output in tough conditions, on schedule." },
    { icon: BarChart2, title: "Industry Aligned", desc: "Built specifically for mining, not converted from a general-purpose service company. We know the environment." },
    { icon: TrendingUp, title: "Scalable Operations", desc: "Flexible support for projects of any size, from a single site to multi-operation engagements across regions." },
    { icon: Zap, title: "Efficient Execution", desc: "We keep things focused and avoid unnecessary complexity. Every project runs on time and stays within budget." },
    { icon: Users, title: "Community Driven", desc: "Supporting local economic growth across Mpumalanga through real employment and skills development." },
  ];

  return (
    <div className="cp-page" style={{ background: "white", padding: "56px 60px 48px", display: "flex", flexDirection: "column" }}>
      <SectionLabel num="05" title="Why Choose Lethuxolo Trading" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 40, flex: 1 }}>
        {/* Left: capabilities */}
        <div>
          <h2 style={{ ...hdg, fontSize: 32, fontWeight: 900, color: D, marginBottom: 28 }}>
            Our Competitive<br />Advantage
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 20px",
                  borderBottom: i < 4 ? "1px solid #eee" : "none",
                  borderRight: i % 2 === 0 ? "1px solid #eee" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <cap.icon size={16} color={Y} />
                  <span style={{ ...hdg, fontSize: 13.5, fontWeight: 700, color: D }}>{cap.title}</span>
                </div>
                <div style={{ width: 20, height: 2, background: Y }} />
                <p style={{ ...sans, fontSize: 11, color: G, lineHeight: 1.6, fontWeight: 300 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: B-BBEE + compliance blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* B-BBEE Block */}
          <div style={{ background: D, padding: 28, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <IconCircle icon={Award} size={18} bg={Y} color={D} pad={9} />
              <div>
                <div style={{ ...sans, fontSize: 8.5, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
                  06 | Compliance
                </div>
                <div style={{ ...hdg, fontSize: 16, fontWeight: 800, color: "white" }}>B-BBEE Certification</div>
              </div>
            </div>
            <div
              style={{
                background: Y,
                padding: "14px 16px",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ ...hdg, fontSize: 28, fontWeight: 900, color: D }}>Level 1</div>
              <div style={{ ...sans, fontSize: 10, color: "#3a2f00", fontWeight: 600, lineHeight: 1.4 }}>
                Broad-Based<br />Black Economic Empowerment
              </div>
            </div>
            {[
              "Highest B-BBEE rating achievable",
              "135% procurement recognition",
              "Contributes to client scorecards",
              "Verified & audited certification",
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                <CheckCircle size={12} color={Y} />
                <span style={{ ...sans, fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{point}</span>
              </div>
            ))}
          </div>

          {/* Industry Focus block */}
          <div
            style={{
              background: LG,
              padding: 22,
              border: `2px solid ${Y}`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MapPin size={14} color={Y} />
              <span style={{ ...hdg, fontSize: 12, fontWeight: 700, color: D }}>Strategic Location</span>
            </div>
            <p style={{ ...sans, fontSize: 11, color: G, lineHeight: 1.6 }}>
              Headquartered in Mpumalanga the heart of South Africa's coal and mining industry enabling rapid deployment to key operations.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Globe size={14} color={Y} />
              <span style={{ ...hdg, fontSize: 12, fontWeight: 700, color: D }}>National Reach</span>
            </div>
            <p style={{ ...sans, fontSize: 11, color: G, lineHeight: 1.6 }}>
              Capable of deploying support services across multiple provinces and mining regions within South Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE 8 – BACK COVER / CONTACT
═══════════════════════════════════════════════════ */
function ContactPage() {
  return (
    <div
      className="cp-page"
      style={{
        position: "relative",
        background: D,
        display: "flex",
        flexDirection: "column",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        src="/images/hero-mining.png"
        alt="Lethuxolo operations"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.18,
        }}
      />

      {/* Yellow top stripe */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: Y, zIndex: 2 }} />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 80px 60px",
          textAlign: "center",
        }}
      >
        {/* Section tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <div style={{ width: 24, height: 2, background: Y }} />
          <span style={{ ...sans, fontSize: 9.5, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
            08 · Contact & Reach Out
          </span>
          <div style={{ width: 24, height: 2, background: Y }} />
        </div>

        <h2 style={{ ...hdg, fontSize: 64, fontWeight: 900, color: "white", lineHeight: 0.95, marginBottom: 16 }}>
          LET'S BUILD<br />
          <span style={{ color: Y }}>SOMETHING</span><br />
          GREAT TOGETHER
        </h2>

        <p style={{ ...sans, fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 440, lineHeight: 1.8, fontWeight: 300, marginBottom: 52 }}>
          Whether you need transport, equipment, site services, or just a team that shows
          up and gets the job done, Lethuxolo Trading moves quickly and delivers to the
          required standard every time.
        </p>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, width: "100%", maxWidth: 580, marginBottom: 52 }}>
          {[
            { icon: Phone, label: "Call Us", value: "066 518 4543" },
            { icon: Mail, label: "Email Us", value: "info@lethuxolotrading.co.za" },
            { icon: MapPin, label: "Find Us", value: "Mpumalanga, South Africa" },
          ].map(({ icon: Icon, label, value }, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <IconCircle icon={Icon} size={16} bg={Y} color={D} pad={8} />
              <div style={{ ...sans, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                {label}
              </div>
              <div style={{ ...sans, fontSize: 11, color: "white", fontWeight: 500, textAlign: "center", lineHeight: 1.4 }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img src="/lethuxolo-logo.png" alt="Logo" style={{ width: "100%", objectFit: "contain", padding: 4 }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ ...hdg, fontSize: 16, fontWeight: 800, color: "white" }}>Lethuxolo Trading</div>
            <div style={{ ...sans, fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: Y, marginTop: 4 }}>
              Inspired by the Impossible
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: Y,
          padding: "14px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ ...sans, fontSize: 10, color: D, fontWeight: 600 }}>
          © 2025 Lethuxolo Trading. All Rights Reserved.
        </span>
        <span style={{ ...sans, fontSize: 10, color: "#4a3800" }}>
          www.lethuxolotrading.co.za
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ROOT COMPONENT
═══════════════════════════════════════════════════ */
export default function CompanyProfile() {
  const handlePrint = () => window.print();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-wrapper {
          background: #888;
          min-height: 100vh;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .cp-page {
          width: 794px;
          min-height: 1123px;
          position: relative;
          box-shadow: 0 4px 40px rgba(0,0,0,0.35);
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }

        .print-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #111;
          color: white;
          padding: 12px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }

        .print-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffd200;
          color: #111;
          border: none;
          cursor: pointer;
          padding: 10px 22px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: background 0.2s;
        }
        .print-btn:hover { background: #e6c400; }

        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

          .print-bar { display: none !important; }
          .cp-wrapper {
            background: white !important;
            padding: 0 !important;
            gap: 0 !important;
          }

          .cp-page {
            width: 210mm !important;
            min-height: 297mm !important;
            height: 297mm !important;
            box-shadow: none !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            overflow: hidden !important;
            margin: 0 !important;
          }

          .cp-page:last-child { page-break-after: avoid !important; }

          @page {
            size: A4 portrait;
            margin: 0;
          }
        }
      `}</style>

      {/* Fixed download bar */}
      <div className="print-bar">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/lethuxolo-logo.png"
            alt="Lethuxolo"
            style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "contain", background: "white", padding: 2 }}
          />
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 14, color: "white" }}>
              Lethuxolo Trading - Company Profile 2025
            </div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
              8 pages · Mining & Industrial Support Services
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a
            href="/"
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              padding: "8px 14px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            ← Back to Website
          </a>
          <button className="print-btn" onClick={handlePrint}>
            <Download size={14} />
            Download PDF
          </button>
        </div>
      </div>

      {/* Pages */}
      <div className="cp-wrapper" style={{ paddingTop: 80 }}>
        <CoverPage />
        <TocPage />
        <ExecutiveSummaryPage />
        <MissionPage />
        <ServicesPage1 />
        <ServicesPage2 />
        <WhyChoosePage />
        <ContactPage />
      </div>
    </>
  );
}
