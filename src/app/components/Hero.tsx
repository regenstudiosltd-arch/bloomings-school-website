import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar } from 'lucide-react';
import slide1 from '../../assets/38ac60b707e725ffd339e2a6a98a50e3ec2437f7.png';
import slide2 from '../../assets/c3272da7f5471bbdceb8de39d2009da873462e49.png';
import slide3 from '../../assets/9da33a01dc0ac0e7296720072ea96e062f53df74.png';
import slide4 from '../../assets/1aaf2f8eb97030138cb920863ab87f6c6cad4b9f.png';

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in-out',
  };

  const slides = [
    {
      image: slide1,
      title: "Where Every Child Blooms",
      subtitle: "Authentic Montessori Education in East Airport",
    },
    {
      image: slide2,
      title: "Celebrating Culture & Diversity",
      subtitle: "Building Global Citizens Through Montessori",
    },
    {
      image: slide3,
      title: "United in Learning",
      subtitle: "Nurturing Independence & Lifelong Learning",
    },
    {
      image: slide4,
      title: "Hands-On Learning",
      subtitle: "Developing Fine Motor Skills & Problem Solving",
    },
  ];

  return (
    <section className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative w-full h-[500px] md:h-[700px]">
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24">
                <div className="max-w-3xl">
                  <h1 className="text-white text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-xl md:text-2xl mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#admissions" 
                      className="bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 text-lg font-medium"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule a Tour
                    </a>
                    <a 
                      href="#levels" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full transition-colors duration-300 border-2 border-white/50 text-lg font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}