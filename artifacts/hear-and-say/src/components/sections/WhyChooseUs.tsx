import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#003976]">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            For over 30 years, families have trusted Hear and Say for personalised, supportive, and research-driven care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Column 1: Family-Centered Approach */}
          <div className="bg-gray-50 rounded-[24px] p-8 md:p-12 border border-border/50">
            <h3 className="text-2xl font-bold text-[#003976] mb-4">
              Family-Centered Approach
            </h3>
            <p className="text-muted-foreground mb-10">
              Ongoing guidance and support. Leaders in Listening and Spoken Language (LSL) therapy.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#007FB0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#003976] mb-1">Expertise</h4>
                  <p className="text-sm text-muted-foreground">Accredited and qualified audiologists and speech pathologists.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#007FB0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#003976] mb-1">Research Driven</h4>
                  <p className="text-sm text-muted-foreground">Evidence-based practice backed by research.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#007FB0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#003976] mb-1">Inclusive programs for every stage of life</h4>
                  <p className="text-sm text-muted-foreground">Personalised support for babies, children and adults.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-border">
              <Button className="bg-[#007FB0] hover:bg-[#006a94] text-white rounded-[10px] shadow-none">
                Our Services
              </Button>
              <Button variant="outline" className="bg-white border-[#CCD7E4] text-[#003976] hover:bg-gray-50 rounded-[10px] shadow-none">
                Learn More
              </Button>
            </div>
          </div>

          {/* Column 2: Not-for-profit */}
          <div className="bg-[#003976]/5 rounded-[24px] p-8 md:p-12 border border-[#003976]/10">
            <h3 className="text-2xl font-bold text-[#003976] mb-4">
              Not-for-profit
            </h3>
            <p className="text-muted-foreground mb-10">
              Community-focused care. Strong partnerships with medical, educational and allied health professionals.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#007FB0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#003976] mb-1">Independent of device manufacturers</h4>
                  <p className="text-sm text-muted-foreground">We don't jeopardise clinical outcomes for sales. Every sale supports a child to hear.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#007FB0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#003976] mb-1">Medical Alliance</h4>
                  <p className="text-sm text-muted-foreground">Aligned with ear, nose and throat surgeons for 30 years creating continuous care.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#007FB0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#003976] mb-1">Government Approved Provider</h4>
                  <p className="text-sm text-muted-foreground">Accredited to provide fully subsidised hearing services to eligible pensioners and veterans.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-[#003976]/10">
              <Button className="bg-[#007FB0] hover:bg-[#006a94] text-white rounded-[10px] shadow-none">
                About Us
              </Button>
              <Button variant="outline" className="bg-white border-[#CCD7E4] text-[#003976] hover:bg-gray-50 rounded-[10px] shadow-none">
                Read Our Mission
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
