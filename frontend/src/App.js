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

