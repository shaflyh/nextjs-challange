import { useRouter } from 'next/router';
import { getProductsId } from '../../services/productServices';

export default function ProductDetail(props: any) {
  const router = useRouter();
  const id = router.query.id;
  const { product } = props;
  console.log(product);
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
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } }
    ],
    fallback: true
  };
}
