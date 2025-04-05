import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/schemas/product';
import { Star } from 'lucide-react';

type Props = {
  product: Product;
};

export const ProductDetailCard = ({ product }: Props) => {
  return (
    <Card className="flex flex-col md:flex-row items-start gap-6 p-4 shadow-lg">
      <div className="flex flex-col gap-4 items-center self-center md:self-start w-full md:w-auto">
        <img src={product.thumbnail} alt={product.title} className="w-32 h-32 object-cover rounded-md" />

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>{product.rating}</span>
          </div>
          <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">In stock: {product.stock}</span>
        </div>
      </div>
      <CardContent className="flex flex-col gap-4 w-full p-0 md:p-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold">{product.title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-green-600">{product.price}$</span>
          {product.discountPercentage && (
            <span className="text-sm font-medium text-red-500 bg-red-100 px-2 py-1 rounded">{product.discountPercentage}% Off</span>
          )}
        </div>

        <div className="italic text-gray-600">
          {product.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        <p className="text-gray-700">{product.description}</p>

        <div className="w-full mt-4">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <ul className="space-y-4 mt-2">
            {product.reviews.map((review, index) => (
              <li key={index} className="border-b pb-2">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-800">{review.comment}</p>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} className="text-yellow-500 w-4 h-4" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500">- {review.reviewerName}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 mt-4">
          <img src={product.meta.qrCode} alt="QR Code" className="w-32 h-32 object-cover rounded-md" />
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">{product.warrantyInformation}</span>
            <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">{product.shippingInformation}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
