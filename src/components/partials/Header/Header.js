import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import DropDown from 'components/partials/DropDown';
import logo from 'logo.svg';
import './styles.css';

export default class Header extends Component {

    render() {
        const {changeUser, currentUserId, users} = this.props;
        const currentUser = users.find(u => u.id === currentUserId);
        const otherUsers = users.filter(u => u.id !== currentUserId);

        return (
            <div className='header'>
                <img src={logo} className="header__logo" alt="logo" />
                <ul className='header__menu'>
                  <li><NavLink exact activeClassName="selected" to="/">Classes</NavLink></li>
                  {currentUser.isAdmin && <li><NavLink exact activeClassName="selected" to="/lessons">Lessons</NavLink></li>}
                  {currentUser.isAdmin && <li><NavLink exact activeClassName="selected" to="/libraries">Libraries</NavLink></li>}
                  {!currentUser.isAdmin && <li><NavLink exact activeClassName="selected" to="/assignments">Assignments</NavLink></li>}
                </ul>
                <div className='header__dropdown'>
                  <DropDown
                  currentUser={currentUser}
                  changeUser={changeUser}
                  otherUsers={otherUsers}
                  />
                </div>
            </div>
        )

    }

}

Header.propTypes = {
    changeUser: PropTypes.func.isRequired,
    currentUserId: PropTypes.number.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        email: PropTypes.string.isRequired,
        isAdmin: PropTypes.bool.isRequired
    }).isRequired)
}
