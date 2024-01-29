// hooks
import { useProducts } from "../context/ProductContext";

// styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>loading...</p>}
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
