import React from "react";
import { Grid } from "@mui/material";

type Props = {};

export default function DiamondDecor({}: Props) {
  return (
    <Grid container className="center" gap={1}>
      <Grid item sx={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
        ----------------
      </Grid>
      <Grid item>
        <img
          width="35px"
          height="35px"
          src="/images/icons/diamond.png"
          alt="diamond"
        />
      </Grid>
      <Grid item sx={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
        ----------------
      </Grid>
    </Grid>
  );
}
