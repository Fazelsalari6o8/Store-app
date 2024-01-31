// hooks
import { createContext, useContext, useReducer } from "react";

const initialState = {};

const reducer = () => {};

// context
const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}

// custom hook
const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export default CartProvider;
