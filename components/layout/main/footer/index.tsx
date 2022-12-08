import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <Box
      sx={{ background: "black", px: { xs: 3, md: 5, lg: 8, xl: 12 }, py: 5 }}
    >
      <Typography>Footer</Typography>
    </Box>
  );
}
