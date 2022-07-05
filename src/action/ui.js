import { types } from '../types/types';

export const setProductsLoading = (  ) => {
    return {
        type: types.setProductLoading,
    }
}

export const unsetProductsLoading = (  ) => {
    return {
        type: types.unsetProductLoading,
    }
}
