import React from "react";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <Stack
      sx={{ px: { xs: 3, md: 5, xl: 12 }, py: { xs: 5, sm: 10, lg: 15 } }}
      spacing={5}
    >
      <Typography sx={{ fontSize: { xs: 20, md: 24, lg: 28 } }}>
        Product not found
      </Typography>
      <Link href="/category">
        <Typography
          sx={{ color: "primary.dark", fontSize: { xs: 14, sm: 16, md: 18 } }}
        >
          Go back to all products
        </Typography>
      </Link>
    </Stack>
  );
}
