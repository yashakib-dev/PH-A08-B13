"use client"
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/data.json");
      const data = await res.json();
     

      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return { products, loading };
};

export default useProducts;
