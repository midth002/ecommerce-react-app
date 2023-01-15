import React from 'react'
import { Grid } from '@mui/material';
import ProductCard from '../productCard/ProductCard';

const Store = ({ products }: any) => {
  return (
    <Grid container spacing={2}>
    {products?.data.map((product: any) => {
      return (
        <Grid item key={product.id}>
            <ProductCard title={product.name} photo={product.images[0]} />
        </Grid>
       
      )
    })}
    </Grid>
  )
}

export default Store