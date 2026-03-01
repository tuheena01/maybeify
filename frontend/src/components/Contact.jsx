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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xeelwrve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    toast.error("Error sending message.");
  }
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
                placeholder="+91 7809293989"
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
                    Bhubaneswar, Odisha<br />
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
                <span className="font-semibold">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">12:00 PM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">12:00 PM - 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
