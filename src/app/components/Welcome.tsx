import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Welcome() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center text-[#5A4A3A] mb-16">
          Welcome to Bloomings Plus Montessori
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-[#6B5B4A] leading-relaxed">
              At Bloomings Plus Montessori, we believe every child is a natural learner with boundless 
              potential. Our carefully prepared Montessori environment nurtures independence, creativity, 
              and a lifelong love of discovery.
            </p>
            <p className="text-lg text-[#6B5B4A] leading-relaxed">
              With experienced educators and research-based Montessori methods, we guide children ages 
              1-6 through hands-on exploration, purposeful activities, and joyful learning experiences 
              that respect each child's unique developmental journey.
            </p>
            <p className="text-lg text-[#6B5B4A] leading-relaxed">
              Our warm, inclusive community welcomes families who value child-centered education, 
              peaceful learning environments, and the development of the whole child—intellectually, 
              socially, emotionally, and physically.
            </p>
            <Button className="bg-[#A8C69F] hover:bg-[#8FB584] text-white rounded-full px-8 mt-4">
              Learn More
            </Button>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586503452950-997923af27f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwaGFuZHMlMjBvbnxlbnwxfHx8fDE3Njc1NTc0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Child focused on hands-on learning"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F9E5D8] rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E8F4E5] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
