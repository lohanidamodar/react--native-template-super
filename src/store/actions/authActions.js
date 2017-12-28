import { AUTH__LOGGED_IN } from './actionTypes'

export const login = (isLoggedIn) => ({
    type: AUTH__LOGGED_IN,
    isLoggedIn: isLoggedIn
})