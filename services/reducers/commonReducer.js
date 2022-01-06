import { 
  alertTypes,
  REFRESH_MENU,
  LOGGED,
  REMOVE_TOKEN,
  UPDATE_USER_SUCCESS,
  DATA_DISTRICTS,
  DATA_COMMUNES
  } from "../constans"

import {setTokenInCookie, removeTokenInCookie} from 'general/helper/cookie'

const initialState = {
  toaster: {
    type: "info",
    alert: "Vui lòng đăng nhập!"
  },
  access: false,
  menu: {},
  account: null,
  provinces: Array(0),
  districts: Array(0),
  communes: Array(0),
}

function commonReducer(state = initialState, action) {
  switch (action.type) {
    /** DUA RA ALERT THONG BAO CHO HE THONG */
    case alertTypes.SUCCESS:
      return{
        ...state,
        toaster: {
          type: action.payload.type,
          alert: action.payload.alert
        }
      }
    case alertTypes.INFO:
      return{
        ...state,
        toaster: {
          type: action.payload.type,
          alert: action.payload.alert
        }
      }
    case alertTypes.WARNING:
      return{
        ...state,
        toaster: {
          type: action.payload.type,
          alert: action.payload.alert
        }
      }
    case alertTypes.FAILURE:
      return{
        ...state,
        toaster: {
          type: action.payload.type,
          alert: action.payload.alert
        }
      }

    // LAY DU LIEU THANH MENU 1 LAN DUY NHAT KHI TRUY CAP APP
    case REFRESH_MENU:
      return {
        ...state,
        access: true,
        menu: action.payload
      }

    // DANG NHAP THANH CONG
    case LOGGED:
      // Luu token vao cookie
      setTokenInCookie(action.payload.token)
      return{
        ...state,
        account: action.payload.myself,
        provinces: action.payload.provinces
      }
    // DANG XUAT
    case REMOVE_TOKEN:
      // Xoa cookie
      removeTokenInCookie()
      return{
        ...state,
        account: null,
        provinces: []
      }

    // CAP NHAT THONG TIN USER
    case UPDATE_USER_SUCCESS:
      return{
        ...state,
        account: action.payload
      }

    // LOAD LAI DISTRICTS
    case DATA_DISTRICTS:
      return{
        ...state,
        districts: action.payload,
        communes: Array(0)
      }
    // CAP NHAT THONG TIN USER
    case DATA_COMMUNES:
      return{
        ...state,
        communes: action.payload
      }
    default:
      return state
  }
}

export default commonReducer