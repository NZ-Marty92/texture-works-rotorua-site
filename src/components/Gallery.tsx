import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: "Modern venetian plaster wall with elegant warm beige finish in luxury residential interior",
      title: "Venetian Plaster Feature Wall"
    },
    {
      src: gallery2,
      alt: "Contemporary micro cement bathroom walls with seamless matte finish in neutral gray tones",
      title: "Micro Cement Bathroom"
    },
    {
      src: gallery3,
      alt: "Custom textured wall finish with artistic patterns in warm earth tones showing artisanal craftsmanship",
      title: "Custom Artistic Texture"
    },
    {
      src: gallery4,
      alt: "Polished plaster feature wall in modern living room with sophisticated warm lighting",
      title: "Polished Plaster Living Room"
    },
    {
      src: gallery5,
      alt: "Venetian plaster accent wall behind bed in bedroom with warm terracotta tones and elegant luxury design",
      title: "Bedroom Accent Wall"
    },
    {
      src: gallery6,
      alt: "Micro cement kitchen backsplash with seamless finish in modern minimalist design",
      title: "Kitchen Backsplash"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 bg-earth-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
              Explore our latest projects showcasing the beauty and versatility 
              of premium plaster and cement finishes.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card shadow-soft hover:shadow-elegant transition-smooth fade-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {image.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 fade-up">
            <p className="text-charcoal-light mb-6">
              Ready to transform your space with premium finishes?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-earth-warm text-white rounded-lg hover:bg-earth-warm/90 transition-smooth shadow-soft"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Gallery image in full size"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-smooth"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;