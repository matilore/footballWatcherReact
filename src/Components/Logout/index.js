import React from 'react'

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Logout extends React.Component {

  makeLogout(){
    if (confirm('Are you sure you want to logout!?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('user')
      this.props.logout();
    }
  }

  render () {
    return (
      <span onClick={this.makeLogout.bind(this)} className="fa fa-power-off fa-3x" aria-hidden="true" alt="logout"></span>
    )
  }
}




function mapStateToProps(state){
  return {}
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(Logout);
