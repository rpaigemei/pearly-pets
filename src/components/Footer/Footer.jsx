import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import petfinderLogo from "../../images/petfinderLogo.png"
import './Footer.css';

function Footer() {
    return (
        <div className="footer-body">
            <div className="footer-upper">
                <div className="icons">
                    <Link to="https://github.com/rpaigemei/pearly-pets">
                        <FaGithub className="icon"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/paige-reeves-91424b264/">
                        <FaLinkedin className="icon"/>
                    </Link>
                    <Link to="https://www.instagram.com/paigemei.r/">
                        <FaInstagram className="icon"/>
                    </Link>
                </div>
                <div className="name">
                    Pearly Pets
                </div>
                <div className="credit">
                    <Link to="https://www.petfinder.com/">
                        <img src={petfinderLogo} alt="pearly pets logo" className="petfinderLogo"/>
                    </Link>
                </div>
            </div>
            <div className="navigation">
                <div className="list">
                        <div className="item">
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to='/pets'>
                                Adopt!
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to='/resources'>
                                Resources
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer;