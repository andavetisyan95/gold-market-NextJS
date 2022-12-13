import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function LeftSide() {
  return (
    <Stack spacing={5}>
      <Stack spacing={3}>
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
            letterSpacing: "2px",
            fontWeight: 700,
          }}
          className="mouse"
        >
          What we do
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 22, sm: 28, md: 42, lg: 50, xl: 65 } }}
          className="mouse"
        >
          We Create Custom Jewels
        </Typography>
      </Stack>
      <Box
        sx={{
          alignSelf: "flex-end",
          position: "relative",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: { xs: "100%", sm: "auto" },
          height: { xs: "100%", sm: "auto" },
        }}
      >
        <img
          src={"/images/backgrounds/home/aboutRight.jpg"}
          alt="leftbackground"
          width="100%"
          height="520px"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </Box>
    </Stack>
  );
}
