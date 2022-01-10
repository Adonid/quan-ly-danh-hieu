import { 
  alertTypes,
  userTypes
  } from "../constans"

const initialState = {
  toaster: {
    type: "info",
    alert: "Vui lòng đăng nhập!"
  },
  currentUser: {}
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
    /** NAP LAI THONG TIN CUA USER DANG THAO TAC */
    case userTypes.RELOAD_DATA:
      return{
        ...state,
        currentUser: action.payload
      }
    
    default:
      return state
  }
}

export default commonReducer