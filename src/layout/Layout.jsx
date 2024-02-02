// library
// hook
import { useState } from "react";
// custom hook
import { useCart } from "../context/CartContext.jsx";
// router
import { Link } from "react-router-dom";
// icons
import { PiShoppingCartSimpleBold } from "react-icons/pi";

// styles
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [showHint, setShowHint] = useState(false);
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">SalarShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed with ❤️ by{" "}
          <a
            href="https://github.com/Fazelsalari6o8"
            target="_blank"
            onMouseEnter={() => setShowHint(true)}
            onMouseLeave={() => setShowHint(false)}
          >
            Developer6o8
          </a>
          {showHint && <span>Show github page</span>}
        </p>
      </footer>
    </>
  );
}

export default Layout;
