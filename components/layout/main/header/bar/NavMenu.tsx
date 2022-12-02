import React, { useState } from "react";
import Link from "next/link";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from ".";

export default function NavMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ top: 0, zIndex: 1 }}>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: 10,
          py: 3
        }}
      >
        <Grid item className="clickable" onClick={() => setOpenDrawer(true)}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item>
              <MenuIcon sx={{ color: "primary.light", fontSize: "2rem" }} />
            </Grid>
            <Hidden lgDown>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "primary.main",
                    letterSpacing: 2
                  }}
                >
                  MENU
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item>
          <Link href={"/"}>
            <Typography
              sx={{ fontFamily: "Caveat", fontWeight: "700", fontSize: 40 }}
              color="primary.main"
            >
              The Carats
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Drawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(prev => !prev)}
      />
    </Box>
  );
}
