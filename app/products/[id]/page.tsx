import { ProductDetail } from '@/components/ProductDetail';
import { fetchProduct, fetchProducts } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(parseInt(params.id));
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetail product={product} />
    </div>
  );
}

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.slice(0, 20).map((product) => ({
    id: product.id.toString(),
  }));
}