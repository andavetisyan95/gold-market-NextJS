import React from "react";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";

type Props = {
  page: string;
};

export default function PageNavigation({ page }: Props) {
  return (
    <Stack flexDirection="row" sx={{ gap: 1.5, zIndex: 1 }}>
      <Link href={"/"}>
        <Typography
          sx={{ fontSize: { xs: 14, sm: 16 } }}
          className="drawer_text_hover"
        >
          Home
        </Typography>
      </Link>
      <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}> {">"} </Typography>
      <Typography sx={{ ml: 1, fontWeight: 700, fontSize: { xs: 14, sm: 16 } }}>
        {page}
      </Typography>
    </Stack>
  );
}
