import { useQuery } from "@tanstack/react-query";
import {
  getAllPRoductApi,
  getProductByCategory,
  getProductsCategories,
} from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  // console.log("search results --->",search);
  

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  let { data, isPending, errors } = useQuery({
    queryKey: ["products", debounceSearch], // re-render,re-call -> whenever 'products' &  debounceSearch changes
    queryFn: () => getAllPRoductApi(debounceSearch),
  });

  // console.log("products data", data);

  return {
    data,
    isPending,
    errors,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  // const { data, isPending, error } = useQuery({
  //   queryKey: ["AllCategories"],
  //   queryFn: getProductsCategories,
  // });

  // return { data, isPending, error };

  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductsCategories,
  });
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);

  console.log("ye category hai->", category);

  let { data } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductByCategory(category),
  });

  return {
    data,
    category,
    setCategory,
  };
};
