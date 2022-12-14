import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Link from "next/link";
import SocialIcons from "components/common/social-icons";

export default function LogoPart() {
  return (
    <Stack
      spacing={5}
      className="center"
      width={{ sm: "240px", md: "300px", lg: "220px" }}
    >
      <Link href="/">
        <Box
          sx={{
            width: "160px",
            background: "#c2a502",
            p: 3,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            The Carats
          </Typography>
        </Box>
      </Link>
      <Typography className="mouse" sx={{ textAlign: "center" }}>
        We always create new and unique collections
      </Typography>
      <SocialIcons />
    </Stack>
  );
}
