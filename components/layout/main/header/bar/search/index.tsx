import React, { useState } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

export default function Search({}: Props) {
  return (
    <Box>
      <InputBase
        autoComplete="false"
        placeholder="Search"
        sx={{
          width: "220px",
          height: { xs: 35, sm: 40 },
          border: "2px solid #baab36",
          padding: "10px",
          borderRadius: "10px",
        }}
        inputProps={{
          sx: {
            color: "white",
            fontSize: { xs: 14 },
            ml: "5px",
          },
        }}
        autoFocus={false}
        startAdornment={
          <SearchIcon
            sx={{ color: "primary.main", fontSize: { xs: 20, sm: 24 } }}
            className="clickable"
          />
        }
      />
    </Box>
  );
}
