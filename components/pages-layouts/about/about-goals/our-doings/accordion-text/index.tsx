import React from "react";
import { Typography } from "@mui/material";

type Props = {
  text: string;
};

export default function AccordionText({ text }: Props) {
  return (
    <Typography sx={{ fontSize: { xs: 11, xl: 13 }, lineHeight: "20px" }}>
      {text}
    </Typography>
  );
}
