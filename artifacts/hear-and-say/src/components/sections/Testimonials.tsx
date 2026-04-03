import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Don Cave",
    initial: "D",
    text: "I received very professional and friendly attention. The consultations are always inclusive, efficient, unrushed and on time. I have no hesitation in recommending H&S not only for children's hearing problems but also adult hearing assessment and treatment.",
    rating: 5
  },
  {
    name: "Danielle Pati",
    initial: "D",
    text: "My almost 5yr old girl does not do well in any sort of clinic setting and can get really upset... but I was AMAZED at how easily she was able to cooperate with Helene the audiologist we saw today. Helene was patient, made my daughter feel safe.",
    rating: 5
  },
  {
    name: "Will & Camila",
    initial: "W",
    text: "I had a wonderful experience at Hear and Say and was very pleased to get to know this wonderful institution. My almost 4mo daughter was assessed by Annika and she was wonderful. Patient, friendly, very detailed... put my heart at ease.",
    rating: 5
  },
  {
    name: "Peter Lovell",
    initial: "P",
    text: "The audiologist, Georgia, was professional and caring and I was immediately confident that she would provide me with the most suitable solution for my hearing condition. I was fitted with a quality set of hearing aides. I highly recommend Hear and Say.",
    rating: 5
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaRef]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaRef]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    // Auto-scroll
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003976] mb-4">
              Stories from our families
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-[#007FB0] text-[#007FB0]" />
                ))}
              </div>
              <span className="font-semibold text-[#003976]">4.9/5 Average Rating</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollPrev}
              className="rounded-full border-border text-[#003976] hover:bg-gray-50 h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollNext}
              className="rounded-full border-border text-[#003976] hover:bg-gray-50 h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6 py-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
              >
                <div className="bg-gray-50 rounded-[20px] p-8 border border-border h-full flex flex-col relative group hover:bg-white hover:shadow-xl hover:border-[#007FB0]/20 transition-all duration-300">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-[#003976]/5 group-hover:text-[#007FB0]/10 transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-8 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#003976] text-white flex items-center justify-center font-bold text-lg">
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003976]">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">Hear and Say Client</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
