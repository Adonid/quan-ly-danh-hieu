import { 
  LOGGED,
  } from "../constans"
import {setTokenInCookie, removeTokenInCookie} from 'general/helper/cookie'

const initialState = {
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

    default:
      return state
  }
}

export default loginReducer