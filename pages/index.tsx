import React from "react";
import { Stack } from "@mui/material";

import HomeMain from "components/common/pages-layouts/home/main";
import WithBackground from "components/common/layout-with-background";
import CategoriesGrid from "components/common/pages-layouts/home/categories";
import OurMission from "components/common/pages-layouts/home/our-mission";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <WithBackground coverImg="/images/backgrounds/home/back.jpg" />
      <Stack sx={{ mt: 12, mb: 1, position: "relative" }}>
        <HomeMain />
        <OurMission />
        <CategoriesGrid />
      </Stack>
    </>
  );
}
