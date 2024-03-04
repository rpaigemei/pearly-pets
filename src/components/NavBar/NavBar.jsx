import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from "../../store/ui-slice";

import sophie from "../../images/sophie.png";
import './NavBar.css';

function NavBar() {
    const userLoggedIn = useSelector(state => state.user.userLoggedIn);
    const dispatch = useDispatch();

    const toggleLogin = () => {
        dispatch(uiActions.toggleLogin());
    }

    return (
        <Fragment>
            <nav className="navBar">
                <NavLink to='/'>
                    <img src={sophie} alt="sophie" className="logo" />
                </NavLink>
                <h1>
                    <Link to='/'>
                        Pearly Pets
                    </Link>
                </h1>
                <div className="menu">
                    <ul className="list">
                        <li className="item">
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to='/pets'>
                                Adopt!
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to='/resources'>
                                Resources
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                        <li className="item">
                            <button className="button" onClick={toggleLogin}>
                                {userLoggedIn ? 'Logout' : 'Login'}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;