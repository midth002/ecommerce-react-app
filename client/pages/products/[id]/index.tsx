import React from 'react'
import { getProduct } from '../../../src/lib/utils/product';
import { getProducts } from '../../../src/lib/utils/products';
import { getPrice } from '../../../src/lib/utils/price';



const product = ({ product }: any) => {

  return (
    <div>product id: {product?.id}</div>
  )
}

export default product;

export const getStaticProps = async ({ params }: any ) => {
  const product = await getProduct(params.id); 
  // const price = product ? await getPrice(product?.default_price) : '';
  return { props: { product } };
}



export const getStaticPaths = async () => {
  const products = await getProducts();
  return {
    paths: products.data.map((_product: any) => {
      return {
        params: { id: _product.id },
      };
    }),
    fallback: true,
  };
};