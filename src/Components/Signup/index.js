import React from 'react'
import styled from 'styled-components'

import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

import apiService from '../../utils/apiService'


class Signup extends React.Component {

  constructor(){
    super()
    this.state = {error: ''}
  }


  submit(){

    if (this.email.value === '' || this.password.value === '' || this.r_password.value === '') {
      this.setState({error: 'Plaese, fill all the input fields'})
      return
    }


    let user = {
      email: this.email.value,
      password: this.password.value
    }

    apiService.makeSignup(user)
    .then(function (response) {
      if (response.data.token !== undefined) {
        localStorage.setItem('token', response.data.token)
        this.props.history.push('/team')
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
          <ControlLabel>Password Confirmation</ControlLabel>
            <FormControl
              type="password"
              inputRef={ref => {this.r_password = ref}}
              placeholder="password confirmation"
            />
          <Button ref="button" onClick={this.submit.bind(this)}>Signup</Button>
          </FormGroup>
          <Button><a href="/login">Go to the Login</a></Button>
          <Message>{this.state.error ? this.state.error : ""}</Message>

      </Wrapper>

    )

  }
}

const Wrapper = styled.div`
  width: 60%;
  margin-top: 10%;
  margin-left: auto
  margin-right: auto
`

const Button = styled.button`
  width: 100%;
`
const Message = styled.div`
  color: red;
  text-align: center;
`

export default Signup;
