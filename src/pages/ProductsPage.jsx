// hooks
import { useState } from "react";
import { useProducts } from "../context/ProductContext";

// library
// icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

// components
import Card from "../components/Card";
import Loader from "../components/Loader";

// styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  // console.log(products);
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log(search.trim());
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName === "LI") return;
    console.log(category);
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
          {!products.length && <Loader />}
          {products.map((product) => (
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
