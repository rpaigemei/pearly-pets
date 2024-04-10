import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

import { FaEnvelope, FaLock } from "react-icons/fa";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import './Login.css';

function Signup () {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/login")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
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
                                    placeholder="Email"
                                />
                            </div>
                            <div className="formInput">
                                <FaLock className="loginIcon"/>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <div className="buttonContainer">
                                <button type="submit" onClick={onSubmit}>
                                    Sign Up
                                </button>
                            </div>
                            
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