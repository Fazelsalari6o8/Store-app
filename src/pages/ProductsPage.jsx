// library
// hooks
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

// components
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
import Sidebar from "../components/Sidebar.jsx";
import SearchBox from "../components/SearchBox.jsx";

// helper
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper.js";

// styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  // get all products
  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  // filter products
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
