import { Link } from "wouter";
import { Search, MapPin, Calendar, Phone, Heart, ChevronDown, Menu } from "lucide-react";
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
      <div className="bg-gray-50 border-b border-border py-2 px-4 md:px-8 flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center space-x-6 hidden md:flex">
          <a href="#events" className="flex items-center hover:text-primary transition-colors">
            <Calendar className="w-3 h-3 mr-2" />
            Event Calendar
          </a>
          <a href="#locations" className="flex items-center hover:text-primary transition-colors">
            <MapPin className="w-3 h-3 mr-2" />
            Our Locations
          </a>
          <a href="tel:0738502111" className="flex items-center hover:text-primary transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            (07) 3850 2111
          </a>
        </div>
        <div className="w-full md:w-auto flex items-center md:justify-end">
          <div className="relative w-full md:w-64">
            <Input 
              type="search" 
              placeholder="Type to start searching" 
              className="h-8 pl-3 pr-8 text-xs bg-white"
            />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-8 w-8 text-muted-foreground">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 md:px-8 py-4 flex justify-between items-center bg-white">
        <a href="/" className="flex-shrink-0">
          <img 
            src="https://hearandsay.org.au/wp-content/uploads/Hear-and-Say-Logo.svg" 
            alt="Hear and Say Logo" 
            className="h-12 md:h-16"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
          <a href="#donate" className="flex items-center px-3 py-2 text-sm font-medium text-[#003976] hover:text-primary transition-colors">
            <Heart className="w-4 h-4 mr-2 text-destructive" />
            Donate
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-[#003976] hover:text-primary transition-colors outline-none">
              Our Services <ChevronDown className="w-4 h-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem><a href="#audiology" className="w-full">Audiology & Hearing Health</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#therapy" className="w-full">Therapy & Wellbeing</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#telehealth" className="w-full">Telehealth Services</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#ndis" className="w-full">NDIS & Financial Support</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-[#003976] hover:text-primary transition-colors outline-none">
              About Us <ChevronDown className="w-4 h-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem><a href="#mission" className="w-full">Our Story & Mission</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#team" className="w-full">Our People</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#resources" className="px-3 py-2 text-sm font-medium text-[#003976] hover:text-primary transition-colors">
            Resources & Learning
          </a>
          
          <a href="#contact" className="px-3 py-2 text-sm font-medium text-[#003976] hover:text-primary transition-colors">
            Contact Us
          </a>

          <div className="pl-4 border-l border-border">
            <Button className="bg-[#007FB0] hover:bg-[#006a94] text-white rounded-[10px] font-medium px-6 shadow-none">
              Book An Appointment
            </Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#003976]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col gap-6 pt-12">
              <nav className="flex flex-col space-y-4">
                <a href="#donate" className="flex items-center text-lg font-medium text-[#003976]">
                  <Heart className="w-5 h-5 mr-3 text-destructive" />
                  Donate
                </a>
                <a href="#services" className="text-lg font-medium text-[#003976]">Our Services</a>
                <a href="#about" className="text-lg font-medium text-[#003976]">About Us</a>
                <a href="#resources" className="text-lg font-medium text-[#003976]">Resources & Learning</a>
                <a href="#contact" className="text-lg font-medium text-[#003976]">Contact Us</a>
                <div className="pt-6 border-t border-border">
                  <Button className="w-full bg-[#007FB0] hover:bg-[#006a94] text-white rounded-[10px] font-medium shadow-none py-6 text-lg">
                    Book An Appointment
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
