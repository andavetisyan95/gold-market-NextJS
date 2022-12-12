import React from "react";
import { Grid, Hidden, Stack } from "@mui/material";
import AboutMission from "./mission";
import OurDoings from "./our-doings";

export default function OurGoals() {
  return (
    <Grid
      container
      sx={{
        pt: { xs: 15, xl: 20 },
        pb: { xs: 15, xl: 15 },
        px: { xs: 4, md: 6, lg: 8, xl: 12 },
        rowGap: 6,
        columnGap: { sm: 5.5, md: 7, lg: 7.5, xl: 6 },
      }}
    >
      <Grid item xs={12} sm={5.5} md={5.5} xl={4}>
        <AboutMission />
      </Grid>
      <Hidden xlDown>
        <Grid item xl={3}>
          <Stack className="center">
            <img
              src="/images/backgrounds/about/goal3.jpg"
              alt="goals"
              height="450px"
              width="350px"
              style={{
                objectFit: "cover",
                paddingRight: "20px",
                paddingLeft: "20px",
                borderRight: "2px solid #fff",
                borderLeft: "2px solid #fff",
              }}
            />
          </Stack>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={5.5} md={5.5} xl={4}>
        <OurDoings />
      </Grid>
    </Grid>
  );
}
