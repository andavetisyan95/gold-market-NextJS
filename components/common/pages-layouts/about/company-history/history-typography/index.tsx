import { Typography } from "@mui/material";
import React from "react";

type Props = {
  text: string;
};

export default function HistoryTypography({ text }: Props) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 12, sm: 13, md: 12, lg: 14 },
        lineHeight: "24px",
      }}
      className="mouse"
    >
      {text}
    </Typography>
  );
}
