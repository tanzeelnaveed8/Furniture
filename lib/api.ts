const API_BASE_URL = 'https://fakestoreapi.com';

export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  image: string;
  rating: number;
  featured: boolean;
  inStock: boolean;
  colors?: string[];
  materials?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}

// Furniture-specific images from Pexels
const furnitureImages = [
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1571441/pexels-photo-1571441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
];

const furnitureCategories = [
  'Living Room',
  'Bedroom', 
  'Dining Room',
  'Office',
  'Storage',
  'Outdoor'
];

const materials = ['Wood', 'Metal', 'Fabric', 'Leather', 'Glass', 'Rattan'];
const colors = ['Brown', 'Black', 'White', 'Gray', 'Blue', 'Green', 'Beige', 'Navy'];

function transformApiProduct(apiProduct: ApiProduct, index: number): Product {
  const furnitureCategory = furnitureCategories[index % furnitureCategories.length];
  const furnitureImage = furnitureImages[index % furnitureImages.length];
  
  // Add some randomness for pricing and discounts
  const hasDiscount = Math.random() > 0.6;
  const discountPercent = hasDiscount ? Math.floor(Math.random() * 30) + 10 : 0;
  const originalPrice = hasDiscount ? Math.floor(apiProduct.price * (1 + discountPercent / 100)) : undefined;
  
  return {
    id: apiProduct.id,
    name: apiProduct.title,
    description: apiProduct.description,
    price: Math.floor(apiProduct.price * 50), // Scale up prices for furniture
    originalPrice: originalPrice ? Math.floor(originalPrice * 50) : undefined,
    discount: discountPercent || undefined,
    category: furnitureCategory,
    image: furnitureImage,
    rating: Math.round(apiProduct.rating.rate * 10) / 10,
    featured: index < 6, // First 6 products are featured
    inStock: true,
    colors: [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]],
    materials: [materials[Math.floor(Math.random() * materials.length)], materials[Math.floor(Math.random() * materials.length)]],
    dimensions: {
      width: Math.floor(Math.random() * 200) + 50,
      height: Math.floor(Math.random() * 150) + 30,
      depth: Math.floor(Math.random() * 100) + 30
    }
  };
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const apiProducts: ApiProduct[] = await response.json();
    return apiProducts.map(transformApiProduct);
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array or fallback data
    return [];
  }
}

export async function fetchProduct(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const apiProduct: ApiProduct = await response.json();
    return transformApiProduct(apiProduct, id - 1);
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const categories: string[] = await response.json();
    return furnitureCategories; // Return our furniture categories instead
  } catch (error) {
    console.error('Error fetching categories:', error);
    return furnitureCategories;
  }
}