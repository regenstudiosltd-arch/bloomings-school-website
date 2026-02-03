import { Mail, Clock, Menu, Phone, MapPin, LogIn, UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { AuthModal } from './AuthModal';
import logo from '../../assets/eb67e49f76543f1104c97e99f6ff586b56f69b96.png';

export function Header() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-40">
        {/* Top bar */}
        <div className="bg-[#F5F1E8] border-b border-[#E5DCC8]">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8B7355]" />
                  <a href="tel:+233559470150" className="text-sm text-[#5A4A3A] hover:text-[#A8C69F]">
                    +233 55 947 0150
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#8B7355]" />
                  <a href="mailto:bloomingsplus@gmail.com" className="text-sm text-[#5A4A3A] hover:text-[#A8C69F]">
                    bloomingsplus@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openAuthModal('login')}
                  className="flex items-center gap-2 text-sm text-[#5A4A3A] hover:text-[#A8C69F] transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Login</span>
                </button>
                <span className="text-[#8B7355]">|</span>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="flex items-center gap-2 text-sm text-[#5A4A3A] hover:text-[#A8C69F] transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bloomings Plus Montessori Logo" className="h-12 w-auto" />
              <h1 className="text-xl text-[#5A4A3A] hidden sm:block">Bloomings Plus Montessori</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                Home
              </a>
              <a href="#about" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                About Us
              </a>
              <a href="#levels" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                Levels
              </a>
              <a href="#curriculum" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                Curriculum
              </a>
              <a href="#testimonials" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                Testimonials
              </a>
              <a href="#gallery" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                Gallery
              </a>
              <a href="#blog" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-[#5A4A3A] hover:text-[#A8C69F] transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <a 
                href="#admissions"
                className="hidden md:flex bg-[#F4A261] hover:bg-[#E76F51] text-white rounded-full px-6 py-2 items-center gap-2 transition-colors"
              >
                Schedule Tour
              </a>
              <button className="lg:hidden p-2">
                <Menu className="w-6 h-6 text-[#5A4A3A]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
      />
    </>
  );
}