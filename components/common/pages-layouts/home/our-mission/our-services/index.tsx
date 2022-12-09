import React from "react";
import { Stack, Grid } from "@mui/material";
import { ourServices } from "source/our-services";
import ServicesCard from "./services-card";

export default function OurServices() {
  return (
    <Stack
      sx={{
        px: { lg: 5 },
      }}
      className="center"
    >
      <Grid container spacing={{ xs: 8, lg: 15 }}>
        {ourServices.map(({ id, title, description, imgName }) => (
          <Grid item key={id} xs={12} md={4}>
            <ServicesCard
              title={title}
              description={description}
              imgName={imgName}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
