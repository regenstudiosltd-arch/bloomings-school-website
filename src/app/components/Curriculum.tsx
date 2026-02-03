import { ImageWithFallback } from './figma/ImageWithFallback';
import curriculumImage from '../../assets/fdc43d011ecd3efb40425d8be751563b0557396f.png';
import afterSchoolImage from '../../assets/e4eada903d184e979268cadf5a71c43f5ae53241.png';

export function Curriculum() {
  const montessoriItems = [
    "Creativity",
    "Literacy",
    "Education of the Senses",
    "Numeracy & Arithmetic",
    "Activities of Everyday Living",
    "Knowledge & Understanding of world",
  ];

  const afterSchoolActivities = [
    "Zumba",
    "Sports",
    "Taekwondo",
    "Cooking",
    "Art & Crafts",
    "African Drumming & Dancing",
  ];

  return (
    <>
      {/* Curriculum Header */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-[#A8C69F] mb-6">Curriculum</h2>
          <p className="text-xl text-[#5A4A3A] mb-4">
            Bloomings Montessori Plus is a bilingual preschool (English and French)
          </p>
        </div>
      </section>

      {/* Montessori Curriculum - Teal with image on left */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[500px] order-2 md:order-1">
            <ImageWithFallback
              src={curriculumImage}
              alt="Montessori Curriculum"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A49A] p-12 md:p-16 flex flex-col justify-center text-white min-h-[500px] order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-8">
              Montessori<br />Curriculum
            </h2>
            <ul className="space-y-3">
              {montessoriItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-white mr-3 text-2xl">•</span>
                  <span className="text-xl text-white/95">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* After School Activities - Purple with image on right */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#9D7FEA] to-[#7C5FCE] p-12 md:p-16 flex flex-col justify-center text-white min-h-[500px]">
            <h2 className="text-4xl md:text-5xl mb-4">
              After School<br />Activities
            </h2>
            <p className="text-xl mb-8 text-white/90">(2+ - 6 years)</p>
            <ul className="space-y-3">
              {afterSchoolActivities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-white mr-3 text-2xl">•</span>
                  <span className="text-xl text-white/95">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[500px]">
            <ImageWithFallback
              src={afterSchoolImage}
              alt="After School Activities"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFD93D] to-[#FFC107] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-12">Why Parents Choose Us</h2>
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <p className="text-lg text-gray-800">Serene and inclusive environment</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <p className="text-lg text-gray-800">Montessori EYFS</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <p className="text-lg text-gray-800">Bilingual teaching (English & French)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <p className="text-lg text-gray-800">Hands-on and engaging activities</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <p className="text-lg text-gray-800">Early drop-off & late pick-up services</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💳</span>
                <p className="text-lg text-gray-800">Flexible fee payment system</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}