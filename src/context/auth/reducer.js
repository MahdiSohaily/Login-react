/**
 * this is an object which define the values
 * which we need as a state for preforming
 * actions that is required in login action.
 */
export const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

/**
 * this is an ENUM like object that indicate
 * to the different actions user can preform
 * in the login form page.
 */
export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

/**
 * This is a reducer function which handle the user
 * different actions in the login form for login action
 * @param {object} state is a global object that indicate
 * to the state of our application
 * @param {object} action an object indicate to the action type
 * and provided data from the user to change global state
 * @returns the new state of our application based on user action
 */
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

/**
 * This is a action creator function for dispatching
 * an action regarding to the login failure.
 * @returns an object contains the type of action.
 */
export const loginError = () => ({
  type: actionTypes.LOGIN_ERROR,
});

/**
 * This is a action creator function for logout action
 * @returns an object contains the type of action.
 */
export const logout = () => ({
  type: actionTypes.LOGOUT,
});
