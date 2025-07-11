'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            PreYours
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}