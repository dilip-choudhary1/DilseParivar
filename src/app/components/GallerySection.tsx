import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1561285735-db86c775c5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwd2FybSUyMGFtYmllbmNlJTIwZmFtaWx5fGVufDF8fHx8MTc2OTgyOTg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Restaurant Interior',
    category: 'Ambience',
  },
  {
    url: 'https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWwlMjB2ZWdldGFyaWFuJTIwZm9vZHxlbnwxfHx8fDE3Njk4Mjk4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Indian Thali',
    category: 'Food',
  },
  {
    url: 'https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkYWwlMjBjdXJyeSUyMHJpY2V8ZW58MXx8fHwxNzY5ODI5ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Dal and Rice',
    category: 'Food',
  },
  {
    url: 'https://images.unsplash.com/photo-1586524068358-77d2196875e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBuYWFuJTIwYnJlYWQlMjByb3RpfGVufDF8fHx8MTc2OTgyOTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Fresh Naan',
    category: 'Food',
  },
  {
    url: 'https://images.unsplash.com/photo-1697155836252-d7f969108b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3MlMjBhcHBldGl6ZXJ8ZW58MXx8fHwxNzY5ODI5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Samosas',
    category: 'Food',
  },
  {
    url: 'https://images.unsplash.com/photo-1707339088654-117df66bd55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZSUyMHZlZ2V0YWJsZXxlbnwxfHx8fDE3Njk4Mjk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Vegetable Biryani',
    category: 'Food',
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Glimpse of Our Restaurant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the warmth of our ambience and the beauty of our dishes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Note */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Visit Us & Experience the Difference
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We invite you and your family to dine with us and enjoy authentic vegetarian cuisine 
            in a warm, welcoming environment. Every meal is a celebration!
          </p>
        </div>
      </div>
    </section>
  );
};
