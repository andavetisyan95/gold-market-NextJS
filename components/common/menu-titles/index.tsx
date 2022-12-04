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
          fontSize: { xs: 18, sm: 20 },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
