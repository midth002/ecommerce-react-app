import React from 'react'
import { Grid } from '@mui/material';
import ProductCard from '../productCard/ProductCard';

const Store = ({ products, prices}: any) => {

 
  return (
    <Grid container spacing={2}>
    {products?.data.map((p: any) => {
      return (
        <Grid item key={p.id}>
            <ProductCard products={p} prices={prices}  />
        </Grid>
       
      )
    })}
    </Grid>
  )
}

export default Store