import React from "react";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  let { data, isPending, errors, search, setSearch } = useAllProduct();

  let {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  // console.log("productByCategory -->", productByCategory);
  // console.log("productByCategory products",productByCategory?.products); // [] - array is truthy value

  if (isPending) return <h1>Loading products...</h1>;

  // implement this feature:
  // - if search term related products not found/exists then what to do/show ?
  // - if search + category at same time then what to show ? ~ we can combine UseallProduct api/hook with productbyCategory api/hook
  // - if search + category --> products is not found/exists then what to do/show?
  // - category but products not found ?
  // - implement infinite scroll + pagination

  return (
    <div>
      <Filter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* {productByCategory?.products // productByCategory?.products; // [] - array is truthy value
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))} */}

        {productByCategory?.products.length // productByCategory?.products.length --> 0 is falsy value
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
