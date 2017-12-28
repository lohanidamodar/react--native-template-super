import { AUTH__LOGGED_IN, AUTH__UPDATE_USER } from './actionTypes'

export const login = (isLoggedIn) => ({
    type: AUTH__LOGGED_IN,
    isLoggedIn: isLoggedIn
})

export const updateUser = (user) => ({
    type: AUTH__UPDATE_USER,
    user: user
})