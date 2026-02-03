import { useState } from 'react';
import { Calendar, FileText, Users, CheckCircle, Send } from 'lucide-react';

export function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    tourDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We will contact you shortly to confirm your tour.');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const steps = [
    {
      icon: Calendar,
      title: 'Schedule a Tour',
      description: 'Visit our campus and see our Montessori classrooms in action',
    },
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete our simple enrollment form',
    },
    {
      icon: Users,
      title: 'Meet & Interview',
      description: 'Connect with our educators and discuss your child\'s needs',
    },
    {
      icon: CheckCircle,
      title: 'Enroll & Begin',
      description: 'Welcome to the Bloomings family!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7]" id="admissions">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#A8C69F] mb-4">Admissions</h2>
          <p className="text-xl text-[#5A4A3A] max-w-3xl mx-auto">
            Join the Bloomings Montessori Plus family. Our simple 4-step admissions process 
            makes it easy to give your child the gift of Montessori education.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#A8C69F] to-[#8FB384] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-[#A8C69F]/30 -z-10 hidden md:block last:hidden"></div>
                <h3 className="text-xl text-[#5A4A3A] mb-2">{step.title}</h3>
                <p className="text-[#8B7355]">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Inquiry Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl text-[#5A4A3A] mb-6 text-center">Schedule Your Tour Today</h3>
          <p className="text-center text-[#8B7355] mb-8">
            Complete this form and we'll contact you within 24 hours to schedule your personalized campus tour.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentName" className="block text-[#5A4A3A] mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#5A4A3A] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#5A4A3A] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="childName" className="block text-[#5A4A3A] mb-2">
                  Child's Name *
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="childAge" className="block text-[#5A4A3A] mb-2">
                  Child's Age *
                </label>
                <input
                  type="text"
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
                  placeholder="e.g., 2 years"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-[#5A4A3A] mb-2">
                  Program Interest *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
                >
                  <option value="">Select a program</option>
                  <option value="toddler">Toddler (15-24 months)</option>
                  <option value="early-childhood">Montessori Early Childhood (3-4 years)</option>
                  <option value="montessori-plus">Montessori Plus (4-6 years)</option>
                </select>
              </div>

              <div>
                <label htmlFor="tourDate" className="block text-[#5A4A3A] mb-2">
                  Preferred Tour Date
                </label>
                <input
                  type="date"
                  id="tourDate"
                  name="tourDate"
                  value={formData.tourDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#5A4A3A] mb-2">
                Additional Questions or Comments
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 text-lg font-medium"
            >
              <Send className="w-5 h-5" />
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-[#5A4A3A] mb-2">
            Questions? Call us at <a href="tel:+233559470150" className="text-[#FF6B9D] hover:underline">+233 55 947 0150</a>
          </p>
          <p className="text-[#8B7355]">
            or email <a href="mailto:bloomingsplus@gmail.com" className="text-[#FF6B9D] hover:underline">bloomingsplus@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
