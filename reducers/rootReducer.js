import counterReducer from './counterReducer';
import loginReducer from "./loginReducer";
import usersReducers from "./usersReducers";
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    //characters: characterReducer,
    myUsers: usersReducers,
    myCounter: counterReducer,
    logIn: loginReducer
})

export default rootReducer