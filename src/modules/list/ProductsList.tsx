import { useNavigate, useSearch } from '@tanstack/react-router';
import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { Pagination } from './Pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductCard } from './ProductCard';
import { LIMIT, ROUTES } from '@/lib/constants';

export const ProductsList = () => {
  const navigate = useNavigate();
  const params = useSearch({ from: ROUTES.HOME });

  const [page, setPage] = useState(Number(params.page ?? 1));

  const { data, error, isError, isPending } = useProducts(page);

  console.log(data);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
    navigate({
      to: '/',
      search: { page: newPage },
    });
  };

  if (isError) {
    throw error;
  }

  const renderContent = () => {
    if (isPending) {
      return <Skeleton className="h-96" />;
    }

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products && data.products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        {data.products && <Pagination page={page} setPage={onPageChange} totalPages={Math.ceil(data.total / LIMIT)} />}
      </>
    );
  };

  return (
    <div className="w-full mx-auto px-4 py-8 min-h-screen">
      <header className="mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8">List of Products</h1>
      </header>
      {renderContent()}
    </div>
  );
};
