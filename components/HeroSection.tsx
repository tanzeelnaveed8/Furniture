'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Modern Living Redefined",
      subtitle: "Discover Premium Furniture",
      description: "Transform your space with our curated collection of designer furniture pieces that blend style, comfort, and functionality.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cta: "Shop Collection"
    },
    {
      title: "Luxury Meets Comfort",
      subtitle: "Handcrafted Excellence",
      description: "Experience the perfect fusion of traditional craftsmanship and contemporary design in every piece.",
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cta: "Explore Now"
    },
    {
      title: "Create Your Dream Space",
      subtitle: "Interior Design Solutions",
      description: "From concept to completion, we help you create spaces that reflect your unique style and personality.",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cta: "Get Started"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <p className="text-lg md:text-xl mb-4 text-primary font-medium slide-in-left">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 fade-in-up animation-delay-200">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up animation-delay-400">
                  <Link href="/products">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}