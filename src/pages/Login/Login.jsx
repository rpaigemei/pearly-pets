import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

import { FaEnvelope, FaLock } from "react-icons/fa";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import './Login.css';

function Login () {
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

        if (email.length == 0) {
            setIsValid(false);
            error.email = "Email is required";
        }

        if (password.length == 0) {
            setIsValid(false);
            error.password = "Password is required";
        }

        return error;
    }

    const finishSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
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
                            Welcome back!
                        </h1>
                        <p>
                            Login to your account.
                        </p>
                        <form ref={form}>
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
                                    Sign In
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
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
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

export default Login;