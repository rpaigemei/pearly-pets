import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

import { FaEnvelope, FaLock } from "react-icons/fa";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import './Login.css';

function Signup () {
    const form = useRef();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        if (isValid && submitting) {
            finishSubmit();
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateInputs());
        setSubmitting(true);
    }

    const validateInputs = () => {
        let error = {};
        setIsValid(true);
        var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
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
        if (password.length == 0) {
            setIsValid(false);
            error.password = "Password is required";
        }

        if (password.length > 0 && (password.length < 8 || password.length > 15)) {
            setIsValid(false);
            error.password = "Password must be between 8-15 characters"
        }

        return error;
    }

    const finishSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

                resetStates();
            })
    }

    const resetStates = () => {
        form.current.reset();

        setEmail("");
        setPassword("");
        setErrors({});
        setIsValid(false);
        setSubmitting(false);
    }
    
    return (
        <div>
            <div>
                <NavBar />
            </div> 

            <div className="body">
                <div className="background">
                    <div className="formContainer">
                        <h1>
                            Sign up for Pearly Pets
                        </h1>
                        <p>
                            Create a free account.
                        </p>
                        <form>
                            <div className="formInput">
                                <FaEnvelope className="loginIcon"/>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="off"
                                    placeholder="Email"
                                />
                                {errors.email ? (
                                    <div className="requiredMessage">
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>
                            <div className="formInput">
                                <FaLock className="loginIcon"/>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="off"
                                    placeholder="Password"
                                />
                                {errors.password ? (
                                    <div className="requiredMessage">
                                        {errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="buttonContainer">
                                <button type="submit" onClick={handleSubmit}>
                                    Sign Up
                                </button>
                            </div>
                            {!isValid ? (
                                <div className="invalidMessage">
                                    Invalid username and/or password <br></br>
                                    Please try again
                                </div>
                            ): null}
                        </form>
                        <p>
                            Already have an account? {' '}
                            <NavLink to="/login">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <Footer /> 
            </div>
        </div>
    )
}  

export default Signup;