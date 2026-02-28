import React from 'react';
import { featuredAuthors } from '../data/mock';
import { BookOpen } from 'lucide-react';

const FeaturedAuthors = () => {
  return (
    <section id="authors" className="section-container bg-secondary">
      <div className="text-center mb-16">
        <h2 className="heading-section">Featured Authors</h2>
        <p className="text-body max-w-2xl mx-auto">
          Meet some of the talented authors who have trusted Maybeify to bring their stories to life.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {featuredAuthors.map((author) => (
          <div 
            key={author.id}
            className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Author Image */}
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Author Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{author.name}</h3>
              <div className="text-sm text-accent font-semibold mb-3 uppercase tracking-wide">
                {author.genre}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {author.bio}
              </p>
              
              {/* Books Count */}
              <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                <BookOpen size={18} />
                <span>{author.booksPublished} Books Published</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAuthors;
