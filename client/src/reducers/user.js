import { HttpError } from '../utils/httperror';

const user = (state = { Token: null, email: '', loginRequest: false, registerRequest: false, refreshToken: null, error: null }, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      return { ...state, Token: action.payload.Token, RefreshToken: action.payload.RefreshToken };

    case 'ADD_EMAIL':
      return { ...state, email: action.payload.email };

    case 'REMOVE_TOKEN':
      return { ...state, Token: null, error: null };

    case 'LOGIN_REQUEST':
      return { ...state, loginRequest: true };

    case 'LOGIN_SUCCESS':
      return { ...state, loginRequest: false, Token: action.payload.response.Data.Token, refreshToken: action.payload.response.Data.RefreshToken };

    case 'LOGIN_FAILURE': {
      if (action.payload.error instanceof HttpError) {
        const { networkObj } = action.payload.error;
        return { ...state, loginRequest: false, error: networkObj.UserMessage };
      }
      return state;
    }
    case 'REGISTER_REQUEST':
      return { ...state, registerRequest: true };

    case 'REGISTER_SUCCESS':
      console.log(action.payload);
      return { ...state, email: action.payload.response.Data.email, registerRequest: false, Token: action.payload.response.Data.Token, refreshToken: action.payload.response.Data.RefreshToken };

    case 'REGISTER_FAILURE': {
      if (action.payload.error instanceof HttpError) {
        const { networkObj } = action.payload.error;
        return { ...state, registerRequest: false, error: networkObj.UserMessage };
      }
      return state;
    }

    default:
      return state;
  }

}

export default user;