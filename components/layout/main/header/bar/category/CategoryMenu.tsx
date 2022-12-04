import React, { memo, useEffect } from "react";

import Link from "next/link";
import { Collapse, Stack } from "@mui/material";
import CategoryTitles from "components/common/category-titles";
import { useRouter } from "next/router";

type Props = {
  openCategories: boolean;
  close: () => void;
};

function CategoryMenu({ openCategories, close }: Props) {
  const router = useRouter();
  useEffect(() => {
    if (openCategories) close();
  }, [router.asPath]);
  return (
    <Collapse
      timeout="auto"
      in={openCategories}
      orientation="vertical"
      unmountOnExit
    >
      <Stack spacing={3} sx={{ pt: 2, px: { xs: 4 } }}>
        <Link href="/category/rings">
          <CategoryTitles title="Rings" />
        </Link>
        <Link href="/category/earrings">
          <CategoryTitles title="Earrings" />
        </Link>
        <Link href="/category/necklaces">
          <CategoryTitles title="Necklaces" />
        </Link>
        <Link href="/category/braceletes">
          <CategoryTitles title="Braceletes" />
        </Link>
      </Stack>
    </Collapse>
  );
}

export default memo(CategoryMenu);
