// library
// icons
import { MdDeleteOutline } from "react-icons/md";

// helper
import { shortenText } from "../helper/helper.js";

// styles
import styles from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, price, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={shortenText(title)} />
      <div className={styles.info}>
        <p>{shortenText(title)}</p>
        <p className={styles.price}>{price} $</p>
      </div>
      <div className={styles.actions}>
        {quantity === 1 ? (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        ) : (
          quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE", data)}>-</button>
          )
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
