import { AUTH__LOGGED_IN, AUTH__UPDATE_USER } from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    user: {
        fullName: 'John Doe',
        username: 'johndoe',
        email: 'john@doe.com'
    }
};
    
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH__LOGGED_IN: {
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        }
        case AUTH__UPDATE_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        default: {
            return state;
        }
    }
};
    


