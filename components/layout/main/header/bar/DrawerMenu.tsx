import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Drawer, Grid, Typography, Stack } from "@mui/material";

import MenuTypography from "components/common/MenuTitles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryMenu from "./CategoryMenu";
import { useRouter } from "next/router";

type Props = {
  openDrawer: boolean;
  closeDrawer: () => void;
};

export default function DrawerMenu({ openDrawer, closeDrawer }: Props) {
  const router = useRouter();
  const [showCategories, setShowCategories] = useState(false);

  const handleCloseCategories = () => setShowCategories(false);

  useEffect(() => {
    if (showCategories) handleCloseCategories();
  }, [router.asPath]);

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
          <Link href={"/"}>
            <MenuTypography title="Home" />
          </Link>
          <Stack>
            <Grid
              container
              sx={{
                borderBottom: "2px solid #DADADA",
                pb: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Link href={"/categories/"}>
                  <Typography
                    className="drawer_text_hover"
                    sx={{
                      color: "black",
                      fontSize: { xs: 20, sm: 18 },
                    }}
                  >
                    {showCategories ? "Categories" : "Category"}
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
            <Grid item>
              <CategoryMenu
                openCategories={showCategories}
                close={closeDrawer}
              />
            </Grid>
          </Stack>
          <Link href={"/about"}>
            <MenuTypography title="About Us" />
          </Link>
          <Link href={"/contacts"}>
            <MenuTypography title="Contacts" />
          </Link>
        </Stack>
      </Stack>
    </Drawer>
  );
}
