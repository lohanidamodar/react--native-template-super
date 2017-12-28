import { AUTH__LOGGED_IN } from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    user: null
};
    
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH__LOGGED_IN: {
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        }
        default: {
            return state;
        }
    }
};
    


