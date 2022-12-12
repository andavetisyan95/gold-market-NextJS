import React from "react";
import { Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function AccordionTitle({ title }: Props) {
  return <Typography sx={{ fontSize: { xs: 14, xl: 14 } }}>{title}</Typography>;
}
