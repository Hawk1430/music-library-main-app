import React from 'react'
import { useAuth } from '../context/AuthContext'
import { LogOut, Music, User, Shield } from 'lucide-react'

const Layout = ({ children }) => {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Music className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Music Library</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                {user?.role === 'admin' ? (
                  <Shield className="h-4 w-4 text-green-600" />
                ) : (
                  <User className="h-4 w-4 text-blue-600" />
                )}
                <span className="font-medium">
                  {user?.username} ({user?.role})
                </span>
              </div>
              
              <button
                onClick={logout}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}

export default Layout