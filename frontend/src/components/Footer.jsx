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
