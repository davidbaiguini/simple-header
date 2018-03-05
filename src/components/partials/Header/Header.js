import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import DropDown from 'components/partials/DropDown';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        const {changeUser, currentUserId, users} = this.props;
        const currentUser = users.find(u => u.id === currentUserId);
        const otherUsers = users.filter(u => u.id !== currentUserId);
        return (
            <div className='header'>
                <ul>
                  <li><Link to="/">Classes</Link></li>
                  {currentUser.isAdmin && <li><Link to="/lessons">Lessons</Link></li>}
                  {currentUser.isAdmin && <li><Link to="/libraries">Libraries</Link></li>}
                  {!currentUser.isAdmin && <li><Link to="/assignments">Assignments</Link></li>}
                </ul>
                <DropDown 
                    currentUser={currentUser} 
                    changeUser={changeUser} 
                    otherUsers={otherUsers}
                />
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
