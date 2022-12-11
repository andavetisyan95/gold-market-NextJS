import React from "react";
import { Stack, Box } from "@mui/material";
import AboutMain from "components/common/pages-layouts/about/main";
import WithBackground from "components/common/layout-with-background";
import History from "components/common/pages-layouts/about/company-history";
import OurServices from "components/common/pages-layouts/home/our-mission/our-services";

export default function AboutUs() {
  return (
    <>
      <WithBackground coverImg="/images/backgrounds/about/aboutmain.jpg" />
      <Stack sx={{ position: "relative" }}>
        <AboutMain />
        <Box sx={{ pt: 10, px: { xs: 3, sm: 4, md: 6, lg: 9, xl: 12 } }}>
          <History />
          <Box pt={14}>
            <OurServices />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
