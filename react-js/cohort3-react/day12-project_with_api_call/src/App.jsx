import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { isCartOpen, cartItems } = useContext(MyStore);

  const [productsData, setProductsData] = useState([]);
  console.log(productsData);

  const getProductsData = async () => {
    try {
      // By default, axios makes a GET request:
      // axios.get('apiUrl') is equivalent to axios('apiUrl')

      // Axios returns a Promise, so we can use await (wait until the Promise resolves).
      // Example:
      // let data = await axios.get('https://fakestoreapi.com/products');
      // console.log(data);

      // ### Fetching products with Fetch API
      // Fetch also returns a Promise, so we need to handle it with .then/.catch
      // or modern async/await with try/catch.
      // Example:
      // let products = fetch("https://fakestoreapi.com/products");

      // let products = await fetch("https://fakestoreapi.com/products");
      // // Fetch API returns a Response object; response.body is a ReadableStream.
      // // We must convert it into JSON format.
      // const data = await products.json();
      // console.log("Fetch API data:", data);

      // better than fetch: Fetching products with Axios
      // by default axios make GET Method HTTP Request ~ but this is not best Practice
      let res = await axios("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error in API:", error);
    }
  };

  useEffect(() => {
    // useEffect runs after initial render -> calling API here prevents infinite re-renders
    // because setState (useState) triggers re-render
    // if we call API directly in component body → loop(infinite re-rendering of APP Component)
    // [] dependency ensures it runs only once (on mount)

    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);

            return (
              // ### Why we need Unique key for Each list item ?
              // React requires a unique "key" for each list item
              // Keys help React identify which items changed, added, or removed
              // Without a proper key → warning/error + inefficient re-render
              // Using elem.id ensures uniqueness and stable identity
              // ✅ Stable rendering: React reuses DOM nodes instead of recreating them,
              // which preserves component state and improves performance

              // ### Why index as key not prefer ?
                // ❌ Using index as key is not recommended
                // Because when list items change (add/remove/reorder),
                // React reuses DOM nodes incorrectly → causes unstable rendering
                // Component state may get mixed up or lost
                // ✅ Better: use a unique stable identifier like elem.id

                // “Index keys break React’s diffing when list order changes, leading to unstable rendering and state bugs; unique IDs ensure stable updates.”

              <ProductCards key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
