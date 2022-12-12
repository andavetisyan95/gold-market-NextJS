import React from "react";
import { Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function FooterTypography({ title }: Props) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 18, sm: 18, lg: 20 },
        fontWeight: 500,
        lineHeight: { lg: "25px", xs: "20px" },
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
}
