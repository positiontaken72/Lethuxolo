import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col space-y-6">
            <img 
              src="https://hearandsay.org.au/wp-content/uploads/Hear-and-Say-Logo.svg" 
              alt="Hear and Say Logo" 
              className="h-16 object-contain self-start"
            />
            <p className="text-sm text-muted-foreground">
              Combining world-class hearing and speech expertise with a not-for-profit heart.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#003976] hover:text-[#007FB0] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-[#003976] hover:text-[#007FB0] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-[#003976] hover:text-[#007FB0] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-[#003976] hover:text-[#007FB0] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-[#003976] hover:text-[#007FB0] transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-[#003976] mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">Audiology & Hearing Health</a></li>
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">Therapy & Wellbeing</a></li>
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">Telehealth Services</a></li>
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">NDIS & Financial Support</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-[#003976] mb-6">About Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">Our Story & Mission</a></li>
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">Our People</a></li>
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">Resources & Learning</a></li>
              <li><a href="#" className="hover:text-[#007FB0] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-[#003976] mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Phone: (07) 3850 2111</li>
              <li>Email: mail@hearandsay.org.au</li>
              <li>
                <a href="#" className="hover:text-[#007FB0] transition-colors underline">
                  Find a Clinic Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hear and Say. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#007FB0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#007FB0] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
