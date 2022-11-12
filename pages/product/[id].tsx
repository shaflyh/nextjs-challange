import { useRouter } from 'next/router';
import { getProductsId, getProducts } from '../../services/productServices';

export default function ProductDetail(props: any) {
  const router = useRouter();
  const id = router.query.id;
  const { product } = props;

  return (
    <>
      {!product ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Product id: {id}</h1>
          <h1>Product name: {product.title}</h1>
        </div>
      )}
    </>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const productId = params.id;
  const products = await getProductsId(productId);

  if (!products) {
    return { notFound: true };
  }

  return {
    props: {
      product: products
    }
  };
}

export async function getStaticPaths() {
  const data = await getProducts();
  if (!data) {
    return { notFound: true };
  }
  const ids = data
    .slice(0, 5)
    .map((product) => ({ params: { id: `${product.id}` } }));

  return {
    paths: ids,
    fallback: true
  };
}
