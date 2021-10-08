const initialState = {};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, value: state.value + 1 }
    default:
      return state
  }
}