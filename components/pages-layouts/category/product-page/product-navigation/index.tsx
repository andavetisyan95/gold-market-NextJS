import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  category: string;
  title: string;
};

export default function ProductNavigation({ category, title }: Props) {
  return (
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
        <Link href={`/category/${category}`}>
          <Typography sx={{ textTransform: "capitalize" }}>
            {category}
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Typography>/</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: "primary.main" }}>{title}</Typography>
      </Grid>
    </Grid>
  );
}
