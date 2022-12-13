import React from "react";
import { Stack } from "@mui/material";

import HomeMain from "components/pages-layouts/home/main";
import WithBackground from "components/common/layout-with-background";
import CategoriesGrid from "components/pages-layouts/home/categories";
import OurMission from "components/pages-layouts/home/our-mission";
import OurProducts from "components/pages-layouts/home/our-products";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <WithBackground coverImg="/images/backgrounds/home/mainPage.jpg" />
      <Stack sx={{ pt: 12, pb: 5, position: "relative" }}>
        <HomeMain />
        <CategoriesGrid />
        <OurMission />
        <OurProducts />
      </Stack>
    </>
  );
}
