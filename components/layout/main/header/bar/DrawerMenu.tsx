import React, { memo } from "react";
import Link from "next/link";
import { Box, Drawer, Typography, Stack } from "@mui/material";

import MenuTypography from "components/common/menuTitles";
import { useRouter } from "next/router";
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
        },
      }}
    >
      <Stack spacing={5} px={{ xs: 2.5 }}>
        <Box sx={{ borderBottom: "2px solid #DADADA", pb: 2 }}>
          <Typography
            sx={{
              color: "primary.main",
              textAlign: "center",
              fontSize: { xs: 24 },
              fontWeight: 600,
            }}
          >
            Menu
          </Typography>
        </Box>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
          spacing={5}
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
