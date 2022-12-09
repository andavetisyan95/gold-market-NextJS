import React from "react";
import { Stack, Grid, Box, Typography } from "@mui/material";

type Props = {};

export default function OurProducts({}: Props) {
  return (
    <Stack
      className="center"
      sx={{
        pt: { xs: 10, md: 12 },
        px: { xs: 5, sm: 10, md: 8, xl: 10 },
      }}
      spacing={5}
    >
      <Box>
        <Typography sx={{ fontSize: { xs: 22, sm: 24, md: 28, lg: 42 } }}>
          Our Jewelry Selection
        </Typography>
      </Box>
      <Box>
        <Grid container></Grid>
      </Box>
    </Stack>
  );
}
