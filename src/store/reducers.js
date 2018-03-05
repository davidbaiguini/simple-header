import {
    CHANGE_USER
} from './actions'
 
 
const initialState = {
    currentUserId: 1,
    users: [{
        id: 1,
        email: 'teacher@school.org',
        isAdmin: true        
    }, {
        id: 2,
        email: 'student@school.org',
        isAdmin: false        
    }]
};

// Reducers
export function userReducers(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return Object.assign({}, state, {
        currentUserId: action.payload.id
      })
    default:
      return state
  }
}