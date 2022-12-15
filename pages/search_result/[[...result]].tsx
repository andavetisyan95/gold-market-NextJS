import React from "react";
import { useRouter } from "next/router";

export default function IndividualSearchPage() {
  const result = useRouter().query.result;
  return <div>Search page {result}</div>;
}
