import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";

type Props = {};

export default function AboutMain({}: Props) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Stack spacing={3} className="center">
        <Typography
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: { xs: 36, sm: 48, md: 60, lg: 80 },
            fontWeight: "bold",
          }}
          variant="h2"
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
