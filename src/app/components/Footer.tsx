import { Mail, Clock, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../../assets/eb67e49f76543f1104c97e99f6ff586b56f69b96.png';

export function Footer() {
  return (
    <footer className="bg-[#5A4A3A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Bloomings Plus Montessori Logo" className="h-16 w-auto bg-white rounded-lg p-2" />
              <h3 className="text-xl">Bloomings Plus Montessori</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              At Bloomings Montessori, we believe that each child deserves a prepared and 
              stimulating environment to learn and grow.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A8C69F]" />
                <a href="tel:+233559470150" className="text-sm hover:text-[#A8C69F]">
                  +233 55 947 0150
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A8C69F]" />
                <a href="mailto:bloomingsplus@gmail.com" className="text-sm hover:text-[#A8C69F]">
                  bloomingsplus@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A8C69F]" />
                <span className="text-sm">East Airport No 3, Kofi Koriey Avenue, GA 281-0968</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-[#A8C69F] transition-colors">About Us</a></li>
              <li><a href="#levels" className="text-white/80 hover:text-[#A8C69F] transition-colors">Our Levels</a></li>
              <li><a href="#curriculum" className="text-white/80 hover:text-[#A8C69F] transition-colors">Curriculum</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-[#A8C69F] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a href="https://facebook.com/bloomingsmontessoriplus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-[#A8C69F] transition-colors">
                <Facebook className="w-5 h-5" />
                <span>Bloomings montessori plus</span>
              </a>
              <a href="https://instagram.com/bmplus.gh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-[#A8C69F] transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@bmplus.gh</span>
              </a>
              <a href="https://twitter.com/bmplus.gh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-[#A8C69F] transition-colors">
                <Twitter className="w-5 h-5" />
                <span>@bmplus.gh</span>
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="http://www.bmplusgh.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#A8C69F] transition-colors"
              >
                www.bmplusgh.com
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mb-12">
          <h4 className="text-xl mb-4 text-center">Visit Us</h4>
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8037969755676!2d-0.1679!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuMyJOIDDCsDEwJzA0LjQiVw!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bloomings Plus Montessori Location"
            />
          </div>
          <p className="text-center text-white/60 text-sm mt-4">
            East Airport No 3, Kofi Koriey Avenue, Accra, Ghana
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2026 Bloomings Plus Montessori. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}