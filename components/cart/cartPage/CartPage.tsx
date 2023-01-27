import React from 'react'
import { useCartStore } from '../../../lib/store';
import { usePriceFormatter } from '../../../lib/hooks/usePriceFormatter';
import { CartItem } from '../../item';
import { Box, Typography, Button } from '@mui/material';

const CartPage = () => {

    const { cart, updateCartItem, removeFromCart } = useCartStore();

    
    const calcTotalPrice = (items: any) => {
      const totalPrice =  items.reduce((total: any, item: any)=> total + item.price,0)
      const formattedUnitPrice = usePriceFormatter.format(totalPrice / 100);
     return formattedUnitPrice;
    }
    
    console.log(cart);

  return (
    <Box sx={{ 
      m: 5,
      width: '75%'
    }}>
      <Typography variant='h2'>Your Cart</Typography>

      <Typography>Total: {calcTotalPrice(cart.items)}</Typography>
      {cart.items.length >= 1 &&
        cart.items.map((cart: any, index: number) => (
          <Box key={cart.id}>
            <CartItem item={cart} itemIndex={index} />
          </Box>
        ))
      }
      
    </Box>
  )
}

export default CartPage