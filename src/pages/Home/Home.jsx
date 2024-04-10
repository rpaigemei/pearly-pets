import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaPhoneAlt, FaEnvelope, FaMapPin } from "react-icons/fa";

import './Home.css';
import '../../pages/pages.css'

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div> 

            <div className="body">
                <div className="pets">
                    <div className="text">
                        <Link to='/pets'>
                            Start Adopting!
                        </Link>
                    </div>
                </div>
                <div className="contactBar">
                    <Link to='/contact'>
                        CONTACT US
                    </Link>
                    <div className="contactBarInfo">
                        <div className="contactBarItem">
                            <FaPhoneAlt className="contactBarIcon"/>
                            727-219-6773
                        </div>
                        <div className="contactBarItem">
                            <FaEnvelope className="contactBarIcon"/>
                            pearlypets.uf@gmail.com
                        </div>
                        <div className="contactBarItem">
                            <FaMapPin className="contactBarIcon"/>
                            Gainesville, FL
                        </div>
                    </div>
                    
                </div>
                
                <div className="lowerHome">
                    <div className="about">
                        <div className="aboutInfo">
                            <h1>
                                About Pearly Pets
                            </h1>
                            <p>
                                Pearly Pets began as a project for the Women in Computer Science & Engineering (WiCSE) Shadowing Program at the University of Florida. Click below to read more about the Pearly Pets!
                            </p>
                            <button className="moreButton">
                                <Link to='/about'>
                                    Read More
                                    <FaExternalLinkAlt className="icon"/>
                                </Link>
                            </button>
                        </div>
                    </div> 
                    <div className="resources">
                        <div className="resourcesInfo">
                            <h1>
                                Resources
                            </h1>
                            <p>
                                It is no secret that caring for senior pets can have its challenges, but they deserve to be loved for the rest of their lives. Click below to find resources to help you care for your new senior pet!
                            </p>
                            <button className="moreButton">
                                <Link to='/resources'>
                                    Find Resources
                                    <FaExternalLinkAlt className="icon"/>
                                </Link>
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div className="footer">
                <Footer /> 
            </div>
        </div>
    )
}

export default Home;