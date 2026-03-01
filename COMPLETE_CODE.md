# Maybeify Publication House - Complete Code

## Table of Contents
1. [Mock Data](#mock-data)
2. [Components](#components)
3. [Main App Files](#main-app-files)
4. [Styling](#styling)

---

## Mock Data

### `/app/frontend/src/data/mock.js`
```javascript
// Mock data for Maybeify Publication House

export const publishedBooks = [
  {
    id: 1,
    title: "The Midnight Chronicles",
    author: "Sarah Mitchell",
    genre: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
    amazonLink: "https://amazon.com/example1",
    rating: 4.5,
    reviews: 128,
    description: "A captivating tale of mystery and adventure set in Victorian London."
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    author: "James Anderson",
    genre: "Non-Fiction",
    coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666",
    amazonLink: "https://amazon.com/example2",
    rating: 4.8,
    reviews: 256,
    description: "An inspiring journey through self-discovery and personal growth."
  },
  {
    id: 3,
    title: "Whispers of the Past",
    author: "Emily Clarke",
    genre: "Poetry",
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb",
    amazonLink: "https://amazon.com/example3",
    rating: 4.7,
    reviews: 89,
    description: "A beautiful collection of poems exploring love, loss, and redemption."
  },
  {
    id: 4,
    title: "The Art of Storytelling",
    author: "Michael Chen",
    genre: "Academic",
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    amazonLink: "https://amazon.com/example4",
    rating: 4.6,
    reviews: 174,
    description: "A comprehensive guide to narrative techniques and creative writing."
  }
];

export const featuredAuthors = [
  {
    id: 1,
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Bestselling author with 5 published novels, specializing in historical fiction.",
    booksPublished: 5,
    genre: "Historical Fiction"
  },
  {
    id: 2,
    name: "James Anderson",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "Award-winning writer focusing on personal development and motivational literature.",
    booksPublished: 8,
    genre: "Self-Help"
  },
  {
    id: 3,
    name: "Emily Clarke",
    image: "https://images.unsplash.com/photo-1722371131066-e37037ecf109",
    bio: "Contemporary poet and literary critic with works featured in major publications.",
    booksPublished: 3,
    genre: "Poetry"
  }
];

export const testimonials = [
  {
    id: 1,
    author: "Sarah Mitchell",
    role: "Fiction Author",
    content: "Maybeify transformed my manuscript into a beautiful published book. Their professionalism and attention to detail are unmatched. The entire process was smooth and transparent.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    id: 2,
    author: "James Anderson",
    role: "Self-Help Author",
    content: "Working with Maybeify was the best decision for my writing career. They guided me through every step and helped me reach a wider audience. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    id: 3,
    author: "Emily Clarke",
    role: "Poet",
    content: "The team at Maybeify understood my vision perfectly. They brought my poetry collection to life with stunning design and excellent marketing support.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1722371131066-e37037ecf109"
  },
  {
    id: 4,
    author: "Michael Chen",
    role: "Academic Writer",
    content: "Exceptional service from start to finish. Maybeify's editorial team enhanced my work while preserving my voice. The final product exceeded all expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  }
];

export const packages = [
  {
    id: 1,
    name: "Starter",
    price: "₹5,499",
    description: "Perfect for first-time authors",
    features: [
      "Professional editing",
      "Basic cover design",
      "ISBN registration",
      "eBook formatting",
      "Amazon listing",
      "Author copy (2 books)"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Professional",
    price: "₹7,499",
    description: "Most popular choice for serious authors",
    features: [
      "Premium editing & proofreading",
      "Custom cover design",
      "ISBN registration",
      "Print + eBook formatting",
      "Multi-platform distribution",
      "Marketing support",
      "Author copies (5 books)",
      "Social media promotion"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Premium",
    price: "₹14,499",
    description: "Complete publishing solution",
    features: [
      "Comprehensive editing",
      "Premium cover design",
      "ISBN registration",
      "Print + eBook + Audiobook",
      "Global distribution",
      "Full marketing campaign",
      "Author website",
      "Author copies (10 books)",
      "Book launch event",
      "PR & media outreach"
    ],
    popular: false
  }
];

export const howItWorksSteps = [
  {
    id: 1,
    step: "01",
    title: "Submit Your Manuscript",
    description: "Send us your manuscript along with your vision and genre. We'll review it and get back to you within 48 hours."
  },
  {
    id: 2,
    step: "02",
    title: "Choose Your Package",
    description: "Select the publishing package that best fits your needs and budget. Our team will guide you through the options."
  },
  {
    id: 3,
    step: "03",
    title: "Professional Editing",
    description: "Our expert editors will work with you to refine your manuscript while preserving your unique voice."
  },
  {
    id: 4,
    step: "04",
    title: "Design & Formatting",
    description: "We create stunning cover designs and format your book for both print and digital platforms."
  },
  {
    id: 5,
    step: "05",
    title: "Publication & Distribution",
    description: "Your book goes live on Amazon and other platforms. We handle all technical aspects of distribution."
  },
  {
    id: 6,
    step: "06",
    title: "Marketing & Promotion",
    description: "We help promote your book through our marketing channels and guide you on building your author brand."
  }
];

export const contestInfo = {
  name: "LITX AWARDS 2026",
  tagline: "Celebrating Literary Excellence",
  description: "Submit your best work and compete with talented authors nationwide. Winners receive cash prizes, e-books, and e-certificates.",
  prizes: [
    { position: "1st Prize", amount: "₹1,500", color: "#C9A961" },
    { position: "2nd Prize", amount: "₹700", color: "#A8A8A8" },
    { position: "3rd Prize", amount: "₹300", color: "#CD7F32" }
  ],
  additionalBenefits: [
    "E-book to all participating authors",
    "E-certificate to all participants",
    "Feature in Maybeify newsletter",
    "Publication opportunity for winners"
  ],
  contactEmail: "contestmaybeify@gmail.com"
};

export const socialMediaLinks = {
  instagram: "https://instagram.com/maybeify",
  facebook: "https://facebook.com/maybeify",
  linkedin: "https://linkedin.com/company/maybeify"
};
```

---

## Components

### `/app/frontend/src/components/Header.jsx`
```javascript
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Packages', id: 'packages' },
    { label: 'Books', id: 'books' },
    { label: 'Authors', id: 'authors' },
    { label: 'Awards', id: 'contest' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl md:text-3xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
              Maybeify
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Publish With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Publish With Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
```

### `/app/frontend/src/components/Hero.jsx`
```javascript
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
          src="https://images.unsplash.com/photo-1679671519128-fb4508152a80?w=1920&q=80"
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
```

### `/app/frontend/src/components/About.jsx`
```javascript
import React from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: BookOpen, value: '500+', label: 'Books Published' },
    { icon: Users, value: '300+', label: 'Happy Authors' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="section-container bg-secondary">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="heading-section">About Maybeify</h2>
          <div className="space-y-4 text-body">
            <p>
              Maybeify is a leading publication house dedicated to transforming aspiring authors into published 
              writers. With years of expertise in the publishing industry, we provide comprehensive services 
              that cover every aspect of book publication.
            </p>
            <p>
              Our mission is to make quality publishing accessible to all authors, regardless of their 
              background or experience. We believe every story deserves to be told, and we're here to 
              help you share yours with the world.
            </p>
            <p>
              From professional editing and stunning cover designs to global distribution and marketing 
              support, we handle all the technical details so you can focus on what you do best—writing.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
```

### `/app/frontend/src/components/HowItWorks.jsx`
```javascript
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
```

### `/app/frontend/src/components/Packages.jsx`
```javascript
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
```

### `/app/frontend/src/components/FeaturedBooks.jsx`
```javascript
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
```

### `/app/frontend/src/components/FeaturedAuthors.jsx`
```javascript
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
```

### `/app/frontend/src/components/Contest.jsx`
```javascript
import React from 'react';
import { contestInfo } from '../data/mock';
import { Trophy, Award, Medal, Gift, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Contest = () => {
  return (
    <section id="contest" className="section-container bg-gradient-to-br from-primary to-[hsl(221,70%,28%)] text-white">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Trophy className="text-accent" size={48} />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4">{contestInfo.name}</h2>
        <p className="text-2xl text-white/90 mb-6 italic">{contestInfo.tagline}</p>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          {contestInfo.description}
        </p>
      </div>

      {/* Prizes Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
        {contestInfo.prizes.map((prize, index) => {
          const icons = [
            <Trophy size={48} className="mx-auto mb-4" style={{ color: prize.color }} />,
            <Award size={48} className="mx-auto mb-4" style={{ color: prize.color }} />,
            <Medal size={48} className="mx-auto mb-4" style={{ color: prize.color }} />
          ];
          
          return (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              {icons[index]}
              <h3 className="text-2xl font-bold mb-3">{prize.position}</h3>
              <div className="text-4xl font-bold mb-2" style={{ color: prize.color }}>
                {prize.amount}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Benefits */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Gift className="text-accent" size={32} />
          <h3 className="text-3xl font-bold">Additional Benefits</h3>
        </div>
        
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {contestInfo.additionalBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3 text-lg">
              <div className="bg-accent w-2 h-2 rounded-full"></div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="text-center pt-6 border-t border-white/20">
          <p className="text-lg mb-4">Submit your entries to:</p>
          <a 
            href={`mailto:${contestInfo.contactEmail}`}
            className="inline-flex items-center gap-3 bg-accent text-[hsl(222,47%,11%)] hover:bg-[hsl(43,89%,65%)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            {contestInfo.contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contest;
```

### `/app/frontend/src/components/Testimonials.jsx`
```javascript
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
```

### `/app/frontend/src/components/Contact.jsx`
```javascript
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission - will be replaced with actual API call
    console.log('Form submitted:', formData);
    
    toast.success('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-container bg-secondary">
      <div className="text-center mb-16">
        <h2 className="heading-section">Get In Touch</h2>
        <p className="text-body max-w-2xl mx-auto">
          Ready to start your publishing journey? Contact us today and let's bring your story to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Your Name *
              </label>
              <Input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address *
              </label>
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number
              </label>
              <Input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Subject *
              </label>
              <Input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Publishing Inquiry"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Message *
              </label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your manuscript and publishing goals..."
                required
                rows={5}
                className="w-full"
              />
            </div>

            <Button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Send Message
              <Send size={18} />
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <a 
                    href="mailto:contestmaybeify@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contestmaybeify@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Phone</div>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Location</div>
                  <p className="text-muted-foreground">
                    Mumbai, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

### `/app/frontend/src/components/Footer.jsx`
```javascript
import React from 'react';
import { socialMediaLinks } from '../data/mock';
import { Facebook, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Maybeify</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional publication services for aspiring authors. We transform manuscripts 
              into bestsellers through our comprehensive publishing solutions.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contestmaybeify@gmail.com"
                className="bg-white/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('packages')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('books')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Featured Books
                </button>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('authors')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Featured Authors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contest')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  LITX Awards
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Maybeify Publication House. All rights reserved.
          </p>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-accent text-accent-foreground hover:opacity-90 p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## Main App Files

### `/app/frontend/src/App.js`
```javascript
import React from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import FeaturedBooks from "@/components/FeaturedBooks";
import FeaturedAuthors from "@/components/FeaturedAuthors";
import Contest from "@/components/Contest";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Packages />
        <FeaturedBooks />
        <FeaturedAuthors />
        <Contest />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
```

---

## Styling

### `/app/frontend/src/App.css`
```css
.App-logo {
    height: 40vmin;
    pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
}

.App-link {
    color: #61dafb;
}

@keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}

/* Remove default margin */
body {
    margin: 0;
    padding: 0;
}

/* Main app container should not center align text */
.App {
    text-align: left;
}
```

### `/app/frontend/src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    margin: 0;
    font-family:
        -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family:
        source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

@layer base {
    :root {
        /* Maybeify Publication House - Sophisticated Publishing Theme */
        --background: 0 0% 100%;
        --foreground: 222 47% 11%;
        
        /* Brand Colors - Deep Blues & Burgundy with Gold Accents */
        --brand-primary: 221 83% 22%;        /* Deep Navy Blue */
        --brand-secondary: 0 45% 35%;        /* Burgundy */
        --brand-accent: 43 89% 58%;          /* Gold */
        --brand-light: 221 40% 95%;          /* Light Blue Tint */
        
        --card: 0 0% 100%;
        --card-foreground: 222 47% 11%;
        --popover: 0 0% 100%;
        --popover-foreground: 222 47% 11%;
        --primary: 221 83% 22%;
        --primary-foreground: 0 0% 98%;
        --secondary: 221 40% 95%;
        --secondary-foreground: 222 47% 11%;
        --muted: 210 40% 96.1%;
        --muted-foreground: 215 16.3% 46.9%;
        --accent: 43 89% 58%;
        --accent-foreground: 222 47% 11%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 214 32% 91%;
        --input: 214 32% 91%;
        --ring: 221 83% 22%;
        --radius: 0.5rem;
    }
}

@layer base {
    * {
        @apply border-border;
    }
    body {
        @apply bg-background text-foreground;
    }
}

/* Maybeify Custom Styles */
@layer components {
    .btn-primary {
        @apply bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 px-8 py-3 rounded-full font-semibold uppercase tracking-wide;
    }
    
    .btn-secondary {
        @apply border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 rounded-full font-semibold uppercase tracking-wide;
    }
    
    .btn-accent {
        @apply bg-accent text-accent-foreground hover:opacity-90 transition-all duration-300 px-8 py-3 rounded-full font-semibold uppercase tracking-wide;
    }
    
    .section-container {
        @apply max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24;
    }
    
    .heading-display {
        @apply text-5xl md:text-7xl font-bold text-primary leading-tight;
    }
    
    .heading-section {
        @apply text-4xl md:text-5xl font-bold text-primary mb-6;
    }
    
    .text-body {
        @apply text-lg text-muted-foreground leading-relaxed;
    }
}

@layer base {
    [data-debug-wrapper="true"] {
        display: contents !important;
    }

    [data-debug-wrapper="true"] > * {
        margin-left: inherit;
        margin-right: inherit;
        margin-top: inherit;
        margin-bottom: inherit;
        padding-left: inherit;
        padding-right: inherit;
        padding-top: inherit;
        padding-bottom: inherit;
        column-gap: inherit;
        row-gap: inherit;
        gap: inherit;
        border-left-width: inherit;
        border-right-width: inherit;
        border-top-width: inherit;
        border-bottom-width: inherit;
        border-left-style: inherit;
        border-right-style: inherit;
        border-top-style: inherit;
        border-bottom-style: inherit;
        border-left-color: inherit;
        border-right-color: inherit;
        border-top-color: inherit;
        border-bottom-color: inherit;
    }
}
```

---

## Usage Instructions

1. **Installation**: All dependencies are already installed from `package.json`

2. **Development**: The frontend is running with hot reload enabled

3. **Mock Data**: All content is stored in `/app/frontend/src/data/mock.js` - update this file to change book details, authors, testimonials, etc.

4. **Customization**:
   - Colors: Edit CSS variables in `/app/frontend/src/index.css`
   - Content: Update mock data in `/app/frontend/src/data/mock.js`
   - Social Media: Update links in mock.js socialMediaLinks object
   - Images: Replace image URLs in mock.js with your own

5. **Next Steps**: 
   - Backend integration for contact form
   - Database setup for storing inquiries
   - Email notifications
   - Admin panel for content management

---

**Note**: This is currently a frontend-only implementation with mock data. Contact form submissions are logged to console and show toast notifications, but don't persist to a database yet.
