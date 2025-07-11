'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      content: 'PreYours has transformed my client projects. The quality and design of their furniture pieces are exceptional. Every piece tells a story of craftsmanship.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      content: 'I completely renovated my living room with PreYours pieces. The attention to detail and customer service exceeded my expectations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Architect',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      content: 'As an architect, I appreciate furniture that combines form and function. PreYours delivers on both fronts with their innovative designs and premium materials.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}