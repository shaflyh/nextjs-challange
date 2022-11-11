import Link from 'next/link';
import { getProducts } from '../../services/productServices';

export default function Products(props: any) {
  const { data } = props;
  // console.log(data);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product: any, i: string) => (
          <li key={i}>
            <Link href={`/product/${product.id}`}>
              {product.id} - {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  console.log('Regenerating...');
  const products = await getProducts();
  // const products = [];
  console.log(products.length);

  if (products.length === 0 || !products) {
    return { notFound: true };
  }

  return {
    props: {
      data: products
    },
    revalidate: 20
  };
}

// export async function getStaticPaths() {}
