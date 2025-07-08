import type { ProductType } from "../../types/ProductType";
import CartActionTypes from "./action-type";

type CartState = {
  products: ProductType[];
  productsTotalPrice: number;
};

type AddProductAction = {
  type: typeof CartActionTypes.ADD_PRODUCT;
  payload: ProductType;
};

type RemoveProductAction = {
  type: typeof CartActionTypes.REMOVE_PRODUCT;
  payload: { id: string };
};

type UpdateProductQuantityAction = {
  type: typeof CartActionTypes.UPDATE_PRODUCT_QUANTITY;
  payload: { id: string; quantity: number };
};

type CartAction =
  | AddProductAction
  | RemoveProductAction
  | UpdateProductQuantityAction;

const inicialState: CartState = {
  products: [],
  productsTotalPrice: 0,
};


const calculateTotalPrice = (products: ProductType[]): number => {
  return products.reduce((total, product) => {
    const quantity = product.quantity ?? 1;
    return total + product.price * quantity;
  }, 0);
};

const cartReducer = (
  state: CartState = inicialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT: {
      const addAction = action as AddProductAction;
      const existingProduct = state.products.find(
        (p) => p.id === addAction.payload.id
      );

      let updatedProducts;

      if (existingProduct) {
        updatedProducts = state.products.map((p) =>
          p.id === addAction.payload.id
            ? {
                ...p,
                quantity: (p.quantity ?? 1) + (addAction.payload.quantity ?? 1),
              }
            : p
        );
      } else {
        updatedProducts = [
          ...state.products,
          { ...addAction.payload, quantity: addAction.payload.quantity ?? 1 },
        ];
      }

      return {
        ...state,
        products: updatedProducts,
        productsTotalPrice: calculateTotalPrice(updatedProducts),
      };
    }

    case CartActionTypes.REMOVE_PRODUCT: {
      const removeAction = action as RemoveProductAction;
      const updatedProducts = state.products.filter(
        (p) => p.id !== removeAction.payload.id
      );

      return {
        ...state,
        products: updatedProducts,
        productsTotalPrice: calculateTotalPrice(updatedProducts),
      };
    }

    case CartActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const updateAction = action as UpdateProductQuantityAction;
      const updatedProducts = state.products.map((p) =>
        p.id === updateAction.payload.id
          ? { ...p, quantity: updateAction.payload.quantity }
          : p
      );

      return {
        ...state,
        products: updatedProducts,
        productsTotalPrice: calculateTotalPrice(updatedProducts),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
