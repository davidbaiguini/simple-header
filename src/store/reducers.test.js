import { userReducers } from './reducers';
import { CHANGE_USER } from './actions';

const expectedInitialState = {
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

let state;

describe('reducers', () => {
  it('should initialize the right initial state', () => {
    state = userReducers(undefined, {});
    expect(state).toEqual(expectedInitialState);
    expect(state.currentUserId).toEqual(1);
  })
  it('should update the current user to id 2', () => {
    const newState = userReducers(state, {
      type: CHANGE_USER,
      payload: { id: 2 }
    });
    expect(newState.currentUserId).toEqual(2);
  })
})
