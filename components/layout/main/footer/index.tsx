import React from "react";
import { Grid } from "@mui/material";
import LogoPart from "./logo-part";
import ContactsPart from "./contacts-part";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        background: "black",
        position: "relative",
        px: { xs: 3, lg: 6, xl: 12 },
        py: 10,
        rowGap: 10,
        alignItems: "center",
        justifyContent: "center",
        columnGap: { sm: 10, md: 28, lg: 60, xl: 96 },
      }}
    >
      <Grid item>
        <LogoPart />
      </Grid>
      <Grid item>
        <ContactsPart />
      </Grid>
    </Grid>
  );
}
