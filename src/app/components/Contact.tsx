import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7]" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#A8C69F] mb-4">Contact Us</h2>
          <p className="text-xl text-[#5A4A3A]">Get in touch with Bloomings Montessori Plus</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Phone */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A8C69F] to-[#8FB384] rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg text-[#5A4A3A] mb-3">Call Us</h3>
            <a href="tel:+233559470150" className="text-base text-[#8B7355] hover:text-[#A8C69F]">
              +233 55 947 0150
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F4A261] to-[#E76F51] rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg text-[#5A4A3A] mb-3">Email Us</h3>
            <a href="mailto:bloomingsplus@gmail.com" className="text-base text-[#8B7355] hover:text-[#A8C69F] break-all">
              bloomingsplus@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#9D7FEA] to-[#7C5FCE] rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg text-[#5A4A3A] mb-3">Visit Us</h3>
            <p className="text-base text-[#8B7355] leading-relaxed">
              East Airport No 3<br />
              Kofi Koriey Avenue<br />
              GA 281-0968
            </p>
          </div>

          {/* Website */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#44A49A] rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg text-[#5A4A3A] mb-3">Website</h3>
            <a 
              href="http://www.bmplusgh.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base text-[#8B7355] hover:text-[#A8C69F]"
            >
              www.bmplusgh.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
