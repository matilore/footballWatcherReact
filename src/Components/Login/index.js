import React from 'react'
import styled from 'styled-components'
import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

import apiService from '../../utils/apiService'


class Login extends React.Component {


  submit(){

    let user = {
      email: this.email.value,
      password: this.password.value
    }

    apiService.makeLogin(user)
    .then(function (response) {
      if (response.data.token !== undefined) {
        localStorage.setItem('token', response.data.token)
        this.props.history.push('/')
      }
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    return (
      <Wrapper>
        <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              inputRef={ref => {this.email = ref}}
              placeholder="email"
            />
          <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              inputRef={ref => {this.password = ref}}
              placeholder="password"
            />
          <Button ref="Button" onClick={this.submit.bind(this)}>Login</Button>
          </FormGroup>
          <Button><a href="/signup">Go to the Signup</a></Button>
      </Wrapper>
    )

  }
}

const Wrapper = styled.div`
  width: 60%;
  margin: 10% auto;
`
const Button = styled.button`
  width: 100%;
`

export default Login;
