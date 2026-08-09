import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const TanStack = () => {
  let limit = 10;
  const [page, setPage] = useState(0);

  let { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ["products", page], // dependency array, if page changes, it will refetch the data
    queryFn: () => getAllProducts(limit, page),

    // without this, when we click on next page, it will show loading state and then show the data, but with this,
    // it will keep the previous data and show the new data when it is fetched...

    // if we don't use this, it will show loading state and then show the new data, but with this, 
    // it will keep the previous data and show the new data when it is fetched...
    placeholderData: keepPreviousData, 

    // with this below code --> best for pagination because it reuses cached results from the last queryKey while fetching the new one, avoiding flicker.
    keepPreviousData: true,

    // even though API call is triggered, it will not show loading state, it will keep the previous data until the new data is fetched...
    // but if we want cached data, we can use this...
    staleTime: 5000 * 60, // 5 seconds, after 5 seconds, it will show loading state and then show the new data...

    //  For pagination, keepPreviousData: true + staleTime is the recommended combo.
  });

  if (isPending) return "Loading...";
  if (isError) return "Something went wrong";

  let totalPages = Math.ceil(data.total / limit);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div
        style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          Prev
        </button>
        <p>
          page {page + 1} of {totalPages}
        </p>
        <button
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TanStack;
