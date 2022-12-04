import React from "react";
import { Box } from "@mui/material";

type Props = {
  coverImg: string;
};

export default function WithBackground({ coverImg }: Props) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={coverImg}
        alt={coverImg}
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
