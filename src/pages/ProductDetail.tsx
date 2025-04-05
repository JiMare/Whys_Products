import { Layout } from '@/components/Layout';
import { Skeleton } from '@/components/ui/skeleton';
import { useProductDetail } from '@/hooks/useProductDetail';
import { raiseError } from '@/lib/utils';
import { ProductDetailCard } from '@/modules/detail/ProductDetailCard';
import { useParams } from '@tanstack/react-router';

export const ProductDetail = () => {
  const { id } = useParams({ from: '/product/$id' });

  const productId = id ? id : raiseError('Product ID is required');

  const { data: product, isPending, isError, error } = useProductDetail(productId);

  if (isError) throw error;

  return <Layout>{isPending ? <Skeleton className="h96" /> : <ProductDetailCard product={product} />}</Layout>;
};
