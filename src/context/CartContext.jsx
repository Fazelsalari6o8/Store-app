// hooks
import { createContext, useContext, useReducer } from "react";

// helper
import { sumProducts } from "../helper/helper.js";

// get data from localStorage:
const savedData = JSON.parse(localStorage.getItem("basketCart"));

const initialState = {
  selectedItems: savedData.selectedItems || [],
  itemsCounter: savedData.itemsCounter || 0,
  totalPrice: savedData.totalPrice || 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      if (state.itemsCounter === 1) {
        localStorage.setItem(
          "basketCart",
          JSON.stringify({
            selectedItems: [],
            quantity: 0,
            totalPrice: 0,
            checkout: true,
          })
        );
      }
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[increaseIndex].quantity++;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[decreaseIndex].quantity--;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "CHECKOUT":
      localStorage.setItem(
        "basketCart",
        JSON.stringify({
          selectedItems: [],
          quantity: 0,
          totalPrice: 0,
          checkout: true,
        })
      );
      return {
        selectedItems: [],
        quantity: 0,
        totalPrice: 0,
        checkout: true,
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
  // save data to localStorage:
  state.selectedItems.length &&
    localStorage.setItem("basketCart", JSON.stringify(state));
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
