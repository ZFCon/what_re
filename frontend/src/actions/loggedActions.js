export const signIn = (name) => {
    return {
      type: 'SIGN_IN',
      payload: {
        name: name
      }
    };
  };

export const logout = (name) => {
    return {
      type: 'LOGOUT',
      payload: {
        name: name
      }
    };
  };
  