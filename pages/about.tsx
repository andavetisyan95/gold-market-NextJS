import React from "react";
import { Stack } from "@mui/material";
import AboutMain from "components/common/pages-layouts/about/main";
import WithBackground from "components/common/layout-with-background";

export default function AboutUs() {
  return (
    <>
      <WithBackground coverImg="/images/backgrounds/about/aboutmain.jpg" />
      <Stack sx={{ pb: 5, position: "relative" }}>
        <AboutMain />
      </Stack>
    </>
  );
}
