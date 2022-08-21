import React from "react";
import './login.css';
import { useRef } from "react";
import { loginapiCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";


export default function Login() {
    const webmail = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    const handleClick = (event) => {
        event.preventDefault();
        loginapiCall({ webmail: webmail.current.value, password: password.current.value }, dispatch)
    }
    return (
        <div className="loginPage">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <img src="assets/memories.jpg" alt="no" className="loginImg" />
                </div>
                <div className="loginRight" >
                    <form className="loginBox" onSubmit={handleClick}>
                        <h1 className="loginHead">DigiSlamBook</h1>
                        <input placeholder='Webmail' type='email' className="loginInput" required ref={webmail} />
                        <input placeholder='Password' type='password' className="loginInput" required ref={password} />
                        <button className="loginButton" type="submit">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginSignUpbutton">
                            <Link className="link" to="/register">
                                Register
                            </Link></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
