import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { changeUser } from 'store/actions'
import Header from './Header'
 
// State
const mapStateToProps = (state) => {
  return {
    currentUserId: state.userReducers.currentUserId,
    users: state.userReducers.users,
  }
}
 
// Actions
const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (user) => {
      dispatch(changeUser(user))
    }
  }
}

// withRouter allow us to access the history and handle the 'active' route
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))
