import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import { soacialIcons } from "source/social-icons";

export default function SocialIcons() {
  return (
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
              borderRadius: "100%",
              color: "#fff",
              border: "1px solid #c2a502",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
            }}
          >
            <Component />
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
