import React, { memo } from "react";
import axios from "axios";
import { ProductProps } from "types/home-page-common";

function AllCategories({ products }: { products: ProductProps[] }) {
  return <div>All Categories</div>;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/products");
  const products: ProductProps[] = await res.json();
  return {
    props: { products },
  };
}

export default memo(AllCategories);
