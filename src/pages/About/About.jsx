import React from "react";
import './About.css';
import '../../pages/pages.css'
import NavBar from "../../components/NavBar/NavBar";

const About = () => (
    <div>
        <NavBar />
        <div className="body">
            <h1 className="h1">
                About
            </h1> 
            <div className="normal">
                This is the about page. It will feature a synopsis about the project and information about the website.
            </div>   
        </div>
    </div>
)

export default About;