'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Heart } from 'lucide-react';
import Link from 'next/link';
import { fetchProducts, Product } from '@/lib/api';
import { useCart } from '@/contexts/CartContext';

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const featuredProducts = products.filter(product => product.featured).slice(0, 6);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Loading our premium furniture collection...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg animate-pulse">
                <div className="h-80 bg-gray-300 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that combine style, quality, and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover-lift bg-white overflow-hidden border-0 shadow-lg"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.discount && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    -{product.discount}%
                  </Badge>
                )}
                <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white hover:bg-gray-100 text-gray-900"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                    <Link href={`/products/${product.id}`}>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-white hover:bg-gray-100 text-gray-900"
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white hover:bg-gray-100 text-gray-900"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}