import { Heart, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface CourseCardProps {
  title: string;
  ageRange: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
}

function CourseCard({ title, ageRange, description, bgColor, icon }: CourseCardProps) {
  return (
    <div 
      className={`${bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-white/30 backdrop-blur-sm rounded-full p-4">
          {icon}
        </div>
        <span className="bg-white/90 text-sm px-4 py-2 rounded-full">
          {ageRange}
        </span>
      </div>
      <h3 className="text-2xl text-white mb-3">
        {title}
      </h3>
      <p className="text-white/90 mb-6 leading-relaxed">
        {description}
      </p>
      <Button 
        variant="outline" 
        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white rounded-full"
      >
        Learn More
      </Button>
    </div>
  );
}

export function Courses() {
  const courses = [
    {
      title: 'Toddler Program',
      ageRange: '1-3 years',
      description: 'A nurturing introduction to Montessori principles, focusing on independence, language development, and sensory exploration through gentle, child-led activities.',
      bgColor: 'bg-gradient-to-br from-[#E9967A] to-[#E76F51]',
      icon: <Heart className="w-8 h-8 text-white" />
    },
    {
      title: 'Nursery Program',
      ageRange: '3-4 years',
      description: 'Building confidence and social skills through practical life exercises, early literacy, creative arts, and collaborative play in a prepared Montessori environment.',
      bgColor: 'bg-gradient-to-br from-[#F4A261] to-[#E9B872]',
      icon: <Star className="w-8 h-8 text-white" />
    },
    {
      title: 'Kindergarten Program',
      ageRange: '4-6 years',
      description: 'Advanced Montessori learning with math, reading, writing, science, and cultural studies. Children develop critical thinking and prepare for elementary success.',
      bgColor: 'bg-gradient-to-br from-[#A8C69F] to-[#7FB577]',
      icon: <Sparkles className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center text-[#5A4A3A] mb-4">
          Our Programs by Age Group
        </h2>
        <p className="text-center text-[#6B5B4A] text-lg mb-16 max-w-2xl mx-auto">
          Carefully designed programs that honor each developmental stage of early childhood
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              ageRange={course.ageRange}
              description={course.description}
              bgColor={course.bgColor}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
