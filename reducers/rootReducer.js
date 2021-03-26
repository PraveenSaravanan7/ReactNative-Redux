import counterReducer from './counterReducer';
import loginReducer from "./loginReducer";
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    //characters: characterReducer,
    myCounter: counterReducer,
    logIn: loginReducer
})

export default rootReducer