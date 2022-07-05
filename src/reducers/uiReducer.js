import { types } from "../types/types";

export const uiReducer = ( state = { productsLoading: true }, action ) => {
    switch ( action.type ) {

        case types.setProductLoading:
            return {
                productsLoading: true
            }
 
        case types.unsetProductLoading:
            return {
                productsLoading: false
            }
 
        default:
            return state;

    }
}