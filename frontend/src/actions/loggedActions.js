export const signIn = (name) => {
    return {
      type: 'SIGN_IN',
      payload: {
        name: name
      }
    };
  };
  