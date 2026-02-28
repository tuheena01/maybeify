import React from 'react';
import { publishedBooks } from '../data/mock';
import { Button } from './ui/button';
import { ExternalLink, Star } from 'lucide-react';

const FeaturedBooks = () => {
  return (
    <section id="books" className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-section">Featured Books & Best Sellers</h2>
        <p className="text-body max-w-2xl mx-auto">
          Discover the amazing works published through Maybeify. These books represent 
          the talent and dedication of our incredible authors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {publishedBooks.map((book) => (
          <div 
            key={book.id}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Book Cover */}
            <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
              <img 
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Amazon Link Overlay */}
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Button className="btn-accent flex items-center gap-2">
                  View on Amazon
                  <ExternalLink size={16} />
                </Button>
              </a>
            </div>

            {/* Book Info */}
            <div className="p-6">
              <div className="text-xs text-accent font-semibold mb-2 uppercase tracking-wide">
                {book.genre}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                by {book.author}
              </p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {book.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center text-accent">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 font-semibold">{book.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({book.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
