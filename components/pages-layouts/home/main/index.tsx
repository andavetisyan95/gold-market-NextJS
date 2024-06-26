import React from "react";
import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function HomeMain() {
  return (
    <Box sx={{ px: { xs: 3, md: 6, lg: 8, xl: 20 }, pb: 5 }}>
      <Stack
        spacing={8}
        sx={{
          background: "rgba(0,0,0,0.7)",
          px: { xs: 3, md: 4 },
          py: { xs: 5, lg: 7 },
        }}
        className="center"
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: { xs: 24, sm: 28, md: 36, lg: 45 },
            textAlign: "center",
            color: "#fcaf14",
          }}
          className="mouse"
        >
          Elegant and modern jewelry for your every occasion
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 20, md: 24 },
            textAlign: "center",
            fontFamily: "Caveat",
            fontWeight: 400,
            fontStyle: "normal",
            color: "primary.light",
            letterSpacing: "2px",
          }}
          className="mouse"
        >
          We always create new and unique collections
        </Typography>
        <Link href="/category">
          <Button
            sx={{
              border: "1px solid #fcaf14",
              borderRadius: 0,
              padding: { xs: "15px", sm: "10px", md: "8px" },
              width: { sm: 150, md: 180 },
              height: { xs: "40px", sm: 50, md: 55 },
              fontSize: { xs: 10, sm: 14, md: 16 },
              color: "#baab36",
              letterSpacing: { xs: "1px", md: "2px" },
              "&:hover": {
                border: "3px solid #fcaf14",
                color: "primary.light",
                background: "black",
                fontWeight: "bold",
              },
            }}
          >
            Discover Now
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
