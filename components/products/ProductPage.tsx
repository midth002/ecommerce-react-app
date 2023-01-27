import { useState } from 'react';
import { Box,Typography, Button, Alert } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import Image from "next/image";

interface ProductPageProps {
  product: any, 
  price: any
}



const ProductPage = ({product, price}: ProductPageProps ) => {

    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const handleAddToCartClick = (e) => {
        e.preventDefault();
        setAlertOpen(true);
      }



  return (
    <Box sx={{
        display: 'flex'
    }}>
        <Box 
        sx={{
            m: 5
        }}>
            {product?.images && <Image src={product?.images[0]} alt={product?.name} width={533} height={400} />}
        </Box>
        <Box 
        sx={{
            m: 5
        }}
        > 
            <Typography>{product?.name}</Typography>
            <Typography>$ {price?.unit_amount}</Typography>
            <Typography>{product?.description}</Typography>
            <Button endIcon={<ShoppingBag />} onClick={handleAddToCartClick}>Add To Cart</Button>
        </Box>

        {alertOpen && 
        <Box>
            <Alert severity='success' onClose={() => {setAlertOpen(false)}}>Alert!</Alert>
        </Box>
        }

    </Box>
  )
}

export default ProductPage