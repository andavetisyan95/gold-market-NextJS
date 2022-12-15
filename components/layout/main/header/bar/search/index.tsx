import React, { useState, memo } from "react";
import { useRouter } from "next/router";
import { Box, Collapse, InputBase, Typography, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

function Search({}: Props) {
  const router = useRouter();

  const [title, setTitle] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setTitle(e.target.value);
      router.query.result = title;
    }
  };
  const handleSearchResult = () => {
    if (title !== "") {
      router.push(`/search_result/${title}`);
      setTitle("");
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search_result/${title}`);
      setTitle("");
    }
  };
  return (
    <Box>
      <InputBase
        autoComplete="false"
        placeholder="Search"
        onChange={handleChangeInput}
        onKeyPress={handleSearch}
        value={title}
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
            onClick={handleSearchResult}
          />
        }
      />
    </Box>
  );
}

export default memo(Search);
