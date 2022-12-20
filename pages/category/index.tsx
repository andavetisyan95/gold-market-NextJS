import React, { memo } from "react";
import { Stack, Grid, Box } from "@mui/material";

import { ProductProps } from "types/home-page-common";
import ProductCard from "components/common/product-card";
import PageNavigation from "components/common/page-navigation";
import AllProducts from "components/pages-layouts/category/all-products";

function AllCategories({ products }: { products: ProductProps[] }) {
  return (
    <Box>
      <Stack
        className="center"
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          padding: "30px",
          height: { xs: "35vh", xl: "40vh" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: "url(/images/backgrounds/category/category.jpg)",
        }}
      >
        <PageNavigation page="All Products" />
      </Stack>
      <Stack
        sx={{
          px: { xs: 3, md: 5, lg: 8, xl: 12 },
          pt: { xs: "50vh" },
          pb: { xs: 5, md: 10 },
        }}
      >
        <AllProducts products={products} />
      </Stack>
    </Box>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/products");
  const products: ProductProps[] = await res.json();

  return { props: { products } };
}

export default memo(AllCategories);
