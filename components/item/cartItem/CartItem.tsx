import React from 'react'
import { useCartStore } from '../../../lib/store';
import { usePriceFormatter } from '../../../lib/hooks/usePriceFormatter';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

const CartItem = ({ item, itemIndex }: any) => {
  const { cart, updateCartItem, removeFromCart } = useCartStore();

  const formattedUnitPrice = usePriceFormatter.format(item.price / 100);

  return (
   <Box key={item.id} sx={{
    m: 5,
    display: 'flex',
    justifyContent: 'space-between',
    width: '75%'
   }}>

{item.images && 
      <Image width={150} height={100} src={item.images[0]} alt={item.name} />}

      <Box>
      <Typography variant="h5">{item.name}</Typography>
      <Typography>{item.id}</Typography>
      </Box>
     
      
      <Typography>{formattedUnitPrice}</Typography>
      <Button variant="contained" sx={{height: 50}}>Remove Item</Button>
   </Box>
  )
}

export default CartItem