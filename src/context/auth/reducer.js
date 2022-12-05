export const initialState = {
  user: null,
  token: null,
  loading: true,
  error: null,
};

export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        token: null,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: null,
      };

    default:
      throw new Error('Action type not supported');
  }
}

/**
 * This is a action creator function for dispatching
 * the request for the login action in reducer
 * @returns an object contains the type of action
 */
export const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

/**
 * This is a action creator function for dispatching
 * the request for the successful login action
 * @param {object} payload is the logged in user information
 * @returns an object contains the action type and the
 * user information
 */
export const loginSuccess = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});
