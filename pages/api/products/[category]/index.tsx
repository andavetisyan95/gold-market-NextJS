import { products } from "data/products";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const category = req.query.category;
  console.log(category);
  const result = products.filter(product => product.category === category);

  res.status(200).json(result);
}
