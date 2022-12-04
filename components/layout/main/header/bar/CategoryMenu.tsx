import React from "react";
import { Collapse, Stack } from "@mui/material";

import Link from "next/link";
import CategoryTitles from "components/common/CategoryTitles";

type Props = {
  openCategories: boolean;
  close: () => void;
};

export default function CategoryMenu({ openCategories, close }: Props) {
  return (
    <Collapse timeout={600} in={openCategories} orientation="vertical">
      <Stack spacing={3} sx={{ pt: 2, px: { xs: 4 } }}>
        <Link href="/category/rings" onClick={close}>
          <CategoryTitles title="Rings" />
        </Link>
        <Link href="/category/earrings" onClick={close}>
          <CategoryTitles title="Earrings" />
        </Link>
        <Link href="/category/necklaces" onClick={close}>
          <CategoryTitles title="Necklaces" />
        </Link>
        <Link href="/category/braceletes" onClick={close}>
          <CategoryTitles title="Braceletes" />
        </Link>
      </Stack>
    </Collapse>
  );
}
