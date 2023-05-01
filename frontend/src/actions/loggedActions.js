export const signIn = (name) => {
    sessionStorage.setItem('name', name);

    return {
      type: 'SIGN_IN',
      payload: {
        name: name
      }
    };
  };

export const logout = (name) => {
    sessionStorage.removeItem('name');
    return {
      type: 'LOGOUT',
      payload: {
        name: name
      }
    };
  };
  