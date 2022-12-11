import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import HistoryTypography from "./history-typography";

export default function History() {
  return (
    <Box sx={{ pt: 43, pb: 5 }}>
      <Grid container spacing={{ xs: 3, md: 7, lg: 7 }}>
        <Grid
          item
          xs={12}
          lg={5}
          md={5.5}
          sx={{
            order: { xs: 1, md: 0 },
          }}
        >
          <img
            src="/images/backgrounds/about/company.jpg"
            alt="jewelry"
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          md={6.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Stack spacing={1.5} sx={{ py: { md: 5 } }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: { xs: 10, sm: 12, md: 10, lg: 12 },
                color: "primary.main",
              }}
              className="mouse"
            >
              Company History
            </Typography>
            <Stack
              spacing={2.5}
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 26, md: 30, lg: 36 },
                  fontWeight: 700,
                }}
                className="mouse"
              >
                About The Carats
              </Typography>
              <Stack spacing={2}>
                <HistoryTypography
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  nobis tenetur quibusdam quas. Assumenda quisquam odit atque
                  dicta laudantium. Maxime cupiditate."
                />
                <HistoryTypography
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  nobis tenetur quibusdam quas. Assumenda quisquam odit atque
                  dicta laudantium. Maxime cupiditate.Assumenda quisquam odit
                  atque dicta laudantium. Maxime cupiditate."
                />
              </Stack>
              <Link href="/contacts">
                <Button
                  sx={{
                    color: "#fff",
                    background: "black",
                    borderRadius: 0,
                    p: 1.5,
                    width: { xs: "150px", md: "130px" },
                    fontSize: 12,
                    height: "45px",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
