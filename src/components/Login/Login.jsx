/* Credit to https://github.com/jismonthomas/petfinder-react */
import React from "react";
//import ReactDOM from 'react-dom';

import { Fragment, /*useRef, useState*/ } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { authenticateUser, closeLogin, logout } from "../../auth/auth";

import './Login.css';

//const portalElement = document.getElementById('overlays');

const Login = () => {
    /*
    const [register, setRegister] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordValidity, setPasswordValidity] = useState(false);

    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.user.userLoggedIn);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const changeAuthMode = () => {
        setRegister(register => !register);
    };

    const passwordHandler = (e) => {
        setPassword1(e.target.value);
    }

    const confirmPasswordHandler = (e) => {
        setPassword2(e.target.value);

        if (password1 === e.target.value) {
            setPasswordValidity(true);
        }
        else {
            setPasswordValidity(false);
        }
    }

    const closeLoginHandler = () => {
        dispatch(closeLogin());
    }

    const logoutHandler = () => {
        dispatch(logout());
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        dispatch(authenticateUser(enteredEmail, enteredPassword, register));
    }
    */

    return (
        <Fragment>
            <div className="login">
                <h1>
                   Login 
                </h1>
                <h2>
                    This is the login popup. Users will be able to enter in their email and password to login. They will also be able to switch to signup.
                </h2>
            </div>
        </Fragment>
    )
}
    

export default Login;