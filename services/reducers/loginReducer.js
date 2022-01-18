import { 
  LOGGED,
  REMOVE_TOKEN,
  FORGET_PASSWORD_DONE,
  REFRESH_NOTIFYING
  } from "../constans"
import {setTokenInCookie, removeTokenInCookie} from 'general/helper/cookie'

const initialState = {
  email: null,
  myself: {},
  wins: [],
  notifying: []
}

function loginReducer(state = initialState, action) {
  switch (action.type) {

    // DANG NHAP THANH CONG
    case LOGGED:
      // Luu token vao cookie
      setTokenInCookie(action.payload.token)
      return{
        ...state,
        myself: action.payload.myself,
        wins: action.payload.wins,
        notifying: action.payload.notifying
      }
    // DANG XUAT
    case REMOVE_TOKEN:
      // Xoa cookie
      removeTokenInCookie()
      return{
        ...state,
        email: null,
        myself: {},
        wins: [],
        notifying: []
      }
      
    // TAO MA RESET PASSWORD THANH CONG
    case FORGET_PASSWORD_DONE:
      return{
        ...state,
        email: action.payload,
      }

    // CAP NHAT TRANG THAI THONG BAO KHI TOGGER THONG BAO
    case REFRESH_NOTIFYING:
      return{
        ...state,
        notifying: action.payload
      }

    default:
      return state
  }
}

export default loginReducer