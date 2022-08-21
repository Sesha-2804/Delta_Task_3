import React from "react";
import './topbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


export default function Topbar(){
    const {user,dispatch}=useContext(AuthContext)
    const handleLogout=async()=>{

        dispatch({type:"LOGOUT"})
    }
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link style={{textDecoration:"none"}} to="/">
                    <span className="logo">DigiSlamBook</span>
                </Link>
                
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <i class="fa-solid fa-magnifying-glass"  ></i>
                    <input placeholder="Search for friends" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="userBox">
                    <i class="fa-solid fa-user"></i>
                    <span className="userProfile">
                        <Link className="link" to={`/profile/${user._id}`}>
                            My Profile
                        </Link>
                    </span>
                </div>
                <button className="logout"><Link className="link" to='/editprofile'>Edit my profile</Link></button>
                <button className="logout" onClick={handleLogout}>Log out</button>
            </div>
        </div>
    ) 
}
