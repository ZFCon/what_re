export const fetchProducts = (products) => {
  return {
    type: 'FETCH_PRODUCTS',
    payload: {
      products: products,
    }
  };
};

export const updateProduct = (product) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: {
      product: product,
    }
  };
};
