import { Box, Typography } from "@mui/material";
import { useCartStore } from "../../lib/store";
import { useEffect, useState } from 'react';


const checkout = () => {
  const [ checkout, setCheckout ] = useState({

  });
  const myStore = useCartStore((store) => store.cart.items);


  useEffect(() => {
   setCheckout(myStore[0]);
  }, [checkout]);

  console.log(checkout)

  return (
    <>
      {myStore[0] && (
        <Box>
          {/* <Typography>{checkout.name}</Typography> */}
        </Box>
      ) }
    </>
    
  )
};

export default checkout;
