import { MapPin, MonitorPlay, ArrowRight } from "lucide-react";

export function Locations() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003976] mb-4 text-center md:text-left">
            Where you can find us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Clinic Locations */}
          <a 
            href="#locations" 
            className="group bg-white rounded-[24px] p-8 md:p-10 border border-border shadow-sm hover:shadow-lg hover:border-[#007FB0]/30 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-[#007FB0]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#007FB0]/20 transition-colors">
              <MapPin className="w-8 h-8 text-[#007FB0]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#003976] mb-4">Clinic locations</h3>
            
            <p className="text-muted-foreground mb-8 flex-grow text-lg">
              We provide expert care close to home, with a dedicated network of centres conveniently located across Queensland to support you and your family.
            </p>
            
            <div className="inline-flex items-center text-[#007FB0] font-bold text-lg group-hover:translate-x-2 transition-transform">
              Find Your Nearest Centre
              <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </a>

          {/* Card 2: Telehealth */}
          <a 
            href="#telehealth" 
            className="group bg-[#003976] rounded-[24px] p-8 md:p-10 shadow-sm hover:shadow-lg hover:shadow-[#003976]/20 transition-all duration-300 flex flex-col h-full text-white"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
              <MonitorPlay className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Telehealth</h3>
            
            <p className="text-white/80 mb-8 flex-grow text-lg">
              Access our specialist therapy from anywhere. We use secure video conferencing to bring expert care directly to you at home, school, or childcare.
            </p>
            
            <div className="inline-flex items-center text-white font-bold text-lg group-hover:translate-x-2 transition-transform">
              Connect Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
