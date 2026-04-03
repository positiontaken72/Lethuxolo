import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] rounded-full border-[40px] border-gray-50/50 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full border-[20px] border-gray-50/50 pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#003976] leading-[1.1] tracking-tight">
              Trusted Care.<br />
              Transforming Lives<br />
              For Over 30 Years.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Hear and Say, we combine world-class hearing and speech expertise with a not-for-profit heart. From first sounds to lifelong conversations, we’ve been helping babies, children and adults connect with confidence for more than three decades.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Button size="lg" className="bg-[#007FB0] hover:bg-[#006a94] text-white rounded-[10px] px-8 h-14 text-base font-medium shadow-none w-full sm:w-auto">
                Our Services
              </Button>
              
              <a href="#about" className="inline-flex items-center text-[#003976] font-semibold hover:text-[#007FB0] transition-colors text-base group">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-[4/3] md:aspect-[16/10] lg:aspect-square xl:aspect-[4/3]">
              <img 
                src="/images/hero-toddler.png" 
                alt="Happy toddler boy with a hearing device" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge for extra trustworthiness */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 animate-bounce hover:pause" style={{ animationDuration: "3s" }}>
              <div className="bg-[#007FB0]/10 p-3 rounded-full">
                <span className="text-[#007FB0] font-bold text-xl">30+</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#003976]">Years of Care</span>
                <span className="text-xs text-muted-foreground">Trusted by families</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
