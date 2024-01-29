// library
import { Navigate, Route, Routes } from "react-router-dom";

// pages
import ProductsPage from "./pages/ProductsPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import PageNotFound from "./pages/404.jsx";

// context provider
import ProductsProvider from "./context/ProductContext.jsx";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
