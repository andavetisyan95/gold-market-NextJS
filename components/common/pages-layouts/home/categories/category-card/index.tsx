import React, { useState } from "react";
import { Box, Typography, Stack, Collapse } from "@mui/material";
import Link from "next/link";
import { CommonProps } from "types/home-page-common";

export default function CategoryCard({
  imgName,
  title,
  description,
}: CommonProps) {
  const [showLink, setShowLink] = useState(false);

  return (
    <Stack
      sx={{
        position: "relative",
        backgroundSize: "contain",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
      className="center cat_borders"
      onMouseEnter={() => setShowLink(prev => !prev)}
      onMouseLeave={() => setShowLink(prev => !prev)}
    >
      <img
        src={imgName}
        alt={imgName}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        loading="lazy"
      />

      <Stack
        sx={{
          px: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          zIndex: 1,
        }}
        className="center"
        spacing={{ xs: 3, md: 4, lg: 6 }}
      >
        <Stack spacing={1} className="center">
          <Typography
            sx={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: { sm: 24, md: 20, lg: 32 },
            }}
            className="cat_typography mouse"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontStyle: "oblique",
            }}
            className="cat_typography mouse"
          >
            {description}
          </Typography>
        </Stack>
        <Box>
          <Collapse in={showLink} timeout={600}>
            <Link href={`/category/${title}`} className="explore">
              <Typography
                className="cat_typography typography_hover"
                sx={{ fontSize: { lg: 24 }, letterSpacing: "1px" }}
              >
                Explore All
              </Typography>
            </Link>
          </Collapse>
        </Box>
      </Stack>
    </Stack>
  );
}
