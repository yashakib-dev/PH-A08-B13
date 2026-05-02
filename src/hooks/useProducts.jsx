"use client"
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://ph-a08-b13.vercel.app/data.json",{
        cache:"no-store"
      });
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
