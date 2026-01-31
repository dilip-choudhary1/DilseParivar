import React from 'react';
import { Heart, Leaf, Home, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWwlMjB2ZWdldGFyaWFuJTIwZm9vZHxlbnwxfHx8fDE3Njk4Mjk4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional Indian Thali"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Food Made With Love, Served With Heart
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Dil Se Parivar, we believe that food is more than just nourishment—it's a way to bring families together. 
              Our restaurant in Dombivli, Maharashtra, serves authentic Indian pure vegetarian cuisine that reminds you of home.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every dish is prepared with the finest ingredients and traditional recipes passed down through generations. 
              We take pride in creating a warm, welcoming atmosphere where every guest feels like part of our family.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fresh Ingredients</h4>
                  <p className="text-sm text-muted-foreground">Sourced daily for quality</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Homestyle Flavors</h4>
                  <p className="text-sm text-muted-foreground">Traditional recipes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Made With Care</h4>
                  <p className="text-sm text-muted-foreground">Every dish prepared lovingly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Comfort Food</h4>
                  <p className="text-sm text-muted-foreground">For all ages & tastes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
