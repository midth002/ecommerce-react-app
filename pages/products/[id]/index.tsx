import React from 'react'
import { getProduct } from '../../../lib/utils/product';
import { getProducts } from '../../../lib/utils/products';
import { getPrice } from '../../../lib/utils/price';
import { Box, CircularProgress } from '@mui/material';
import ProductPage from '../../../components/products/ProductPage';


export const getStaticProps = async ({ params }: any ) => {
  const product = await getProduct(params.id); 
  const price = product ? await getPrice(product.default_price) : '';
  return { props: { product, price }};
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

const product = ({ product, price }) => {

  return (
    <>
    {product && price ? (
      <>
        <ProductPage product={product} price={price} />
      </>
    ) : (
      <Box>
      <CircularProgress color="secondary" />
      </Box>
    )


    }
   
    </>
  )
}

export default product;

