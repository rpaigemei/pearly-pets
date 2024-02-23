import React from "react";
import './NavBar.less';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        about
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        contact
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        login
                    </Link>
                </li>
                <li>
                    <Link to="/pets">
                        pets
                    </Link>
                </li>
                <li>
                    <Link to="/resources">
                        resources
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;