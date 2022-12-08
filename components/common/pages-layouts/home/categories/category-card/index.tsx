import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Link from "next/link";

type CardProps = {
  imgName: string;
  title: string;
  description: string;
};

export default function CategoryCard({
  imgName,
  title,
  description,
}: CardProps) {
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
      />

      <Stack
        sx={{
          px: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          zIndex: 1,
        }}
        spacing={{ xs: 3, md: 4, lg: 6 }}
      >
        <Stack spacing={1} className="center">
          <Typography
            sx={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: { sm: 24, md: 20, lg: 32 },
            }}
            className="cat_typography"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontStyle: "oblique",
            }}
            className="cat_typography"
          >
            {description}
          </Typography>
        </Stack>
        <Box>
          {showLink && (
            <Link href={`/category/${title}`} className="explore">
              <Typography
                className="cat_typography typography_hover"
                sx={{ fontSize: { lg: 24 }, letterSpacing: "1px" }}
              >
                Explore All
              </Typography>
            </Link>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}
