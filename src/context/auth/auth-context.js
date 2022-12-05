/* eslint-disable react/prop-types */
import React from 'react';

const AuthStateContext = React.createContext();
const AuthDespatcherContext = React.createContext();

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
