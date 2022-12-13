import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";

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
        <Stack flexDirection="row" sx={{ gap: 1.5 }}>
          <Link href={"/"}>
            <Typography
              sx={{ fontSize: { xs: 14, sm: 16 } }}
              className="drawer_text_hover"
            >
              Home{" "}
            </Typography>
          </Link>
          <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}> {">"} </Typography>
          <Typography
            sx={{ ml: 1, fontWeight: 700, fontSize: { xs: 14, sm: 16 } }}
          >
            About
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
