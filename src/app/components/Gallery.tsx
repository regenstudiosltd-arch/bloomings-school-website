import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';
import img1 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.35 (1).jpeg';
import img2 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.38 (1).jpeg';
import img3 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.39 (2).jpeg';
import img4 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.44 (1).jpeg';
import img5 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.45 (2).jpeg';
import img6 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.45 (3).jpeg';
import img7 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.48 (2).jpeg';
import img8 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.48 (3).jpeg';
import img9 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.49.jpeg';
import img10 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.51 (1).jpeg';
import img11 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.51 (2).jpeg';
import img12 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.20.52 (1).jpeg';
import img13 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.22.35.jpeg';
import img14 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.06.jpeg';
import img15 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.07.jpeg';
import img16 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.08.jpeg';
import img17 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.15.jpeg';
import img18 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.47.jpeg';
import img19 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.48 (1).jpeg';
import img20 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.48.jpeg';
import img21 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.49.jpeg';
import img22 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.55.jpeg';
import img23 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.44.56.jpeg';
import img24 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.45.11.jpeg';
import img25 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.45.12.jpeg';
import img26 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 10.45.16.jpeg';
import img27 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 11.12.03.jpeg';
import img28 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 11.12.04 (1).jpeg';
import img29 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 11.12.04.jpeg';
import img30 from '../../assets/gallery/WhatsApp Image 2025-12-10 at 11.12.05.jpeg';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { url: img1, title: 'School Activities 1', category: 'Learning Activities' },
    { url: img2, title: 'School Activities 2', category: 'Learning Activities' },
    { url: img3, title: 'School Activities 3', category: 'Learning Activities' },
    { url: img4, title: 'Creative Learning 1', category: 'Activities' },
    { url: img5, title: 'Creative Learning 2', category: 'Activities' },
    { url: img6, title: 'Creative Learning 3', category: 'Activities' },
    { url: img7, title: 'Classroom 1', category: 'Facilities' },
    { url: img8, title: 'Classroom 2', category: 'Facilities' },
    { url: img9, title: 'Classroom 3', category: 'Facilities' },
    { url: img10, title: 'Student Engagement 1', category: 'Learning Activities' },
    { url: img11, title: 'Student Engagement 2', category: 'Learning Activities' },
    { url: img12, title: 'Student Engagement 3', category: 'Learning Activities' },
    { url: img13, title: 'Practical Work 1', category: 'Learning Activities' },
    { url: img14, title: 'Practical Work 2', category: 'Learning Activities' },
    { url: img15, title: 'Practical Work 3', category: 'Learning Activities' },
    { url: img16, title: 'School Events 1', category: 'Activities' },
    { url: img17, title: 'School Events 2', category: 'Activities' },
    { url: img18, title: 'Campus Tour 1', category: 'Facilities' },
    { url: img19, title: 'Campus Tour 2', category: 'Facilities' },
    { url: img20, title: 'Campus Tour 3', category: 'Facilities' },
    { url: img21, title: 'Learning Space 1', category: 'Facilities' },
    { url: img22, title: 'Learning Space 2', category: 'Facilities' },
    { url: img23, title: 'Learning Space 3', category: 'Facilities' },
    { url: img24, title: 'Interactive Learning 1', category: 'Learning Activities' },
    { url: img25, title: 'Interactive Learning 2', category: 'Learning Activities' },
    { url: img26, title: 'Interactive Learning 3', category: 'Learning Activities' },
    { url: img27, title: 'Outdoor Activities 1', category: 'Activities' },
    { url: img28, title: 'Outdoor Activities 2', category: 'Activities' },
    { url: img29, title: 'Outdoor Activities 3', category: 'Activities' },
    { url: img30, title: 'Special Moments', category: 'Learning Activities' },
  ];

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7]" id="gallery">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl text-[#A8C69F] mb-4">Photo Gallery</h2>
          <p className="text-xl text-[#5A4A3A] max-w-3xl mx-auto mb-8">
            Take a visual tour of our beautiful campus, classrooms, and happy learners
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-[#A8C69F] text-white'
                    : 'bg-white text-[#5A4A3A] hover:bg-[#A8C69F]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[#5A4A3A] mb-6">
            Want to see our campus in person?
          </p>
          <a
            href="#admissions"
            className="inline-block bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-4 rounded-full transition-colors duration-300 text-lg font-medium"
          >
            Schedule a Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
}