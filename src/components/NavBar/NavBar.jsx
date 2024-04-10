import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Fragment } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { FaBars, FaTimes, FaUserCircle, FaHeart, FaSignOutAlt} from "react-icons/fa";

import pearlyPetsLogo from "../../images/pearlyPetsLogo.png";
import './NavBar.css';

function NavBar() {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const [loggedIn, setIsLoggedIn] = useState(false);

    function toggleSideMenu() {
        setSideMenuOpen(!sideMenuOpen);
    }

    const [logoutDropdownOpen, setLogoutDropdownOpen] = useState(false);

    function toggleLogoutDropdown() {
        setLogoutDropdownOpen(!logoutDropdownOpen);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(false);
            }
        })
    })

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
                toggleLogoutDropdown();
            })
            .catch ((error) => {
                console.log("an error has occurred signing out");
            })
    }

    return (
        <Fragment>
            <nav className="navBar">
                <NavLink to='/'>
                    <img src={pearlyPetsLogo} alt="pearly pets logo" className="logo" />
                </NavLink>
                <h1>
                    <Link to='/'>
                        Pearly Pets
                    </Link>
                </h1>
                <div className="menu">
                    {loggedIn ?
                        <div>
                            <button className="loggedInPrompt" onClick={toggleLogoutDropdown}>
                                <FaUserCircle className="userIcon"/>
                                Hello!
                            </button>
                            {logoutDropdownOpen ? 
                                <ul className="dropdown">
                                    <li className="dropdownItem">
                                        <NavLink to="/favorites" className="favorites">
                                            <FaHeart className="dropdownIcon" />
                                            Favorites
                                        </NavLink>
                                    </li>
                                    <li className="dropdownItem">
                                        <button className="logoutDropdownButton" onClick={handleLogout}>
                                            <FaSignOutAlt className="dropdownIcon" />
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                                :
                                null
                            }
                        </div> 
                        :
                        <NavLink to="/login" className="loginPrompt">
                            <FaUserCircle className="userIcon"/>
                            Login
                        </NavLink>
                    }
                    <div onClick={toggleSideMenu}>
                        <FaBars className="openMenuIcon"/>
                    </div>
                </div>
            </nav>
            <div className={`sideBarMenu ${sideMenuOpen ? 'sideBarMenuActive' : null}`}>
                    <div className="closeMenuIconContainer" onClick={toggleSideMenu}>
                        <FaTimes className="closeMenuIcon"/>
                    </div>
                    <ul>
                        <li className="item">
                            <NavLink to='/' onClick={toggleSideMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="item" onClick={toggleSideMenu}>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li className="item" onClick={toggleSideMenu}>
                            <NavLink to='/pets'>
                                Adopt!
                            </NavLink>
                        </li>
                        <li className="item" onClick={toggleSideMenu}>
                            <NavLink to='/resources'>
                                Resources
                            </NavLink>
                        </li>
                        <li className="item" onClick={toggleSideMenu}>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={`${sideMenuOpen ? 'overlay' : null}`} onClick={toggleSideMenu}></div>
        </Fragment>
    )
}

export default NavBar;