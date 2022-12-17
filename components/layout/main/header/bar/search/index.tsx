import React, { useState, memo } from "react";
import { useRouter } from "next/router";
import { Box, InputBase, Typography, Stack, Grow } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

function Search({}: Props) {
  const router = useRouter();

  const [title, setTitle] = useState("");

  const handleSearchResult = () => {
    if (title !== "") {
      router.push(`/search_result/${title}`);
      setTitle("");
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && title !== "") {
      router.push(`/search_result/${title}`);
      setTitle("");
    }
  };
  return (
    <Box sx={{ position: "relative" }}>
      <InputBase
        autoComplete="false"
        placeholder="Search"
        onChange={e => setTitle(e.target.value)}
        onKeyPress={handleSearch}
        value={title}
        sx={{
          width: "220px",
          height: { xs: 35, sm: 40 },
          border: "2px solid #baab36",
          borderBottom: title ? "none" : "2px solid #baab36",
          padding: "10px",
          borderRadius: title ? "10px 10px 0 0" : "10px",
          bgcolor: title.length >= 1 ? "rgba(18, 29, 35,0.7)" : "transparent",
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
      <Grow
        style={{
          width: "100%",
          position: "absolute",
          border: "2px  solid #baab36",
          borderTop: "unset",
          borderRadius: "0 0 10px 10px",
          maxHeight: "200px",
          wordBreak: "break-all",

          overflow: "auto",
          backgroundColor: "rgba(18, 29, 35,0.7)",
        }}
        in={Boolean(title)}
        timeout={350}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}
        >
          No result found
        </Box>
      </Grow>
    </Box>
  );
}

export default memo(Search);
