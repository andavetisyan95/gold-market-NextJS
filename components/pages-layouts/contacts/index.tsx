import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import WithBackground from "components/common/layout-with-background";
import PageNavigation from "components/common/page-navigation";
import ContactsInfo from "./contact-info";
import OurLocation from "./map";

type Props = {};

export default function ContactsPage({}: Props) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        height: "30vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src="/images/backgrounds/contacts/st.jpg"
        alt="store"
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
      />
      <Stack className="center">
        <PageNavigation page="Contact Us" />
        <Grid container sx={{ px: { xl: 12 } }}>
          <Grid item>
            <ContactsInfo />
          </Grid>
          <Grid item>
            <OurLocation />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
