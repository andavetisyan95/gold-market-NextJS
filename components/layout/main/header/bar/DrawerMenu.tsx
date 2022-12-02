import React, { useState } from "react";
import Link from "next/link";
import { Box, Drawer, Grid, Typography, Stack } from "@mui/material";

import MenuTypography from "components/common/MenuTypography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  openDrawer: boolean;
  closeDrawer: () => void;
};

export default function DrawerMenu({ openDrawer, closeDrawer }: Props) {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={closeDrawer}
      PaperProps={{
        sx: {
          width: { xs: "100vw", sm: "380px" },
          pt: 4
        }
      }}
    >
      <Stack spacing={5} px={{ xs: 2.5 }}>
        <Box sx={{ borderBottom: "2px solid #DADADA", pb: 2 }}>
          <Typography
            sx={{
              color: "primary.main",
              textAlign: "center",
              fontSize: { xs: 24 },
              fontFamily: "Comfortaa",
              fontWeight: 600
            }}
          >
            Menu
          </Typography>
        </Box>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-start"
          }}
          spacing={5}
        >
          <Link href={"/"} onClick={closeDrawer}>
            <MenuTypography title="Home" />
          </Link>
          <Grid
            container
            sx={{
              borderBottom: "2px solid #DADADA",
              pb: 2,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Grid item>
              <Link href={"/categories/"} onClick={closeDrawer}>
                <Typography
                  className="drawer_text_hover"
                  sx={{
                    color: "black",
                    fontSize: { xs: 20, sm: 18 },
                    fontFamily: "Comfortaa"
                  }}
                >
                  Category
                </Typography>
              </Link>
            </Grid>
            <Grid item onClick={() => setShowCategories(prev => !prev)}>
              {showCategories ? (
                <ExpandMoreIcon className="clickable drawer_text_hover" />
              ) : (
                <ArrowForwardIosIcon
                  sx={{ fontSize: "medium" }}
                  className="clickable drawer_text_hover"
                />
              )}
            </Grid>
          </Grid>
          <Link href={"/about"} onClick={closeDrawer}>
            <MenuTypography title="About Us" />
          </Link>
          <Link href={"/contacts"} onClick={closeDrawer}>
            <MenuTypography title="Contacts" />
          </Link>
        </Stack>
      </Stack>
    </Drawer>
  );
}
