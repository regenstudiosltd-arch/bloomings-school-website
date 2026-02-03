import { ImageWithFallback } from './figma/ImageWithFallback';
import toddlerImage from '../../assets/a3b0f2c561be00662b12737c7b9b7446f025eabd.png';
import earlyChildhoodImage from '../../assets/88dadc1c673ace397b068db28c8de1aba88f81d4.png';
import montessoriPlusImage from '../../assets/b54f416bb60d7371abb4b6b1d356e86b10361fa1.png';

export function Levels() {
  return (
    <>
      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7] text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl md:text-3xl text-[#5A4A3A] italic leading-relaxed max-w-4xl mx-auto">
            "The greatest gifts we can give our children are the roots of responsibility and the wings of independence."
          </p>
          <p className="text-xl text-[#8B7355] mt-4">– Maria Montessori</p>
        </div>
      </section>

      {/* Levels Header */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-[#A8C69F] mb-4">LEVELS</h2>
          <p className="text-xl text-[#5A4A3A]">
            At Bloomings Montessori, we believe that each child deserves a prepared and stimulating environment to learn and grow.
          </p>
        </div>
      </section>

      {/* Toddler - Purple with image on right */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#9D7FEA] to-[#7C5FCE] p-12 md:p-16 flex flex-col justify-center text-white min-h-[500px]">
            <h2 className="text-4xl md:text-5xl mb-4">
              Toddler
            </h2>
            <p className="text-2xl mb-6 text-white/90">15 – 24 months</p>
            <p className="text-xl text-white/90 leading-relaxed">
              Our 15 – 24-month-olds are an essential part of the community. BM+ offers an 
              opportunity for toddlers to learn by providing a concrete experience in a 
              social and safe environment with adult supervision to extend their learning 
              experience.
            </p>
          </div>
          <div className="relative min-h-[500px]">
            <ImageWithFallback
              src={toddlerImage}
              alt="Toddler Program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Montessori Early Childhood - Yellow with image on left */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[500px] order-2 md:order-1">
            <ImageWithFallback
              src={earlyChildhoodImage}
              alt="Montessori Early Childhood"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-[#FFD93D] to-[#FFC107] p-12 md:p-16 flex flex-col justify-center text-gray-800 min-h-[500px] order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-4">
              Montessori Early<br />Childhood
            </h2>
            <p className="text-2xl mb-6">3 to 4 years</p>
            <p className="text-xl leading-relaxed">
              Early childhood is a great time for fun and learning. During this period our 3 to 4 year 
              olds build a foundation as they grow older. This is the ideal time for children to develop 
              enthusiasm for learning and growth in all areas of development (holistic development). 
              Our Montessori curriculum and prepared environment ensures this.
            </p>
          </div>
        </div>
      </section>

      {/* Montessori Plus - Coral with image on right */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#FF8B94] to-[#FF6B7A] p-12 md:p-16 flex flex-col justify-center text-white min-h-[500px]">
            <h2 className="text-4xl md:text-5xl mb-4">
              Montessori Plus
            </h2>
            <p className="text-2xl mb-6 text-white/90">4+ to 6 years</p>
            <p className="text-xl text-white/90 leading-relaxed">
              BM+ combines authentic Montessori methods with traditional methods for our 4+ to 6 year olds. 
              Our Montessori Plus System enables children to bridge the gap between the Montessori system 
              and the Traditional system. Thus, ensuring a smooth and positive transition into further 
              schooling. During this stage, our children develop the essential social, emotional, problem 
              solving and study skills needed throughout for further schooling.
            </p>
          </div>
          <div className="relative min-h-[500px]">
            <ImageWithFallback
              src={montessoriPlusImage}
              alt="Montessori Plus Program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}