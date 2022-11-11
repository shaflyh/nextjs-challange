import axios from 'axios';

type Product = {
  id: number;
  title: string;
  description: string;
};

type GetProductsResponse = {
  products: Product[];
};

async function getProducts() {
  try {
    const { data, status } = await axios.get<GetProductsResponse>(
      'https://dummyjson.com/products',
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );
    // console.log(JSON.stringify(data, null, 4));
    console.log('response status is: ', status);
    const products = data.products;

    return products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

async function getProductsId(id: any) {
  try {
    const { data, status } = await axios.get(
      `https://dummyjson.com/products/${id}`,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );
    // console.log(JSON.stringify(data, null, 4));
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export { getProducts, getProductsId };
