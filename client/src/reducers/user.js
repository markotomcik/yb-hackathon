const INIT_STATE = {};
const user = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.user
    default:
      return state
  }
}

export default user;