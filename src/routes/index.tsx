import { Home } from '@/pages/Home';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const productsListSchema = z.object({
  page: z.number().default(1),
});

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: productsListSchema,
});
