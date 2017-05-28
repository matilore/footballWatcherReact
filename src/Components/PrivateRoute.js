import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuth } from '../utils'

export default ({ component, ...rest }) =>(
    <Route {...rest} render={props => (
      isAuth() ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: '/signup',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
