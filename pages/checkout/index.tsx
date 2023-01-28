import { Box, Typography } from "@mui/material";
import { useCartStore } from "../../lib/store";
import { useEffect, useState } from 'react';
import { CartPage } from "../../components/cart";
import { CheckoutForm } from "../../components/checkoutForm";
import Head from "next/head";
import { Diversity1, Diversity1Outlined } from "@mui/icons-material";

const checkout = () => {

  return (
    <div>
        <Head>
        <title>Star Themes - Checkout</title>
        <meta
          id="meta-description"
          name="description"
          content="Here is your checkout screen."
        />
      </Head>
     <CartPage />
      
    </div>
    
  )
};

export default checkout;
