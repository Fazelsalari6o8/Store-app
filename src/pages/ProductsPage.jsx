// hooks
import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

// library
// icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

// components
import Card from "../components/Card";
import Loader from "../components/Loader";

// helper
import { shortenText } from "../helper/helper";

// styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  // console.log(products);

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const searchHandler = () => {
    console.log(search.trim());
    console.log(products);
    const newProducts = products.filter((product) => {
      const findText = shortenText(product.title);
      return findText.toLowerCase().includes(search.trim());
    });
    console.log(newProducts);
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
