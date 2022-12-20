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
import Link from "next/link";

export default function ProductCard({
  title,
  subtitle,
  image,
  price,
  id,
  category,
  description,
}: ProductProps) {
  return (
    <Link href={`/category/${category}/${id}`}>
      <Card
        sx={{
          background: "rgb(18, 29, 35)",
          boxShadow: 0,
        }}
      >
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
      </Card>
    </Link>
  );
}
