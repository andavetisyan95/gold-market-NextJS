import React from "react";
import { Stack, Typography, Grid, Box } from "@mui/material";
import { soacialIcons } from "source/social-icons";
import Link from "next/link";

export default function LogoPart() {
  return (
    <Stack
      spacing={5}
      className="center"
      width={{ sm: "240px", md: "300px", lg: "220px" }}
    >
      <Link href="/">
        <Box
          sx={{
            width: "160px",
            background: "#c2a502",
            p: 3,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            The Carats
          </Typography>
        </Box>
      </Link>
      <Typography className="mouse" sx={{ textAlign: "center" }}>
        We always create new and unique collections
      </Typography>
      <Grid
        container
        sx={{
          gap: 2,
        }}
        className="center"
      >
        {soacialIcons.map(({ id, path, Component }) => (
          <Link href={path} key={id}>
            <Grid
              item
              sx={{
                borderRadius: "50%",
                color: "#fff",
                border: "1px solid #c2a502",
                p: "5px",
              }}
            >
              <Component />
            </Grid>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
}
