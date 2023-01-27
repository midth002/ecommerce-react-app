import { useState } from 'react'
import { useCartStore } from '../../../lib/store';
import { usePriceFormatter } from '../../../lib/hooks/usePriceFormatter';
import { Box, Typography, Button, Alert } from '@mui/material';
import Image from 'next/image';

const CartItem = ({ item, itemIndex }: any) => {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const { cart, updateCartItem, removeFromCart } = useCartStore();

  const formattedUnitPrice = usePriceFormatter.format(item.price / 100);

  const removeItemFromCart = () => {
    removeFromCart(item);
    setAlertOpen(true);
  }

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
      <Button 
      variant="contained"
      onClick={() => removeItemFromCart()}
      sx={{height: 50}}>Remove Item</Button>

      {alertOpen &&
          <Alert severity='info' onClose={() => {setAlertOpen(false)}}>Item Removed from Cart</Alert>
      }
   </Box>
  )
}

export default CartItem