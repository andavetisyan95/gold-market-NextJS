import React, { useCallback, useEffect, useState, memo } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ProductProps } from "types/home-page-common";

function ProductPage() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const router = useRouter();
  const id = router.query.id ? +router.query.id : undefined;

  const getProduct = useCallback(async () => {
    await axios
      .get("http://localhost:8000/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const individualProduct = products.find(product => product.id === id);
  if (!individualProduct) {
    return <div>Product not found</div>;
  }

  return (
    <Stack
      sx={{
        px: { xs: 3, md: 5, lg: 8, xl: 12 },
        py: { xs: 7, lg: 10 },
      }}
      spacing={{ xs: 10 }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <Link href="/category">
            <Typography>Back to products</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography>/</Typography>
        </Grid>
        <Grid item>
          <Link href={`/category/${individualProduct.category}`}>
            <Typography sx={{ textTransform: "capitalize" }}>
              {individualProduct.category}
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography>/</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "primary.main" }}>
            {individualProduct.title}
          </Typography>
        </Grid>
      </Grid>
      <Stack className="center">
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item xs={12} sm={6} md={5}>
            <Image
              src={
                individualProduct.image || "/images/fallback/placeholder.jpg"
              }
              alt={individualProduct.title}
              width={500}
              height={500}
              layout="responsive"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={4} className="center">
              <Stack spacing={2}>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: { xs: 18, lg: 20 },
                    textAlign: "center",
                    letterSpacing: 2,
                  }}
                >
                  {individualProduct.category}
                </Typography>
                <Box
                  sx={{
                    borderBottom: "1px solid #c2a502",
                    width: "150px",
                  }}
                ></Box>
              </Stack>
              <Stack spacing={3}>
                <Typography>{individualProduct.title}</Typography>
                <Grid container gap={1}>
                  <Grid item>
                    <Typography sx={{ color: "primary.dark" }}>$</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{individualProduct.price}</Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    borderTop: "1px solid #c2a502",
                    borderBottom: "1px solid #c2a502",
                    p: 1.5,
                  }}
                >
                  <Typography
                    sx={{ lineHeight: "26px", fontSize: { xs: 14, lg: 16 } }}
                  >
                    {individualProduct.description}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

// export async function getStaticProps() {
//   const products: ProductProps[] = await (
//     await axios.get("http://localhost:8000/products")
//   ).data;

//   return {
//     props: { products },
//   };
// }

// export async function getStaticPaths() {
//   const products: ProductProps[] = (
//     await axios.get("http://localhost:8000/products")
//   ).data;
//   // const response = await fetch("http://localhost:8000/products");
//   // const products: ProductProps[] = await response.json();

//   const paths = products.map(product => {
//     return {
//       params: {
//         id: `${product.id}`,
//         sub: `${product.category}`,
//       },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

export default memo(ProductPage);
