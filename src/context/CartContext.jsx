// hooks
import { createContext, useContext, useReducer } from "react";

// helper
import { sumProducts } from "../helper/helper.js";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    default:
      throw new Error("Invalid Action!");
  }
};

// context
const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// custom hook
const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
