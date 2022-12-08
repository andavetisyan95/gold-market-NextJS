import React from "react";
import { Stack, Typography } from "@mui/material";
import { CommonProps } from "types/home-page-common";

export default function ServicesCard({
  title,
  description,
  imgName,
}: CommonProps) {
  return (
    <Stack className="center" spacing={3}>
      <img src={imgName} alt={title} width={60} height={60} loading="lazy" />
      <Typography
        sx={{ fontSize: { xs: 18, sm: 20, md: 18, lg: 26 }, fontWeight: 700 }}
        className="mouse"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#999999",
          fontSize: { md: 14, lg: 16 },
        }}
        className="mouse"
      >
        {description}
      </Typography>
    </Stack>
  );
}
