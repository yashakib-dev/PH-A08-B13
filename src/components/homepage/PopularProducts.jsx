"use client";
import useProducts from "@/hooks/useProducts";

import React from "react";

import ProductsCards from "./ProductsCards";

const PopularProducts = () => {
  const { products, loading } = useProducts();
  return (
    <ProductsCards products={products} loading={loading}></ProductsCards>
  );
};

export default PopularProducts;
