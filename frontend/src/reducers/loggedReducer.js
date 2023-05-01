const loggedReducer = (state = sessionStorage.getItem('name'), action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return action.payload.name;
        case 'LOGOUT':
            console.log("out")
            return null
        default:
            return state;
    }
};

export default loggedReducer;