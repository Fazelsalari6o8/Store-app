// library
// hooks
import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
// icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

// components
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";

// helper
import {
  createQueryObject,
  filterProducts,
  searchProducts,
} from "../helper/helper.js";

// styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  // console.log(products);

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  // get all products
  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  // filter products
  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search.trim() }));
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
            // searchHandler();
          }}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
