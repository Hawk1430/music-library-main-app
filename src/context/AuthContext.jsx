import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth on mount
    const storedAuth = localStorage.getItem('auth')
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth)
        setUser(parsed)
      } catch (error) {
        console.error(Error in AuthContext, error );
        localStorage.removeItem('auth')
      }
    }
    setLoading(false)
  }, [])

  const login = (username, password) => {
    // Mock authentication
    let userRole = 'user'
    if (username === 'admin' && password === 'admin123') {
      userRole = 'admin'
    } else if (username === 'user' && password === 'user123') {
      userRole = 'user'
    } else {
      throw new Error('Invalid credentials')
    }

    const userData = {
      username,
      role: userRole,
      token: `mock-jwt-token-${Date.now()}`
    }

    setUser(userData)
    localStorage.setItem('auth', JSON.stringify(userData))
    return userData
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth')
  }

  const value = {
    user,
    login,
    logout,
    loading,
    isAdmin: user?.role === 'admin',
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}