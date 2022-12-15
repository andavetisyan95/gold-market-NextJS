import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import WithBackground from "components/common/layout-with-background";
import PageNavigation from "components/common/page-navigation";
import ContactsInfo from "./contact-info";
import OurLocation from "./map";

type Props = {};

export default function ContactsPage({}: Props) {
  return (
    <>
      <Stack
        className="center"
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: { xs: "35vh", xl: "50vh" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: "url(/images/backgrounds/contacts/st.jpg)",
        }}
      >
        <PageNavigation page="Contact Us" />
      </Stack>
      <Stack
        sx={{
          position: "relative",
          pt: { xs: "32vh", xl: "50vh" },
          px: { xs: 3, sm: 4, lg: 8, xl: 12 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <ContactsInfo />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <OurLocation />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
