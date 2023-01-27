import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePriceFormatter } from "../../../lib/hooks/usePriceFormatter";
import { useCartStore } from "../../../lib/store";

interface cardProps {
  products: any;
  prices: any;
}

const ProductCard = ({ products, prices }: cardProps) => {

  const { addToCart } = useCartStore();

  function myCart(myProduct: any) {
    addToCart(myProduct);
    console.log(myProduct);
  }

  const myPrice = prices?.data
    ? prices.data.find((p: any) => p.id === products.default_price)
    : { unit_amount: 0 };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} title="Title">
        <Image
          src={products.images[0]}
          alt={products.name}
          width={345}
          height={300}
        />
      </CardMedia>
      <CardContent>
        {usePriceFormatter.format(myPrice.unit_amount / 100)}
      </CardContent>
      <CardActions>
        <Link href={`/products/${products.id}`}>Preview</Link>
        <Button size="small" onClick={() => myCart({
          id: products.id,
          image: products.images[0], 
          name: products.name
        })}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

//
