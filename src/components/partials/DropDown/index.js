import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

export default class DropDown extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState((prevState) => {
            return {
              isOpen: !prevState.isOpen
            };
        })
    }

    render() {
        const { changeUser, currentUser, otherUsers } = this.props
        const { isOpen } = this.state;

        return (
            <div className='dropdown'>
                <a onClick={this.toggleMenu}>{currentUser.email}</a>
                <ul className={isOpen ? 'open' : 'closed'}>
                    {otherUsers.map((user, index) => {
                        const {id, email} = user;
                        return (
                            <li key={index}>
                                <a onClick={() => changeUser(id)}>{email}</a>
                            </li>
                        )
                    })}
                    <li><Link to="/settings">Settings</Link></li>
                    <li><a href="#0">Sign out</a></li>
                </ul>
            </div>
        )
    }
}

DropDown.propTypes = {
    changeUser: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
        email: PropTypes.string.isRequired,
        isAdmin: PropTypes.bool.isRequired
    }).isRequired,
    otherUsers: PropTypes.arrayOf(PropTypes.shape({
        email: PropTypes.string.isRequired,
        isAdmin: PropTypes.bool.isRequired
    }).isRequired)
}
