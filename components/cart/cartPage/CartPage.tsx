import React from 'react'
import { useCartStore } from '../../../lib/store';
import { usePriceFormatter } from '../../../lib/hooks/usePriceFormatter';
import { CartItem } from '../../item';
import { Box, Typography, Button } from '@mui/material';
import { CheckoutForm } from '../../checkoutForm';

const CartPage = () => {

    const { cart, updateCartItem, removeFromCart } = useCartStore();

    const calcStripePrice = (items: any) => {
      return items.reduce((total: any, item: any)=> total + item.price,0)
    }
    
    
    const calcTotalPrice = (items: any) => {
      const totalPrice =  items.reduce((total: any, item: any)=> total + item.price,0)
      const formattedUnitPrice = usePriceFormatter.format(totalPrice / 100);
     return formattedUnitPrice;
    }
    
   

  return (
    <Box sx={{ 
      m: 5,
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      <Typography variant='h2' 
      sx={{
        width: '100%'
      }}>Your Cart</Typography>
      <Box className="products-pane" sx={{width: '75%'}}>
      
      {cart.items.length >= 1 &&
        cart.items.map((cart: any, index: number) => (
          <Box key={cart.id}>
            <CartItem item={cart} itemIndex={index} />
          </Box>
        ))
      }
      </Box>

       <Box sx={{ width: '25%' }}>
       <Typography sx={{my: 5}}>Total: {calcTotalPrice(cart.items)}</Typography>
      <CheckoutForm totalAmount={calcStripePrice(cart.items)}/>
      </Box> 

    </Box>
  )
}

export default CartPage