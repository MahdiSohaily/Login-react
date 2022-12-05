/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

const AuthStateContext = React.createContext();
const AuthDespatcherContext = React.createContext();

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('AuthStateContext provider must be used !!!');
  }

  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDespatcherContext);
  if (!context) {
    throw new Error('AuthDespatcherContext provider must be used !!!');
  }

  return context;
}

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDespatcherContext.Provider value={dispatch}>
        {children}
      </AuthDespatcherContext.Provider>
    </AuthStateContext.Provider>
  );
}
