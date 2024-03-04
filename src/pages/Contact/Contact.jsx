import React from "react";
import './Contact.css';
import '../../pages/pages.css'
import NavBar from "../../components/NavBar/NavBar";

const Contact = () => (
    <div>
        <NavBar />
        <div className="body">
            <h1 className="h1">
                Contact
            </h1> 
            <div className="normal">
                This is the contact page. It will display the contact information for the site and for petfinder. Also, it will feature a contact form to submit questions to me.
            </div>   
        </div>
    </div>
)

export default Contact;