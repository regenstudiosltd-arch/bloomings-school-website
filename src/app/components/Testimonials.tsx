import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Honorable Nana Ama Dokua Assiamah-Adjei",
      role: "Parent",
      rating: 5,
      text: "Before choosing Bloomings Montessori, we explored several schools. Once we arrived here, we knew we didn't need to look any further. Bloomings feels like home — a perfect balance of discipline, care, and knowledge acquisition. What stood out most for us, especially with our first son, was the attention to detail and the strong teacher-child interaction. Each child is given individual attention, closely monitored, and assessed based on their own capacity rather than being compared to others. That level of care made all the difference for us. Bringing our second child here is proof of how satisfied we are with Bloomings Montessori.",
    },
    {
      name: "Mrs. Maha",
      role: "Parent",
      rating: 5,
      text: "One thing that truly stood out to me when I visited Bloomings Montessori was the absence of screens. As parents, we know how easy it is to quiet children with tablets and phones, but that's not the kind of learning we want. Here, everything is hands-on. Children learn through conversation, creativity, and doing things themselves. This practical approach encourages curiosity and confidence. My child asks questions, explores ideas, and stays actively engaged — and that means everything to me. If you want your child to truly experience learning, Bloomings Montessori is the place.",
    },
    {
      name: "Mrs. Randolph",
      role: "Parent of Jaden",
      rating: 5,
      text: "We carefully searched for Montessori schools within the area, and I can confidently say that Bloomings Montessori is the best we found. The Montessori curriculum fits perfectly with our values, and the results we see in our child speak for themselves. The growth, confidence, and curiosity we see in Jaden make us proud every day. We believe in supporting excellence, and Bloomings Montessori truly deserves that support. I encourage parents in the area to bring their children here — the Bloomings children are truly thriving.",
    },
    {
      name: "Mr. Awuah",
      role: "Parent",
      rating: 5,
      text: "I am very happy with the progress I see in my child at Bloomings Montessori. I am proud of the work the teachers are doing and the positive development I see every day.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#A8C69F] mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-[#5A4A3A] max-w-3xl mx-auto">
            Hear from our Bloomings family about their
            experiences and why they chose Montessori education
            for their children.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#A8C69F]/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFD93D] text-[#FFD93D]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#5A4A3A] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#FFB6C1] flex items-center justify-center text-white text-xl font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#5A4A3A] font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[#8B7355] text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[#5A4A3A] mb-6">
            Ready to join our community of happy families?
          </p>
          <a
            href="#admissions"
            className="inline-block bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-4 rounded-full transition-colors duration-300 text-lg font-medium"
          >
            Schedule Your Tour
          </a>
        </div>
      </div>
    </section>
  );
}