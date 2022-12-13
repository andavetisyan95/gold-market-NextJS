import React from "react";
import { Stack, Box } from "@mui/material";
import AboutMain from "components/pages-layouts/about/main";
import WithBackground from "components/common/layout-with-background";
import History from "components/pages-layouts/about/company-history";
import OurServices from "components/pages-layouts/home/our-mission/our-services";
import OurGoals from "components/pages-layouts/about/about-goals";

export default function AboutUs() {
  return (
    <>
      <WithBackground coverImg="/images/backgrounds/about/aboutmain.jpg" />
      <Stack sx={{ position: "relative" }}>
        <AboutMain />
        <Stack
          sx={{ pt: 10, px: { xs: 3, sm: 4, md: 6, lg: 9, xl: 12 } }}
          spacing={{ xs: 10, sm: 15 }}
        >
          <History />
          <OurServices />
        </Stack>
        <OurGoals />
      </Stack>
    </>
  );
}
