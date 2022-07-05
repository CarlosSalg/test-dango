import { types } from '../types/types';

export const setQuantity = ( quantity ) => {
    return {
        type: types.setQuantity,
        payload: {
            quantity
        }
    }
}
