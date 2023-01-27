import React from 'react'
import { useCartStore } from '../../../lib/store';
import { CartItem } from '../../item';
import { Box, Typography, Button } from '@mui/material';

const CartPage = () => {

    const { cart, updateCartItem, removeFromCart } = useCartStore();

    console.log(cart);

  return (
    <Box sx={{boxShadow: 3, 
      m: 5,
      width: '75%'
    }}>
      <Typography variant='h2'>Your Cart</Typography>
      
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