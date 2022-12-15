import React from "react";
import Link from "next/link";
import { Stack, Typography, Box, Grid } from "@mui/material";
import { soacialIcons } from "source/social-icons";
import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_PHONE_NUMBER,
} from "constants/contacts";

export default function ContactsInfo() {
  return (
    <Box sx={{ background: "#F7F7F7" }}>
      <Stack spacing={6} sx={{ px: { xs: 3, md: 5 }, py: { xs: 5, md: 10 } }}>
        <Stack spacing={8}>
          <Stack spacing={4}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: { xl: 14 },
                  textTransform: "uppercase",
                  letterSpacing: "4.8px",
                  fontWeight: 700,
                }}
                className="mouse"
              >
                Contact Information
              </Typography>
              <Box
                sx={{ borderBottom: "1px solid #baab36", width: "100px" }}
              ></Box>
            </Stack>
            <Stack spacing={3}>
              <Typography sx={{ color: "#939599" }} className="mouse">
                We do not sell product from our corporate headquarters in New
                York City. If you want to visit, please reach out to our
                customer service team first.
              </Typography>
              <Typography sx={{ color: "#939599" }} className="mouse">
                {COMPANY_LOCATION}
              </Typography>
              <Link href={`tel:${COMPANY_PHONE_NUMBER}`}>
                <Typography sx={{ color: "#939599" }}>
                  {COMPANY_PHONE_NUMBER}
                </Typography>
              </Link>
            </Stack>
          </Stack>
          <Box>
            <Link href={`mailto:${COMPANY_EMAIL}`}>
              <Typography
                sx={{
                  color: "black",
                  borderBottom: "2px solid black",
                  fontWeight: "bold",
                  fontSize: { xs: 18, sm: 20, md: 24 },
                  display: "inline-block",
                }}
              >
                {COMPANY_EMAIL}
              </Typography>
            </Link>
          </Box>
        </Stack>
        <Stack spacing={4}>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "black",
              letterSpacing: "2px",
              fontWeight: 700,
            }}
            className="mouse"
          >
            Follow Us
          </Typography>

          <Box sx={{ borderBottom: "1px solid #baab36", width: "70px" }}></Box>
          <Grid
            container
            sx={{
              gap: 2,
            }}
          >
            {soacialIcons.map(({ id, path, Component }) => (
              <Link href={path} key={id}>
                <Grid
                  item
                  sx={{
                    borderRadius: "50%",
                    color: "black",
                    border: "1px solid black",
                    p: "7px",
                  }}
                >
                  <Component />
                </Grid>
              </Link>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
}
