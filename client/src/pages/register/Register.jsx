import React from "react";
import { useRef } from "react";
import './register.css';
import axios from "axios";
import { useNavigate,Link} from "react-router-dom";

export default function Register() {
    const webmail = useRef();
    const password = useRef();
    const repassword = useRef();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault()//prevents refreshing on clicking submit btn
        if (password.current.value !== repassword.current.value) {
            repassword.current.setCustomValidity("Password's don't match")
        }
        else {
            try {
                await axios.post("/auth/register", { webmail: webmail.current.value, password: password.current.value })
                navigate('/login')
            } catch (err) {
                console.log(err);
            }
        }

    }

    return (
        <div className="registerPage">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <img src="assets/memories.jpg" alt="no" className="registerImg" />
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleSubmit}>
                        <h1 className="registerHead">DigiSlamBook</h1>
                        <input placeholder='Webmail' type='email' className="registerInput" ref={webmail} required />
                        <input placeholder='Password' type='password' className="registerInput" ref={password} required />
                        <input placeholder='Re-enter your password' type='password' className="registerInput" ref={repassword} required />
                        <button className="registerButton" type="submit">Register</button>

                        <button className="loginbutton">
                            <Link className="link" to="/login">
                                Login
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
