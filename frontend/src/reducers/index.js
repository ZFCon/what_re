import loggedReducer from './loggedReducer';
import productsReducer from './productsReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    products: productsReducer,
    logged: loggedReducer,
});

export default rootReducer;