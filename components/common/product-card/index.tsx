import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { ProductProps } from "types/home-page-common";

export default function ProductCard({
  title,
  subtitle,
  image,
  price,
  id,
}: ProductProps) {
  return (
    <Stack spacing={2} className="center">
      <Box
        sx={{
          position: "relative",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <img
          src={image || "/images/fallback/placeholder.jpg"}
          alt={title}
          width="100%"
          height="349px"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </Box>
      <Stack className="center" spacing={1}>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 16, md: 18 },
            color: "primary.main",
            fontWeight: "bold",
          }}
          className="mouse"
        >
          {title}
        </Typography>
        <Typography
          className="mouse"
          sx={{ fontSize: { xs: 14, sm: 12, md: 14 } }}
        >
          {subtitle}
        </Typography>
        <Typography
          className="mouse"
          sx={{ fontWeight: "bold", fontSize: { sm: 14, md: 16 } }}
        >
          ${price}
        </Typography>
      </Stack>
    </Stack>
  );
}

// you have to go to the square and before you reach it you will see a street going down on your left
