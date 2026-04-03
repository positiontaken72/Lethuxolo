import { Button } from "@/components/ui/button";
import { Phone, FileText, MapPin } from "lucide-react";

export function CtaBanner() {
  return (
    <section id="contact" className="bg-[#F2B705] py-16 md:py-24 relative overflow-hidden">
      {/* Subtle dark decorative elements */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#111111]/5 rounded-full blur-[80px] pointer-events-none -mr-48 -mt-48" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-[#111111]/5 rounded-full blur-[60px] pointer-events-none -ml-32 -mb-32" />
      {/* Industrial grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #000 40px, #000 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #000 40px, #000 41px)`
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111111] leading-tight mb-4">
              Ready to partner with a reliable industrial services provider?
            </h2>
            <p className="text-[#111111]/70 text-lg md:text-xl font-medium">
              Whether you need bulk transport, plant machinery, or site support — Lethuxolo Trading delivers. Reach out and let's discuss your operational requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Button
              size="lg"
              className="bg-[#111111] hover:bg-[#222222] text-white rounded-[10px] h-14 px-8 text-base font-bold shadow-none w-full sm:w-auto"
              data-testid="button-get-quote"
            >
              Get Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/50 hover:bg-white border-[#111111]/20 hover:border-[#111111] text-[#111111] rounded-[10px] h-14 px-8 text-base font-bold shadow-none w-full sm:w-auto transition-all"
              data-testid="button-download-profile"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Company Profile
            </Button>
          </div>

        </div>

        {/* Contact details row */}
        <div className="mt-12 pt-8 border-t border-[#111111]/20 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
          <a
            href="tel:+27000000000"
            className="inline-flex items-center gap-2 text-[#111111] font-semibold hover:underline"
            data-testid="link-phone"
          >
            <Phone className="w-4 h-4" />
            +27 (0) 000 000 000
          </a>
          <a
            href="mailto:info@lethuxolotrading.co.za"
            className="inline-flex items-center gap-2 text-[#111111] font-semibold hover:underline"
            data-testid="link-email"
          >
            info@lethuxolotrading.co.za
          </a>
          <span className="inline-flex items-center gap-2 text-[#111111] font-semibold">
            <MapPin className="w-4 h-4" />
            Mpumalanga, South Africa
          </span>
        </div>
      </div>
    </section>
  );
}
