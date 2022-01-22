import { 
  ALL_USERS
  } from "../constans"

const initialState = {
  users: [],
}

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    /** DO DU LIEU RA TRANG DASHBOARD */
    case ALL_USERS:
      return{
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default dashboardReducer