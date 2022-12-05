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
