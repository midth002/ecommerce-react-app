import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import { usePriceFormatter } from "../../src/lib/hooks/usePriceFormatter";
import { getPrices } from "../../src/lib/utils/prices";

interface cardProps {
  products: any;
  prices: any;
}

const ProductCard = ({ products, prices }: cardProps) => {
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
        />{" "}
      </CardMedia>
      <CardContent>
        {usePriceFormatter.format(myPrice.unit_amount / 100)}
      </CardContent>
      <CardActions>
        <Button size="small">Preview</Button>
        <Button size="small">Shop More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

//
