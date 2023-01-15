import React from 'react'
import { Grid, Box } from '@mui/material';
import ProductCard from '../../productCard';


const templateCards = [
    {
        title: 'Business Templates',
        img: '/images/category-thumb-business-large.jpg'
    }, 
    {
        title: 'Ecommerce Store Templates', 
        img: '/images/category-thumb-store-large.jpg'
    },
    {
        title: 'Services Templates', 
        img: '/images/category-thumb-service-large.jpg'
    }

]

const Pricing = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: 'center', my: 10, pt: 5, px: 10}}>
        <Grid container spacing={2}>
            {templateCards.map((card, i) => {
               return ( 
               <Grid item xs={4} key={i}>
                    {/* <ProductCard title={card.title} photo={card.img} /> */}
                </Grid>
               )
            })}
           
        </Grid>
    </Box>
  )
}

export default Pricing
