import React from "react";

import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function MenuTypography({ title }: Props) {
  return (
    <Box
      sx={{
        borderBottom: "2px solid #DADADA",
        pb: 1,
      }}
    >
      <Typography
        className="drawer_text_hover"
        sx={{
          color: "black",
          fontSize: { xs: 20, sm: 18 },
          fontFamily: "Comfortaa",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
