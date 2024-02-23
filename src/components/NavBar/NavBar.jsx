import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from "../../store/ui-slice";

import './NavBar.less';

function NavBar() {
    const userLoggedIn = useSelector(state => state.user.userLoggedIn);
    const dispatch = useDispatch();

    const toggleLogin = () => {
        dispatch(uiActions.toggleLogin());
    }

    return (
        <Fragment>
            <nav>
                <h1>
                    <Link to='/'>
                        Pearly Pets
                    </Link>
                </h1>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={toggleLogin}>
                            {userLoggedIn ? 'Logout' : 'Login'}
                        </button>
                    </li>
                    <li>
                        <NavLink to='/pets'>
                            Adopt!
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resources'>
                            Resources
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar;