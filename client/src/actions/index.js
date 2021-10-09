import { loginPost, registerPost } from '../utils/utils'
//
//  REDUCER: LOGIN
//

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
//
//  REDUCER: REGISTER
//

const registerRequest = () => ({
  type: 'REGISTER_REQUEST'
});

const registerSuccess = (response) => ({
  type: 'REGISTER_SUCCESS',
  payload: { response }
});

const registerFailure = (error) => ({
  type: 'REGISTER_FAILURE',
  payload: { error }
});

export const registerAction = (userRegister) => {
  return async (dispatch) => {
    try {
      dispatch(registerRequest())
      let res = await registerPost(userRegister);
      dispatch(registerSuccess(res));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }
}