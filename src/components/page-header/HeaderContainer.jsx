import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from "../../redux/auth-reducer";


//внутренний контейнер
class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props} />
    )
  }
}


//внешний контейнер
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
};

export default connect(mapStateToProps, { logout })(HeaderContainer);