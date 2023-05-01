import loggedReducer from './loggedReducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    logged: loggedReducer
});

export default rootReducer;