import React from "react";
import { Grid, Hidden, Stack, Typography } from "@mui/material";
import ProductCard from "components/common/product-card";
import { ProductProps } from "types/home-page-common";

type Props = {
  products: ProductProps[];
};

export default function AllProducts({ products }: Props) {
  return (
    <Grid container columnSpacing={2}>
      <Hidden mdDown>
        <Grid item md={3} sx={{ background: "red" }}>
          Filter
        </Grid>
      </Hidden>
      <Grid item md={9}>
        <Stack rowGap={4}>
          <Grid container>
            <Hidden mdUp>
              <Grid item xs={6} sx={{ background: "red" }}>
                Filter
              </Grid>
            </Hidden>
            <Grid item xs={6} md={12} sx={{ background: "green" }}>
              <Typography>Sort</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            {products.map(
              ({
                id,
                title,
                subtitle,
                image,
                price,
                category,
                description,
              }) => (
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
        </Stack>
      </Grid>
    </Grid>
  );
}
