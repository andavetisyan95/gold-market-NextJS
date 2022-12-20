import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import ProductCard from "components/common/product-card";
import { ProductProps } from "types/home-page-common";

type Props = {
  category: string;
};

export default function SuggestProducts({ category }: Props) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const getProducts = useCallback(async () => {
    await axios
      .get(`http://localhost:8000/products?category=${category}`)
      .then(response => setProducts(response.data.slice(2, 6)))
      .catch(error => {
        console.log(error);
      });
  }, [category]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Box sx={{ px: { xs: 5, sm: 10, md: 8, xl: 10 } }}>
      <Grid container spacing={5}>
        {products.map(
          ({ id, title, subtitle, image, price, category, description }) => (
            <Grid item xs={12} sm={6} md={3} key={`${title}_{id}`}>
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
    </Box>
  );
}
