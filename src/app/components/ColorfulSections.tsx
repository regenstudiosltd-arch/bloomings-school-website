import { ImageWithFallback } from './figma/ImageWithFallback';

export function ColorfulSections() {
  return (
    <>
      {/* Section 1 - Purple with image on right */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#9D7FEA] to-[#7C5FCE] p-12 md:p-16 flex flex-col justify-center text-white min-h-[500px]">
            <h2 className="text-4xl md:text-5xl mb-6">
              Practical Life<br />Activities
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Children develop independence and coordination through everyday tasks. 
              From pouring water to preparing snacks, these activities build confidence 
              and fine motor skills.
            </p>
            <button className="bg-white text-[#9D7FEA] px-8 py-3 rounded-full w-fit hover:bg-white/90 transition-colors">
              Explore Programs
            </button>
          </div>
          <div className="relative min-h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1704708798460-1c34dd8de906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2hpbGRyZW4lMjBoYW5kc3xlbnwxfHx8fDE3Njc3ODAxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Practical Life Activities"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Yellow with image on left */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[500px] order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rc3xlbnwxfHx8fDE3Njc3ODAxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Language Development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-[#FFD93D] to-[#FFC107] p-12 md:p-16 flex flex-col justify-center text-gray-800 min-h-[500px] order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-6">
              Language &<br />Phonics
            </h2>
            <p className="text-xl leading-relaxed mb-6">
              Building literacy through hands-on materials and sensory experiences. 
              Children learn letter sounds, word formation, and develop a love for reading 
              at their own pace.
            </p>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full w-fit hover:bg-gray-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 - Coral with image on right */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#FF8B94] to-[#FF6B7A] p-12 md:p-16 flex flex-col justify-center text-white min-h-[500px]">
            <h2 className="text-4xl md:text-5xl mb-6">
              Creative Arts<br />& Music
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Self-expression through art, music, and movement. Children explore colors, 
              textures, and sounds while developing creativity and emotional intelligence.
            </p>
            <button className="bg-white text-[#FF8B94] px-8 py-3 rounded-full w-fit hover:bg-white/90 transition-colors">
              View Gallery
            </button>
          </div>
          <div className="relative min-h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1611084401135-730a8f8541c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY3NzgwMTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Creative Arts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4 - Teal with image on left */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[500px] order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1690843858493-b6b9d6393dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2NzY3MDg3OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Outdoor Learning"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-[#4ECDC4] to-[#44A49A] p-12 md:p-16 flex flex-col justify-center text-white min-h-[500px] order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl mb-6">
              Outdoor<br />Exploration
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Nature-based learning and physical development. Children connect with the 
              environment while building gross motor skills and understanding the natural world.
            </p>
            <button className="bg-white text-[#4ECDC4] px-8 py-3 rounded-full w-fit hover:bg-white/90 transition-colors">
              Discover More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
