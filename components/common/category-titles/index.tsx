import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function CategoryTitles({ title }: Props) {
  return (
    <Box sx={{ borderBottom: "2px solid #7f838a", pb: 1 }}>
      <Typography
        className="drawer_text_hover"
        sx={{ color: "black", fontSize: 14, fontWeight: "bold" }}
      >
        {title}
      </Typography>
    </Box>
  );
}
