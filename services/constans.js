import config from "config/config.json"

/**  URI FOR REDIRECT PAGE */
export const uriPage = {
    login: '/login',
    forgetpassword: '/forget-password',
    resetpassword: '/reset-password',
    register: '/register',
    home: '/home',
}

export const alertTypes = {
    SUCCESS: "SUCCESS",
    INFO: "INFO",
    WARNING: "WARNING",
    FAILURE: "FAILURE",
}
export const LOGIN = config.host
export const LOGGED = 'LOGGED'
export const LOGOUT = 'LOGOUT'
export const GET_MENU = 'GET_MENU'
export const REFRESH_MENU = 'REFRESH_MENU'
export const REGISTER = 'REGISTER'
export const FORGET_PASSWORD = 'FORGET_PASSWORD'
export const RESET_PASSWORD = 'RESET_PASSWORD'
export const REMOVE_TOKEN = 'REMOVE_TOKEN'

export const UPDATE_BASIC_INFO_USER = 'UPDATE_BASIC_INFO_USER'
export const UPDATE_ADDRESS_USER = 'UPDATE_ADDRESS_USER'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const LOAD_DISTRICTS = 'LOAD_DISTRICTS'
export const LOAD_COMMUNES = 'LOAD_COMMUNES'
export const DATA_DISTRICTS = 'DATA_DISTRICTS'
export const DATA_COMMUNES = 'DATA_COMMUNES'

export const UPLOAD_BACKGROUND = 'UPLOAD_BACKGROUND'
export const UPLOAD_AVATAR = 'UPLOAD_AVATAR'