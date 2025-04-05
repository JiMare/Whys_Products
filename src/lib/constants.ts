export const LIMIT = 20;

export const ROUTES = {
  HOME: '/',
  PRODUCT: '/product',
  PRODUCT_DETAIL: (id: number) => `${ROUTES.PRODUCT}/${id}`,
} as const;
