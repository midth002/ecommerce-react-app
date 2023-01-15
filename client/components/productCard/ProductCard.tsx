import React from 'react'
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import Image from 'next/Image';

interface cardProps {
    title: string, 
    photo: any,
    price: any
}

const ProductCard = ({title, photo, price}: cardProps) => {

  return (
        
      
            <Card sx={{ maxWidth: 345}}>
        <CardMedia 
         sx={{ height: 300 }}
        title={title}
        >
      <Image 
         src={photo}
         alt={title}
         width={345}
         height={300}
        /> </CardMedia>
        <CardContent>{title} {price}</CardContent>
      <CardActions>
        <Button size="small">Preview</Button>
        <Button size="small">Shop More</Button>
      </CardActions>
    </Card>
        
  )
}

export default ProductCard