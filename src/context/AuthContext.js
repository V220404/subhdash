import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

export function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  async function fetchDetails() {
    const user = await JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user,
        },
      })
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [state])
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
}
