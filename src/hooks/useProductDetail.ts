import { useQuery } from '@tanstack/react-query';

import { api } from '@/api/index';
import { productKeys } from '@/api/queryKeys';
import { Product, ProductSchema } from '@/schemas/product';

const getProductDetail = async (id: string) => {
  const response = await api.get(`product/${id}`);
  const data = await response.json();

  return ProductSchema.parse(data);
};

export const useProductDetail = (id: string) => {
  return useQuery<Product>({
    queryKey: [productKeys.productDetail, id],
    queryFn: () => getProductDetail(id),
    enabled: !!id,
  });
};
