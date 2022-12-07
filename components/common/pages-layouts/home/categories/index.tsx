import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { categoryCardInfo } from "source/categoryCardInfo";
import CategoryCard from "./category-card";

export default function CategoriesGrid() {
  const [showMore, setShowMore] = useState(false);

  const handleShow = (i: number) => {
    categoryCardInfo.filter(el => {
      if (el.id === i) {
        return setShowMore(true);
      }
    });
  };
  return (
    <Box
      sx={{
        mt: { xs: 20, md: 15, lg: 10 },
        px: { xs: 3, md: 6, xl: 10 },
        py: { xs: 10, lg: 5 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container xs={12} spacing={5} justifyContent="center">
        {categoryCardInfo.map(({ id, title, description, imgName }, i) => (
          <Grid
            item
            key={id}
            xs={12}
            sm={10}
            md={6}
            onMouseEnter={() => handleShow(i)}
            onMouseLeave={() => setShowMore(false)}
          >
            <CategoryCard
              title={title}
              description={description}
              imgName={imgName}
              showMore={showMore}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
