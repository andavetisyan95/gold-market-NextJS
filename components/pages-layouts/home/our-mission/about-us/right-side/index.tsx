import React from "react";
import Link from "next/link";
import { Stack, Box, Typography, Button } from "@mui/material";

export default function RightSide() {
  return (
    <Stack spacing={{ xs: 7 }}>
      <Box
        sx={{
          position: "relative",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: { xs: "100%", sm: "auto", lg: "65%" },
          height: { xs: "100%", sm: "auto" },
          alignSelf: "flex-start",
        }}
      >
        <img
          width="100%"
          height="430px"
          src="/images/backgrounds/home/aboutLeft.jpg"
          alt="aboutRight"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </Box>
      <Stack spacing={5} className="center">
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 12, md: 16 },
            textAlign: { xs: "center", md: "left" },
          }}
          className="mouse"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          nostrum! Nemo nisi commodi illum eligendi cupiditate similique esse
          expedita!
        </Typography>
        <Link href="/about">
          <Button
            sx={{
              letterSpacing: "2px",
              width: { xs: "150px", sm: "130px", md: "180px", lg: "200px" },
              height: { xs: "45px", lg: "50px" },
              border: "1px solid #fff",
              fontSize: { sm: 11, md: 14 },
            }}
          >
            Learn More
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
