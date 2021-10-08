
//
//  REDUCER: SET USER
//

export const setUser = user => ({
  type: 'SET_USER',
  payload: {
    user
  }
})

const loginRequest = () => ({
  type: 'LOGIN_REQUEST'
});

const loginSuccess = (response) => ({
  type: 'LOGIN_SUCCESS',
  payload: { response }
});

const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: { error }
});

export const loginAction = (userLogin) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest())
      let res = await loginPost(userLogin);
      dispatch(loginSuccess(res));
    } catch (e) {
      dispatch(loginFailure(e));
    }
  }
}