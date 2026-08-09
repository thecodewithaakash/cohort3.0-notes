import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 40;

  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      // unique key for caching this query

      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      // queryFn gets called with pageParam (the current skip/start value)
      // you must return data (e.g. res.data) from getAllProducts

      initialPageParam: 0,
      // starting point → first page begins at 0

      getNextPageParam: (lastPage, allPages) => {
        // console.log("lastPage",lastPage); // lastPage → response of the most recent API call
        // console.log("allPage",allPage); // allPages → array of all previously fetched pages
        //  return 10;

        // lastPage → response of the most recent API call
        // allPages → array of all previously fetched pages
        // lastPage.total → total items available on server

  
        let loadedData = allPages.length * limit;
        // loadedData = how many items we have already fetched (pages * limit)

        if (loadedData < lastPage.total) {
          // if we still have more items to load
          return loadedData;
          // this becomes the next pageParam (skip value for API)
        }

        return undefined;
        // tells React Query: no more pages left to fetch
      },
    });

  if (isPending) return "loading...";

  console.log(data);

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];
  // - ?? [] → if data?.pages?.flatMap((val) => val.products) is undefined, use an empty array instead
  // - ?? nullish coalescing operator → if left side is null or undefined, use right side

  return (
    <div className="flex p-5 flex-col gap-6 items-center">
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* this is work only for initial page -> 0*/}
        {/* {data?.pages[0]?.products?.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))} */}

        {/* 
        {data?.pages?.flatMap((val) => val.products)?.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))} */}

        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading.." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default Infinite;
