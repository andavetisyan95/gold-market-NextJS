import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <Box sx={{ background: "red", px: 10 }}>
      <Typography>Footer</Typography>
    </Box>
  );
}
