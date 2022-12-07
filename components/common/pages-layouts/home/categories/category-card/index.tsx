import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

type CardProps = {
  imgName: string;
  title: string;
  description: string;
  showMore: boolean;
};

export default function CategoryCard({
  imgName,
  title,
  description,
  showMore,
}: CardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundSize: "contain",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={imgName}
        alt={imgName}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
      />
    </Box>
  );
}
