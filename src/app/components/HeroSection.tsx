import React from 'react';
import { MapPin, UtensilsCrossed, ShieldCheck, Users } from 'lucide-react';
// import restaurantFront from '../../src/assets/image.png';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative">
      {/* Hero Image with Overlay */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <img
          src='/front.jpg'
          // src={restaurantFront}
          alt="Dil Se Parivar Restaurant Front"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Dil Se Parivar
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Delicious Pure Veg Food, Made Dil Se for Your Family
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('menu')}
                  className="bg-primary text-white px-8 py-4 rounded-full hover:bg-accent transition-colors shadow-lg text-lg"
                >
                  View Menu
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-primary px-8 py-4 rounded-full hover:bg-muted transition-colors shadow-lg text-lg"
                >
                  Get Directions
                </button>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="bg-secondary p-2 rounded-full">
                    <UtensilsCrossed className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">100% Pure Veg</span>
                </div>

                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="bg-primary p-2 rounded-full">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">Family Friendly</span>
                </div>

                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="bg-accent p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">Hygienic Kitchen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};