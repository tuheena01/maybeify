import React from 'react';
import { packages } from '../data/mock';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

const Packages = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="section-container bg-secondary">
      <div className="text-center mb-16">
        <h2 className="heading-section">Our Packages</h2>
        <p className="text-body max-w-2xl mx-auto">
          Choose the perfect package for your publishing journey. Each package is designed 
          to meet different needs and budgets.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className={`relative bg-white rounded-lg border-2 ${
              pkg.popular ? 'border-accent shadow-2xl scale-105' : 'border-border shadow-lg'
            } p-8 hover:shadow-2xl transition-all duration-300 flex flex-col`}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold uppercase text-sm flex items-center gap-2 shadow-lg">
                  <Star size={16} fill="currentColor" />
                  Most Popular
                </div>
              </div>
            )}

            {/* Package Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
              <div className="text-4xl font-bold text-primary">{pkg.price}</div>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button 
              onClick={scrollToContact}
              className={pkg.popular ? 'btn-accent w-full' : 'btn-primary w-full'}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
