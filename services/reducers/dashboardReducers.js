import { 
  DATA_COMMUNES
  } from "../constans"

const initialState = {
  notification_user: [],
  users: [],
  notification_list: []
}

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    /** DO DU LIEU RA TRANG DASHBOARD */
    case DATA_COMMUNES:
      return{
        ...state,
        communes: action.payload
      }
    default:
      return state
  }
}

export default dashboardReducer