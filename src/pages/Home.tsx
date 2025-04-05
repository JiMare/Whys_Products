import { Layout } from '@/components/Layout';
import { ProductsList } from '@/modules/ProductsList';

export const Home = () => {
  return (
    <Layout>
      <ProductsList />
    </Layout>
  );
};
