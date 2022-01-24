import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import InputPage from '../pages/InputPage/InputPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import LoanPage from '../pages/LoanPage/LoanPage'

export const useRoutes = (isLogin) => {

    if (isLogin) {
      return (
        <Switch>
          <Route path="/" exact component={InputPage} />
          <Route path="/loan" component={LoanPage} />
          <Redirect to="/" />
        </Switch>
      )
    }
  
    return (
      <Switch>
        <Route path="/login" exact component={AuthPage} />
        <Redirect to="/login" />
      </Switch>
    )

 
}
