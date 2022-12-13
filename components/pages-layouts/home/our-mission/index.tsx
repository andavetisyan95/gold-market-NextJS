import React from "react";
import { Stack } from "@mui/material";
import OurServices from "./our-services";
import AboutUsPreview from "./about-us";

https: type Props = {};

export default function OurMission({}: Props) {
  return (
    <Stack
      sx={{
        pt: { xs: 10, sm: 8 },
        px: { xs: 5, sm: 10, md: 8, xl: 10 },
      }}
      spacing={15}
    >
      <OurServices />
      <AboutUsPreview />
    </Stack>
  );
}
