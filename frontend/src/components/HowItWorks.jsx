import React from 'react';
import { howItWorksSteps } from '../data/mock';
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-section">How It Works</h2>
        <p className="text-body max-w-2xl mx-auto">
          Our streamlined publishing process makes it easy to bring your book to life. 
          Follow these simple steps to become a published author.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {howItWorksSteps.map((step, index) => (
          <div 
            key={step.id}
            className="relative bg-white border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Step Number */}
            <div className="absolute -top-6 left-8">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.step}
              </div>
            </div>

            {/* Content */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>

            {/* Check Icon */}
            <div className="mt-6 flex justify-end">
              <CheckCircle className="text-accent" size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
