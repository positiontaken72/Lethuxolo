import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/lethuxolo-logo.png"
                alt="Lethuxolo Trading Logo"
                className="h-14 w-14 object-contain rounded-full"
              />
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                Lethuxolo<br />Trading
              </span>
            </div>
            <p className="text-sm text-white/60">
              Inspired by the Impossible. Delivering reliable mining and industrial support services across South Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#FFFF00] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/60 hover:text-[#FFFF00] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/60 hover:text-[#FFFF00] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/60 hover:text-[#FFFF00] transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#bulk-transport" className="hover:text-[#FFFF00] transition-colors">Bulk Transportation</a></li>
              <li><a href="#yellow-plant" className="hover:text-[#FFFF00] transition-colors">Yellow Plant Machinery</a></li>
              <li><a href="#road-maintenance" className="hover:text-[#FFFF00] transition-colors">Road Maintenance</a></li>
              <li><a href="#industrial-cleaning" className="hover:text-[#FFFF00] transition-colors">Industrial Cleaning</a></li>
              <li><a href="#supply-goods" className="hover:text-[#FFFF00] transition-colors">Supply of Goods</a></li>
              <li><a href="#lighting" className="hover:text-[#FFFF00] transition-colors">Lighting Solutions</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#about" className="hover:text-[#FFFF00] transition-colors">About Us</a></li>
              <li><a href="#leadership" className="hover:text-[#FFFF00] transition-colors">Leadership</a></li>
              <li><a href="#profile" className="hover:text-[#FFFF00] transition-colors">Company Profile</a></li>
              <li><a href="#contact" className="hover:text-[#FFFF00] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Phone: +27 (0) 000 000 000</li>
              <li>Email: info@lethuxolotrading.co.za</li>
              <li>Mpumalanga, South Africa</li>
              <li>
                <a href="#contact" className="hover:text-[#FFFF00] transition-colors underline">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Lethuxolo Trading. All rights reserved. Inspired by the Impossible.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFFF00] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
