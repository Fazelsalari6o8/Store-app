// library
// custom hook
import { useCart } from "../context/CartContext.jsx";

// components
import BasketCard from "../components/BasketCard.jsx";
import BasketSidebar from "../components/BasketSidebar.jsx";

// styles
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div className={styles.container}>
      {/* {!state.itemsCounter && <h2 className={styles.empty}>Empty</h2>} */}
      {!state.itemsCounter ? (
        <h2 className={styles.empty}>Empty</h2>
      ) : (
        <>
          <BasketSidebar state={state} clickHandler={clickHandler} />
          <div className={styles.products}>
            {state.selectedItems.map((product) => (
              <BasketCard
                key={product.id}
                data={product}
                clickHandler={clickHandler}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
