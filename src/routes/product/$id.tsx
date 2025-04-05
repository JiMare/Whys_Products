import { ProductDetail } from '@/pages/ProductDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/$id')({
  component: ProductDetail,
})
