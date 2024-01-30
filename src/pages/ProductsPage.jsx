// hooks
import { useState } from "react";
import { useProducts } from "../context/ProductContext";

// library
// icons
import { ImSearch } from "react-icons/im";

// components
import Card from "../components/Card";
import Loader from "../components/Loader";

// styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log(search.trim());
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
        <div>Sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;
