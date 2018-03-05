import { connect } from 'react-redux'
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
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)