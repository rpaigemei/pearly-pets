import React, { useEffect, useRef, useState } from 'react';
import emailjs from"@emailjs/browser";

import './ContactForm.css';
import '../../pages/pages.css';

function ContactForm() {
    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isValid && submitting) {
            finishSubmit();
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors(validateInputs());
        setSubmitting(true);
    }

    const validateInputs = () => {
        let error = {};
        setIsValid(true);
        var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // eslint-disable-next-line
        if (name.length == 0) {
            setIsValid(false);
            error.name = "Name is required";
        }

        // eslint-disable-next-line
        if (email.length == 0) {
            setIsValid(false);
            error.email = "Email is required";
        }
        
        if (email.length > 0 && !email.match(validEmailRegex)) {
            setIsValid(false);
            error.email = "Invalid email"
        }

        // eslint-disable-next-line
        if (message.length == 0) {
            setIsValid(false);
            error.message = "Message is required";
        }

        return error;
    }

    const finishSubmit = () => {
        emailjs
            .sendForm(
                'pearly-pets',
                'pearly-pets-form',
                form.current,
                { publicKey: 'z2UZOrK_bRfsJmL4Y'}
            )
            .then(
                () => {
                    setSent(true);
                    
                    setTimeout(() => {
                        setSent(false);
                    }, 3000);

                    resetStates();
                },
                (error) => {
                    console.log('failed...', error.text);
                },
            );
    }

    const resetStates = () => {
        form.current.reset();

        setName("");
        setEmail("");
        setMessage("");
        
        setErrors({});
        setIsValid(false);
        setSubmitting(false);
    }

    
    return (
        <div className="form">
            <form ref={form} onSubmit={handleSubmit}>
                <div className='inputContainer'>
                    <label>Name</label>
                    <input type="contact" name="user_name" onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." autoComplete="off"/>
                    {errors.name ? (
                        <div className="errorMessage">
                            {errors.name}
                        </div>
                    ) : null}
                </div>
                <div className='inputContainer'>
                    <label>Email</label>
                    <input type="contact" name="user_email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address..." autoComplete="off"/>
                    {errors.email ? (
                        <div className="errorMessage">
                            {errors.email}
                        </div>
                    ) : null}
                </div>
                <div className='inputContainer'>
                    <label>Message</label>
                    <textarea name="message" onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here..." autoComplete="off"/>
                    {errors.message ? (
                        <div className="errorMessage">
                            {errors.message}
                        </div>
                    ) : null}
                </div>
                <div className="submitContainer">
                    <input type="submit" value="Send" />
                </div>
            </form>
            <div>
                {sent ? (
                    <div className="successMessage">
                        Message was sent
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default ContactForm;