import React, { useRef } from 'react';
import emailjs from"@emailjs/browser";

import './ContactForm.css';
import '../../pages/pages.css';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'pearly-pets',
                'pearly-pets-form',
                form.current,
                { publicKey: 'z2UZOrK_bRfsJmL4Y'}
            )
            .then(
                () => {
                    console.log('success!');
                },
                (error) => {
                    console.log('failed...', error.text);
                },
            );
    };

    return (
        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="contact" name="user_name" className=""userInfo placeholder="Enter your full name..."/>
                <label>Email</label>
                <input type="contact" name="user_email" placeholder="Enter your email address..."/>
                <label>Message</label>
                <textarea name="message" placeholder="Type your message here..."/>
                <div className="submitContainer">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}

export default ContactForm;