const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload.products;
        default:
            return state;
    }
};

export default productsReducer;