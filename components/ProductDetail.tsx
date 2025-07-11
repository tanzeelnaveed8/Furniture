'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Heart, Share2, Star, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/api';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const images = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.rating}) • 128 reviews</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {product.originalPrice && (
              <span className="text-2xl text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-primary">${product.price}</span>
            {product.discount && (
              <Badge className="bg-red-500 text-white">
                Save {product.discount}%
              </Badge>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Material:</span>
                  <span className="ml-2 text-gray-600">Premium Wood</span>
                </div>
                <div>
                  <span className="font-medium">Dimensions:</span>
                  <span className="ml-2 text-gray-600">120 x 60 x 75 cm</span>
                </div>
                <div>
                  <span className="font-medium">Weight:</span>
                  <span className="ml-2 text-gray-600">25 kg</span>
                </div>
                <div>
                  <span className="font-medium">Warranty:</span>
                  <span className="ml-2 text-gray-600">2 years</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description} This premium piece combines modern design with exceptional functionality. 
                  Crafted from high-quality materials, it features a durable construction that will last for years to come. 
                  The sleek finish and thoughtful details make it a perfect addition to any contemporary home.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="specifications" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Dimensions</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>Width: 120 cm</li>
                      <li>Height: 75 cm</li>
                      <li>Depth: 60 cm</li>
                      <li>Weight: 25 kg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Materials</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>Primary: Premium hardwood</li>
                      <li>Finish: Water-resistant coating</li>
                      <li>Hardware: Stainless steel</li>
                      <li>Certification: FSC certified</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium">Sarah M.</span>
                      <span className="text-sm text-gray-500">Verified Purchase</span>
                    </div>
                    <p className="text-gray-700">
                      Absolutely love this piece! The quality is outstanding and it fits perfectly in my living room. 
                      Highly recommend to anyone looking for premium furniture.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="font-medium">Mike R.</span>
                      <span className="text-sm text-gray-500">Verified Purchase</span>
                    </div>
                    <p className="text-gray-700">
                      Great furniture, solid construction. Delivery was prompt and the packaging was excellent. 
                      Would definitely order from LuxeFurn again.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}