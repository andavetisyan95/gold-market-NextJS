import React, { memo } from "react";
import Link from "next/link";
import { Box, Drawer, Typography, Stack } from "@mui/material";

import MenuTypography from "components/common/menu-titles";

import Category from "./category";

type Props = {
  openDrawer: boolean;
  closeDrawer: () => void;
};

function DrawerMenu({ openDrawer, closeDrawer }: Props) {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={closeDrawer}
      PaperProps={{
        sx: {
          width: { xs: "100vw", sm: "380px" },
          pt: 4,
          position: "relative",
        },
      }}
    >
      <Typography
        sx={{
          color: "primary.light",
          fontWeight: "bold",
          position: "absolute",
          right: 10,
          top: 10,
        }}
        onClick={closeDrawer}
        className="clickable"
      >
        X
      </Typography>
      <Stack spacing={{ xs: 7, sm: 5 }} px={{ xs: 2.5 }}>
        <Box sx={{ borderBottom: "2px solid #DADADA", pb: 2 }}>
          <Typography
            sx={{
              color: "primary.main",
              textAlign: "center",
              fontSize: { xs: 24 },
              fontWeight: 600,
            }}
            className="clickable"
          >
            Menu
          </Typography>
        </Box>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
          spacing={7}
        >
          <Link href={"/"} onClick={closeDrawer}>
            <MenuTypography title="Home" />
          </Link>
          <Category close={closeDrawer} />
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

export default memo(DrawerMenu);
