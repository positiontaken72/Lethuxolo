import { Search, MapPin, Calendar, Phone, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#F5F5F5] border-b border-border py-2 px-4 md:px-8 flex justify-between items-center text-xs text-[#555555]">
        <div className="items-center space-x-6 hidden md:flex">
          <a href="#services" className="flex items-center hover:text-[#111111] transition-colors">
            <Calendar className="w-3 h-3 mr-2" />
            Our Services
          </a>
          <a href="#locations" className="flex items-center hover:text-[#111111] transition-colors">
            <MapPin className="w-3 h-3 mr-2" />
            Mpumalanga, South Africa
          </a>
          <a href="tel:+27000000000" className="flex items-center hover:text-[#111111] transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            +27 (0) 000 000 000
          </a>
        </div>
        <div className="w-full md:w-auto flex items-center md:justify-end">
          <div className="relative w-full md:w-64">
            <Input
              type="search"
              placeholder="Type to start searching"
              className="h-8 pl-3 pr-8 text-xs bg-white"
            />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-8 w-8 text-[#555555]">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 md:px-8 py-4 flex justify-between items-center bg-white">
        <a href="/" className="flex-shrink-0 flex items-center gap-3">
          <img
            src="/lethuxolo-logo.png"
            alt="Lethuxolo Trading Logo"
            className="h-12 md:h-14 w-12 md:w-14 object-contain rounded-full"
          />
          <span className="text-[#111111] font-bold text-lg md:text-xl leading-tight tracking-tight hidden sm:block">
            Lethuxolo<br />Trading
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
          <a href="/" className="px-3 py-2 text-sm font-medium text-[#111111] hover:text-[#F2B705] transition-colors">
            Home
          </a>

          <a href="#about" className="px-3 py-2 text-sm font-medium text-[#111111] hover:text-[#F2B705] transition-colors">
            About
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-[#111111] hover:text-[#F2B705] transition-colors outline-none">
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuItem><a href="#bulk-transport" className="w-full">Bulk Transportation</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#yellow-plant" className="w-full">Yellow Plant Machinery</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#road-maintenance" className="w-full">Road Maintenance</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#industrial-cleaning" className="w-full">Industrial Cleaning</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#supply-goods" className="w-full">Supply of Goods</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#lighting" className="w-full">Lighting Solutions</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#leadership" className="px-3 py-2 text-sm font-medium text-[#111111] hover:text-[#F2B705] transition-colors">
            Leadership
          </a>

          <a href="#contact" className="px-3 py-2 text-sm font-medium text-[#111111] hover:text-[#F2B705] transition-colors">
            Contact
          </a>

          <div className="pl-4 border-l border-border">
            <Button className="bg-[#F2B705] hover:bg-[#d9a304] text-[#111111] rounded-[10px] font-bold px-6 shadow-none">
              Get Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#111111]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col gap-6 pt-12">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-lg font-medium text-[#111111]">Home</a>
                <a href="#about" className="text-lg font-medium text-[#111111]">About</a>
                <a href="#services" className="text-lg font-medium text-[#111111]">Services</a>
                <a href="#leadership" className="text-lg font-medium text-[#111111]">Leadership</a>
                <a href="#contact" className="text-lg font-medium text-[#111111]">Contact</a>
                <div className="pt-6 border-t border-border">
                  <Button className="w-full bg-[#F2B705] hover:bg-[#d9a304] text-[#111111] rounded-[10px] font-bold shadow-none py-6 text-lg">
                    Get Quote
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
