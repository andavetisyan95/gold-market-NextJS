import React from "react";
import { Stack, Grid, Typography, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FooterTypography from "./footer-typography";

import {
  COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL,
  COMPANY_LOCATION,
} from "constants/contacts";

type Props = {};

export default function ContactsPart({}: Props) {
  return (
    <Stack spacing={5}>
      <Box>
        <Grid container spacing={3}>
          <Grid item>
            <PhoneIcon
              sx={{
                color: "primary.dark",
                fontSize: { xs: "1.5rem", sm: "2rem", lg: "2rem" },
              }}
            />
          </Grid>
          <Grid item>
            <FooterTypography title={COMPANY_PHONE_NUMBER} />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item>
            <MailIcon
              sx={{
                color: "primary.dark",
                fontSize: { xs: "1.5rem", sm: "2rem", lg: "2rem" },
              }}
            />
          </Grid>
          <Grid item>
            <FooterTypography title={COMPANY_EMAIL} />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item>
            <LocationOnIcon
              sx={{
                color: "primary.dark",
                fontSize: { xs: "1.5rem", sm: "2rem", lg: "2rem" },
              }}
            />
          </Grid>
          <Grid item>
            <FooterTypography title={COMPANY_LOCATION} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
