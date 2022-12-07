import React, { useState } from "react";
import { Stack, Grid, Typography } from "@mui/material";
import { categoryCardInfo } from "source/categoryCardInfo";
import CategoryCard from "./category-card";

export default function CategoriesGrid() {
  return (
    <Stack
      sx={{
        mt: { xs: 20, md: 15, lg: 10 },
        px: { xs: 3, md: 6, xl: 10 },
        py: { xs: 8, lg: 4 },
        gap: { xs: 5, sm: 8, md: 6 },
      }}
      className="center"
    >
      <Typography sx={{ color: "silver", fontSize: { xs: 24, sm: 30 } }}>
        Jewelry by Categories
      </Typography>
      <Grid container xs={12} spacing={5} justifyContent="center">
        {categoryCardInfo.map(({ id, title, description, imgName }) => (
          <Grid item key={id} xs={12} sm={10} md={6}>
            <CategoryCard
              title={title}
              description={description}
              imgName={imgName}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
