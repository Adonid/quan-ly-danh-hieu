const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
}

function loginReducer(state = initialState, action) {
  switch (action.type) {

    // case actionTypes.FAILURE:
    //   return {
    //     ...state,
    //     ...{ error: action.error },
    //   }

    default:
      return state
  }
}

export default loginReducer