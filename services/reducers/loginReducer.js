import { 
  LOGGED,
  REMOVE_TOKEN,
  FORGET_PASSWORD_DONE
  } from "../constans"
import {setTokenInCookie, removeTokenInCookie} from 'general/helper/cookie'

const initialState = {
  email: null,
  myself: {},
  wins: []
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
        wins: action.payload.wins
      }
    // DANG XUAT
    case REMOVE_TOKEN:
      // Xoa cookie
      removeTokenInCookie()
      return{
        ...state,
        email: null,
        myself: {},
        wins: []
      }
      
    // TAO MA RESET PASSWORD THANH CONG
    case FORGET_PASSWORD_DONE:
      return{
        ...state,
        email: action.payload,
      }

    default:
      return state
  }
}

export default loginReducer