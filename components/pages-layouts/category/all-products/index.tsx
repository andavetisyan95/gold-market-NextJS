import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "components/common/product-card";
import { ProductProps } from "types/home-page-common";

type Props = {
  products: ProductProps[];
};

export default function AllProducts({ products }: Props) {
  return (
    <Grid container spacing={5}>
      {products.map(
        ({ id, title, subtitle, image, price, category, description }) => (
          <Grid item xs={12} sm={6} md={4} key={`${title}_{id}`}>
            <ProductCard
              title={title}
              subtitle={subtitle}
              image={image}
              price={price}
              id={id}
              category={category}
              description={description}
            />
          </Grid>
        )
      )}
    </Grid>
  );
}
