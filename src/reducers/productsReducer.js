import { types } from "../types/types";

export const productsReducer = ( state = { quantity: 0 }, action ) => {
    switch ( action.type ) {
        case types.setQuantity:
            return {
                quantity: action.payload.quantity
            }
 
        default:
            return state;
    }
}