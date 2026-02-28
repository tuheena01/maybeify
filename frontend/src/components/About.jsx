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
