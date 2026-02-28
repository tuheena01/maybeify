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
