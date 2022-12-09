import React from "react";
import { Stack, Grid, Box, Typography } from "@mui/material";

type Props = {};

export default function OurProducts({}: Props) {
  return (
    <Stack sx={{ pt: 15 }}>
      <Box>
        <Typography>Our Jewelry Selection</Typography>
      </Box>
      <Box>
        <Grid container></Grid>
      </Box>
    </Stack>
  );
}
