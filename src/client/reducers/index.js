import { combineReducers } from 'redux';
import userReducer from './users';
import authReducer from './auth';

export default combineReducers({
    users: userReducer,
    auth: authReducer
});