import React from 'react';
import { testimonials } from '../data/mock';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-section">What Our Authors Say</h2>
        <p className="text-body max-w-2xl mx-auto">
          Don't just take our word for it. Hear from the authors who have experienced 
          the Maybeify difference.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white border border-border rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote size={24} />
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4 mt-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="text-accent" fill="currentColor" />
              ))}
            </div>

            {/* Content */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
              "{testimonial.content}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <img 
                src={testimonial.image}
                alt={testimonial.author}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
