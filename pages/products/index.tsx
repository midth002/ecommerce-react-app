import { useState, useCallback, useEffect } from 'react';
import { getProducts } from '../../lib/utils/products';
import { getPrices } from '../../lib/utils/prices';
import { Store } from '../../components/store';
import { Box, CircularProgress } from '@mui/material';

export default function Shop() {

   const [products, setProducts] = useState();
   const [prices, setPrices] = useState();

  const productsHandler = (data: any) => {
    setProducts(data);
  } 

  const pricesHandler = (data: any) => {
    setPrices(data);
  } 

  const loadData = useCallback(async () => {
    const products = await getProducts();
    productsHandler(products);
    const prices = await getPrices();
    pricesHandler(prices);
  }, []);

  useEffect(() =>{
    loadData();
  }, [loadData]);


  return (
    <>
    
    {products && prices ? (
      <Store products={products} prices={prices}/>
    ) : (
      <Box>
      <CircularProgress color="secondary" />
      </Box>
    )

    }
      
    </>
  );
}






