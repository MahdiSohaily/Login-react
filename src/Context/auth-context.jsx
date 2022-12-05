import React, { useReducer, useContext } from 'react'

const AuthStateContext = React.createContext()
const AuthDisptacherContext = React.createContext()


export function useAuthState() {
    const context = useContext(AuthStateContext)

    if (!context) {
        throw Error('useAuthState must be used with a AuthProvider')
    }

    return context;
}

export function useAuthDispatch() {
    const context = useContext(AuthDisptacherContext)

    if (!context) {
        throw Error('useAuthDispatch must be used with a AuthProvider')
    }

    return context;
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthStateContext.Provider value={state} >
            <AuthDisptacherContext.Provider value={dispatch}>
                {children}
            </AuthDisptacherContext.Provider>
        </AuthStateContext.Provider>
    )
}
