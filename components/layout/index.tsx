import React from "react";
import Head from "next/head";

import { Box, Stack } from "@mui/material";
import Header from "./main/header";
import Footer from "./main/footer";

type MainLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {/* <Box sx={{ px: 10, mt: 12, mb: 1, position: "relative" }}> */}
      <Stack>{children}</Stack>
      <Footer />
    </>
  );
}
