import config from "config/config.json"

/**  URI FOR REDIRECT PAGE */
export const uriPage = {
    login: '/auth/login',
    forgetpassword: '/auth/forget-password',
    resetpassword: '/auth/reset-password',
    register: '/auth/register',
    home: '/admin/dashboard',
    welcome: '/',
}

export const alertTypes = {
    SUCCESS: "SUCCESS",
    INFO: "INFO",
    WARNING: "WARNING",
    FAILURE: "FAILURE",
}
export const userTypes = {
    RELOAD_DATA: "RELOAD_DATA",
}

export const ADD_USER = "ADD_USER"
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT"
export const UPDATE_ORTHER_INFO = "UPDATE_ORTHER_INFO"
export const TOGGER_REPORT = "TOGGER_REPORT"
export const REFRESH_NOTIFYING = "REFRESH_NOTIFYING"
export const PROMOTION_WIN = "PROMOTION_WIN"
export const DELETE_A_USER = "DELETE_A_USER"
export const LOGIN = config.host
export const LOGGED = 'LOGGED'
export const REMOVE_TOKEN = 'REMOVE_TOKEN'
export const LOGOUT = 'LOGOUT'
export const FORGET_PASSWORD = 'FORGET_PASSWORD'
export const FORGET_PASSWORD_DONE = 'FORGET_PASSWORD_DONE'
export const RESET_PASSWORD = 'RESET_PASSWORD'

export const GET_MENU = 'GET_MENU'
export const REFRESH_MENU = 'REFRESH_MENU'
export const REGISTER = 'REGISTER'

export const UPDATE_BASIC_INFO_USER = 'UPDATE_BASIC_INFO_USER'
export const UPDATE_ADDRESS_USER = 'UPDATE_ADDRESS_USER'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const LOAD_DISTRICTS = 'LOAD_DISTRICTS'
export const LOAD_COMMUNES = 'LOAD_COMMUNES'
export const DATA_DISTRICTS = 'DATA_DISTRICTS'
export const DATA_COMMUNES = 'DATA_COMMUNES'

export const UPLOAD_BACKGROUND = 'UPLOAD_BACKGROUND'
export const UPLOAD_AVATAR = 'UPLOAD_AVATAR'
