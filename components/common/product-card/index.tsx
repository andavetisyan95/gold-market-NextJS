import React from "react";

type ProductProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductCard({}: ProductProps) {
  return <div>ProductCard</div>;
}
