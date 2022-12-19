import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { ProductProps } from "types/home-page-common";

export default function ProductCard({
  title,
  subtitle,
  image,
  price,
  id,
  category,
}: ProductProps) {
  return (
    <Card
      sx={{
        background: "rgb(18, 29, 35)",
        boxShadow: 0,
      }}
    >
      <CardActionArea disableRipple href={`/category/${category}/${id}`}>
        <CardMedia
          sx={{
            width: "100%",
            height: { xs: "250px", md: "300px" },
            objectFit: "cover",
          }}
          component="img"
          image={image}
          title={title}
        ></CardMedia>
        <CardContent>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 16, md: 18 },
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </CardContent>

        <Stack className="center" spacing={1}>
          <Typography sx={{ fontSize: { xs: 14, sm: 12, md: 14 } }}>
            {subtitle}
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: { sm: 14, md: 16 } }}>
            ${price}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
