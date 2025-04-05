import { useQuery } from '@tanstack/react-query';

import { api } from '@/api/index';

import { productKeys } from '@/api/queryKeys';
import { LIMIT } from '@/lib/constants';
import { type ProductsList, ProductsListSchema } from '@/schemas/product';

const getProductsList = async (page: number) => {
  const offset = (page - 1) * LIMIT;
  const response = await api.get(`products?skip=${offset}&limit=${LIMIT}`);

  const data = await response.json();

  return ProductsListSchema.parse(data);
};

export const useProducts = (page: number) => {
  return useQuery<ProductsList>({
    queryKey: [productKeys.productsList, page],
    queryFn: () => getProductsList(page),
  });
};
