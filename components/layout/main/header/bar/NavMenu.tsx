import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import { Drawer } from ".";
import Search from "./search";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);

  const handleChangeBackground = () => {
    if (window.scrollY >= 1) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackground);
    return () => window.removeEventListener("scroll", handleChangeBackground);
  }, []);

  return (
    <Box
      sx={{
        top: 0,
        right: 0,
        zIndex: 1,
        background: changeBackground ? "rgba(18, 29, 35,0.7)" : "transparent",
        position: "sticky",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, md: 5, lg: 8, xl: 12 },
          py: 2,
        }}
      >
        <Grid item className="clickable" onClick={() => setOpenDrawer(true)}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item>
              <MenuIcon sx={{ color: "primary.main", fontSize: "2rem" }} />
            </Grid>
            <Hidden lgDown>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "primary.light",
                    letterSpacing: 2,
                  }}
                >
                  MENU
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Link href={"/"}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: 18, sm: 24, lg: 40 },
                  textAlign: "center",
                  letterSpacing: "2px",
                }}
                color="primary.main"
                // className="text_sparkle"
              >
                The Carats
              </Typography>
            </Link>
          </Grid>
        </Hidden>
        <Grid item>
          <Search />
        </Grid>
      </Grid>
      <Drawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(prev => !prev)}
      />
    </Box>
  );
}
