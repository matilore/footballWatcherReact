import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import store , { history } from './store'

import PrivateRoute from './Components/PrivateRoute'
import Signup from './Components/Signup'
import Login from './Components/Login'
import TeamSelector from './Components/TeamSelector'
import Dashboard from './Components/Dashboard'




const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/team" component={TeamSelector}/>
        <PrivateRoute exact path="/" component={Dashboard}/>
      </div>
    </Router>
  </Provider>

)

export default Routes
