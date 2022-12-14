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
  );
}
