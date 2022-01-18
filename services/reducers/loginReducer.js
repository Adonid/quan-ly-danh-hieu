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
      let notifies = {...state}.notifying
      // Lay user tra ve
      const currentUser = action.payload
      // User nay co trong store nay chua
      const inUser = notifies.filter(item => (item.id === currentUser.id))[0]
      // Neu co trong store nay roi thi chi viec cap nhat lai user nay
      if(inUser){
        notifies = notifies.map(user => {
          if(user.id === currentUser.id)
            return currentUser
          return user
        })
      }
      // Neu khong co trong store thi add truc tiep vao
      else{
        notifies.push(currentUser)
      }      
      const newNotifies = notifies.filter(i => (i.show_report && i.to_quota))
      return{
        ...state,
        notifying: newNotifies
      }

    default:
      return state
  }
}

export default loginReducer