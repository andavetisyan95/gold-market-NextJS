import React from "react";
import { Box } from "@mui/material";
import ContactsPage from "components/pages-layouts/contacts";
import WithBackground from "components/common/layout-with-background";

type Props = {};

export default function Contacts({}: Props) {
  return (
    <Box>
      <ContactsPage />
    </Box>
  );
}
