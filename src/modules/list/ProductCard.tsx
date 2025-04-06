import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants';
import { Product } from '@/schemas/product';
import { useNavigate } from '@tanstack/react-router';
import { Star } from 'lucide-react';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  const goToProductDetail = () =>
    navigate({
      to: ROUTES.PRODUCT_DETAIL(product.id),
    });
  return (
    <Card className="overflow-hidden flex flex-col h-full pt-0 cursor-pointer" onClick={goToProductDetail}>
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{product.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500" />
          <span>{product.rating}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-lg text-black font-semibold flex items-center gap-1">{product.price}$</p>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-red-500 font-bold bg-red-100 px-2 py-1 rounded">{product.discountPercentage}% OFF</span>
          )}
        </div>

        <p className="text-sm line-clamp-3">{product.description}</p>
      </CardContent>
    </Card>
  );
};
