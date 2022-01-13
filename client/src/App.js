import React from 'react'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import {useRoutes} from './hooks/useRoutes'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'

import Navbar from './components/Navbar/Navbar'

function App() {
const {login, logout, token, userId, isReady} = useAuth()
const isLogin = !!token
const routes = useRoutes(isLogin)

  return (

    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin}}>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {routes}
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  )
}

export default App
