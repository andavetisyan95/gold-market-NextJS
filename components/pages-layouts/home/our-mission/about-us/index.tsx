import React from "react";
import { Grid } from "@mui/material";
import LeftSide from "./left-side";
import RightSide from "./right-side";

export default function AboutUsPreview() {
  return (
    <Grid container sx={{ px: { lg: 4 } }}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <LeftSide />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        pl={{ sm: 5, md: 10, lg: 15 }}
        pt={{ xs: 2 }}
      >
        <RightSide />
      </Grid>
    </Grid>
  );
}
