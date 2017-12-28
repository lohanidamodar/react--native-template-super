import React, {Component} from 'react';

import {MainStack, LoginStack} from './navigators'

import {connect} from 'react-redux';

class Main extends Component {

  render() {
    if (this.props.isLoggedIn) {
      return (<MainStack />);
    } else {
      return (<LoginStack />);
    }

  } // render
} // Main

const mapStateToProps = (state) => ({
    isLoggedIn: state.authState.isLoggedIn
})

export default connect(mapStateToProps)(Main);