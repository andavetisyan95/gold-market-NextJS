import React from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function NavMenu({}: Props) {
  return (
    <Box sx={{ px: 10, py: 5 }}>
      <Grid
        container
        spacing={5}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={90}
            height={60}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container sx={{ gap: 5 }}>
            <Link href={"/"}>Home</Link>
            <Link href={"/categories/"}>Category</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/contacts"}>Contacts</Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
