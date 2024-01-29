import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <>
      <h1>SalarShop</h1>
    </>
  );
}

export default ProductsPage;
