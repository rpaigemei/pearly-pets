import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapPin } from "react-icons/fa";

import './Contact.css';
import '../../pages/pages.css'

import NavBar from "../../components/NavBar/NavBar";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

function Contact() {
    return (
        <div>
            <div>
                <NavBar />
            </div> 

            <div className="body">
                <div className="title">
                    <h1>
                        Contact Us
                    </h1>
                </div>
                <div className="introduction">
                    <p>
                        Any questions about specific pets or policies at a shelter, we ask that you contact them directly. Any questions about Petfinder, you can contact them <a href="https://www.petfinder.com/contact/">here</a>.
                    </p>
                </div>
                <div className="contactContainer">
                    <div className="contactForm">
                        <h3>
                            Send us a message
                        </h3>
                        <ContactForm />
                    </div>
                    <div className="contactInfo">
                        <h4>
                            You can also find us here!
                        </h4>
                        <div className="contactInfoItem">
                            <FaPhoneAlt className="icon"/>
                            727-219-6773
                        </div>
                        <div className="contactInfoItem">
                            <FaEnvelope className="icon"/>
                            pearlypets.uf@gmail.com
                        </div>
                        <div className="contactInfoItem">
                            <FaMapPin className="icon"/>
                            Gainesville, FL
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

export default Contact;