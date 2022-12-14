import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";
import PageNavigation from "components/common/page-navigation";

export default function AboutMain() {
  return (
    <Box sx={{ mt: { xs: "30vh", lg: "25vh" } }}>
      <Stack spacing={3} className="center">
        <Typography
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: { xs: 40, sm: 52, md: 60, lg: 80 },
            fontWeight: "bold",
          }}
          variant="h2"
          className="mouse"
        >
          Tell your story
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            textAlign: "center",
            fontSize: { xs: 16, md: 18 },
          }}
          variant="h6"
          className="mouse"
        >
          Our story is all about your style.
        </Typography>
        <PageNavigation page="About" />
      </Stack>
    </Box>
  );
}
