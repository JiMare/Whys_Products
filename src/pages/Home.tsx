import { Layout } from '@/components/Layout';
import { ProductsList } from '@/modules/list/ProductsList';

export const Home = () => {
  return (
    <Layout>
      <ProductsList />
    </Layout>
  );
};
