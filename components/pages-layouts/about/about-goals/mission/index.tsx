import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import HistoryTypography from "../../company-history/history-typography";

export default function AboutMission() {
  return (
    <Stack spacing={3}>
      <Box sx={{ height: "auto" }}>
        <img
          width="100%"
          height="220px"
          src="/images/backgrounds/about/goal2.jpg"
          alt="mission_image"
        />
      </Box>
      <Typography
        sx={{
          color: "primary.main",
          alignSelf: "flex-start",
          fontSize: { xs: 18 },
        }}
      >
        Our Mission
      </Typography>
      <Stack spacing={2}>
        <HistoryTypography
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          veritatis, error cupiditate quam facere laboriosam, veniam mollitia a."
        />
        <HistoryTypography text="Lorem ipsum dolor sit amet consectetur adipisicing elit impedit dfadr." />
      </Stack>
    </Stack>
  );
}
