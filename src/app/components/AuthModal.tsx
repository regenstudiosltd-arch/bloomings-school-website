import { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onSwitchMode: () => void;
}

export function AuthModal({ isOpen, onClose, mode, onSwitchMode }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, this would connect to your backend
    console.log('Auth attempt:', mode, formData);
    alert(`${mode === 'login' ? 'Login' : 'Signup'} functionality will be connected to backend`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative animate-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B9D] to-[#A8C69F] rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl text-[#5A4A3A] text-center mb-2">
            {mode === 'login' ? 'Welcome Back!' : 'Join Our Community'}
          </h2>
          <p className="text-[#8B7355] text-center">
            {mode === 'login' 
              ? 'Sign in to manage content and testimonials' 
              : 'Create an account to contribute to our blog'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8">
          <div className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm text-[#5A4A3A] mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B7355]" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#E5DCC8] rounded-xl focus:border-[#A8C69F] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm text-[#5A4A3A] mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B7355]" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border-2 border-[#E5DCC8] rounded-xl focus:border-[#A8C69F] focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#5A4A3A] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B7355]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border-2 border-[#E5DCC8] rounded-xl focus:border-[#A8C69F] focus:outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B7355] hover:text-[#5A4A3A]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {mode === 'login' && (
            <div className="mt-2 text-right">
              <button
                type="button"
                className="text-sm text-[#FF6B9D] hover:text-[#FF4C85] transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#FF6B9D] to-[#A8C69F] hover:opacity-90 text-white py-3 rounded-xl transition-opacity"
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        {/* Switch Mode */}
        <div className="px-8 pb-8 text-center">
          <p className="text-[#8B7355]">
            {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={onSwitchMode}
              className="text-[#FF6B9D] hover:text-[#FF4C85] font-medium transition-colors"
            >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {/* Admin Note */}
        <div className="px-8 pb-8">
          <div className="bg-[#FFF8E7] border-l-4 border-[#F4A261] p-4 rounded-lg">
            <p className="text-sm text-[#5A4A3A]">
              <strong>Note:</strong> Admin access is required to add testimonials and blog posts. 
              Contact the school administrator for credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
