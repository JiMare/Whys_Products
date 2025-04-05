export const productKeys = {
  productsList: ['products'] as const,
  productDetail: (id: number) => ['product', id] as const,
} as const;
