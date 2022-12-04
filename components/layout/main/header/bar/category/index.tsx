import React, { useState } from "react";
import Link from "next/link";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryMenu from "./CategoryMenu";

type Props = {
  close: () => void;
};

export default function Category({ close }: Props) {
  const [showCategories, setShowCategories] = useState(false);
  return (
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
        <Grid item onClick={close}>
          <Link href={"/category/"}>
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
        <Grid item>
          <IconButton
            disableRipple={true}
            onClick={() => setShowCategories(prev => !prev)}
          >
            {showCategories ? (
              <ExpandMoreIcon className="clickable drawer_text_hover" />
            ) : (
              <ArrowForwardIosIcon
                sx={{ fontSize: "medium" }}
                className="clickable drawer_text_hover"
              />
            )}
          </IconButton>
        </Grid>
      </Grid>
      <Grid item>
        <CategoryMenu openCategories={showCategories} close={close} />
      </Grid>
    </Stack>
  );
}
