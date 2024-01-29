// hooks
import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";

// components
import Loader from "../components/Loader";

// styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
