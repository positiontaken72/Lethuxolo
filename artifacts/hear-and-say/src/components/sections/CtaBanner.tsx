import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-[#003976] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background curves */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#007FB0]/20 rounded-full blur-[80px] pointer-events-none -mr-48 -mt-48" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-[#007FB0]/20 rounded-full blur-[60px] pointer-events-none -ml-32 -mb-32" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
              Unsure where to start? Speak with our experts
            </h2>
            <p className="text-white/80 text-lg md:text-xl">
              Take the first step toward better hearing and communication. We're here to listen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Button size="lg" className="bg-[#007FB0] hover:bg-[#006a94] text-white rounded-[10px] h-14 px-8 text-base font-bold shadow-none w-full sm:w-auto">
              Book an Appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white border-transparent hover:text-[#003976] text-white rounded-[10px] h-14 px-8 text-base font-bold shadow-none w-full sm:w-auto backdrop-blur-sm transition-all">
              <PhoneCall className="w-5 h-5 mr-2" />
              Find Your Nearest Clinic
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
