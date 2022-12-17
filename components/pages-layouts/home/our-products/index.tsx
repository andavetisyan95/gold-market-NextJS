import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Stack, Grid, Box, Typography } from "@mui/material";
import { ProductProps } from "types/home-page-common";
import ProductCard from "components/common/product-card";

export default function OurProducts() {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const getAllProducts = useCallback(async () => {
    await axios
      .get("http://localhost:8000/products?_limit=4")
      .then(response => setAllProducts(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Stack
      className="center"
      sx={{
        pt: { xs: 10, md: 12 },
        px: { xs: 5, sm: 10, md: 8, xl: 10 },
      }}
      spacing={5}
    >
      <Box>
        <Typography sx={{ fontSize: { xs: 22, sm: 24, md: 28, lg: 42 } }}>
          Our Jewelry Selection
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={5}>
          {allProducts.map(({ id, title, subtitle, image, price }) => (
            <Grid item xs={12} sm={6} md={3} key={`${title}_{id}`}>
              <ProductCard
                title={title}
                subtitle={subtitle}
                image={image}
                price={price}
                id={id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
