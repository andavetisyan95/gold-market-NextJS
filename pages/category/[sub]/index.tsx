import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

type Props = {};

export default function SubCategory({}: Props) {
  const [typeResults, setTypeResults] = useState([]);
  const router = useRouter();
  const categoryType = router.query.sub;

  const getResults = useCallback(async () => {
    const { data } = await axios.get(
      `http://localhost:8000/products?category=${categoryType}`
    );
    setTypeResults(data);
  }, [categoryType]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  return <div>{categoryType}</div>;
}
