import { useState, useCallback, useEffect } from 'react';
import { getProducts } from '../../src/lib/utils/products';
import { Store } from '../../components/store';

const Shop = () => {

  const [products, setProducts] = useState();

  const productsHandler = (data: any) => {
    setProducts(data);
  } 

  const loadData = useCallback(async () => {
    const products = await getProducts();
    productsHandler(products);
    console.log(products);
  }, []);


  useEffect(() =>{
    loadData();
  }, [loadData]);


 



  return (
    <>
      <Store products={products} />
    </>
  )
}

export default Shop