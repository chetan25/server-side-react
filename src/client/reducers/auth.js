import {FETCH_CURRENT_USER } from '../actions';

export default (state = null, action) => {
    switch(action.type) {
        case FETCH_CURRENT_USER:
            if (action.payload) {
                return action.payload.data;
            }
            return false;
        default:
            return state;
    }
}