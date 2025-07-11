'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([100, 3000]);

  const categories = [
    { id: 'living-room', label: 'Living Room', count: 45 },
    { id: 'bedroom', label: 'Bedroom', count: 38 },
    { id: 'dining-room', label: 'Dining Room', count: 28 },
    { id: 'office', label: 'Office', count: 32 },
    { id: 'outdoor', label: 'Outdoor', count: 24 },
    { id: 'storage', label: 'Storage', count: 19 }
  ];

  const materials = [
    { id: 'wood', label: 'Wood', count: 87 },
    { id: 'metal', label: 'Metal', count: 54 },
    { id: 'leather', label: 'Leather', count: 43 },
    { id: 'fabric', label: 'Fabric', count: 76 },
    { id: 'glass', label: 'Glass', count: 32 }
  ];

  const colors = [
    { id: 'brown', label: 'Brown', color: '#8B4513' },
    { id: 'black', label: 'Black', color: '#000000' },
    { id: 'white', label: 'White', color: '#FFFFFF' },
    { id: 'gray', label: 'Gray', color: '#808080' },
    { id: 'blue', label: 'Blue', color: '#0066CC' },
    { id: 'green', label: 'Green', color: '#008000' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <label
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
              >
                {category.label}
              </label>
              <span className="text-xs text-gray-500">({category.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={5000}
            min={50}
            step={50}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {materials.map((material) => (
            <div key={material.id} className="flex items-center space-x-2">
              <Checkbox id={material.id} />
              <label
                htmlFor={material.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
              >
                {material.label}
              </label>
              <span className="text-xs text-gray-500">({material.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <div
                key={color.id}
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 cursor-pointer"
              >
                <div
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color.color }}
                />
                <span className="text-sm">{color.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button className="w-full">Apply Filters</Button>
      <Button variant="outline" className="w-full">Clear All</Button>
    </div>
  );
}