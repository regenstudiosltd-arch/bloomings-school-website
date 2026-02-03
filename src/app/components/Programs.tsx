import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProgramCardProps {
  title: string;
  image: string;
}

function ProgramCard({ title, image }: ProgramCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-[280px]">
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}

export function Programs() {
  const programs = [
    {
      title: 'Practical Life Activities',
      image: 'https://images.unsplash.com/photo-1748518557177-fd9ffd0df1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHByYWN0aWNhbCUyMGxpZmUlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc2NzU1NzQ5NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Sensorial Development',
      image: 'https://images.unsplash.com/photo-1631013002435-cad13fcf3603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNlbnNvcnklMjBwbGF5fGVufDF8fHx8MTc2NzU1NzQ5NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Language & Phonics',
      image: 'https://images.unsplash.com/photo-1760267973986-5370a55550f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc1NTc0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1685358294572-6b658452b5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1hdGglMjBjb3VudGluZ3xlbnwxfHx8fDE3Njc1NTc0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Cultural Studies',
      image: 'https://images.unsplash.com/photo-1630976263319-84ef8df5f8a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGdsb2JlJTIwd29ybGR8ZW58MXx8fHwxNzY3NTU3NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Art & Creativity',
      image: 'https://images.unsplash.com/photo-1743267217237-cf496148dac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGFydCUyMHBhaW50aW5nfGVufDF8fHx8MTc2NzU1NzQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-[#F8F6F1]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center text-[#5A4A3A] mb-4">
          Our Programs & Activities
        </h2>
        <p className="text-center text-[#6B5B4A] text-lg mb-16 max-w-2xl mx-auto">
          Explore our comprehensive Montessori curriculum designed to nurture every aspect of your child's development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} title={program.title} image={program.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
