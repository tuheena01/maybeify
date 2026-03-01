import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://wallpapercave.com/wp/wp12623995.jpg"
          alt="Elegant Library"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(221,83%,22%)]/95 via-[hsl(221,83%,22%)]/85 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Bring Your Story to Life
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Professional publishing services for aspiring authors. From manuscript to bestseller, 
            we guide you through every step of your publishing journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-[hsl(43,89%,58%)] hover:bg-[hsl(43,89%,65%)] text-[hsl(222,47%,11%)] px-8 py-6 text-lg font-bold rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(221,83%,22%)] px-8 py-6 text-lg font-bold rounded-full uppercase tracking-wide transition-all duration-300"
            >
              View Packages
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
