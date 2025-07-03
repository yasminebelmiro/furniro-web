import type { ProductType } from "../../types/ProductType"
import CartActionTypes from "./action-type"

export const addProductToCart = (product: ProductType) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product,
});

export const removeProductToCart = (id: string) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: { id },
});