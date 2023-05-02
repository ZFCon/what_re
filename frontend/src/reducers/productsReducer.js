const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload.products;

        case 'UPDATE_PRODUCT':
            return state.map(product => {
                if (product.id === action.payload.product.id) {
                    return action.payload.product;
                };
            });
        default:
            return state;
    }
};

export default productsReducer;