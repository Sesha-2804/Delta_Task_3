import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import './followersbar.css';
import { useState,useEffect } from "react";
import axios from "axios";

export default function Followersbar(props){
    const user=props.id
    const {user:userLoggedIn}= useContext(AuthContext)
    // const [user,setUser]=useState({})
    
    // useEffect(()=>{
    //     const fetchUser=async()=>{
    //         const userfetched= await axios.get(`../user/${props.id}`) || await axios.get(`user/${props.id}`)
    //         setUser(userfetched.data);
    //         console.log("user fetched in followers bar")
    //         console.log(user);
    //     }
    //     fetchUser()
    // },[props.id])
    
   return( <div className="infobar">
        <div className="nameandbatch">
            <span className="innfobarName">{user.username}</span>
            <div>
                <i class="fa-solid fa-graduation-cap"></i>
                <span className="infobarBatch">{user.passout}</span>
            </div>
            
        </div>
        <div className="btnContainer">
            <button className="writeRem">Write Rem</button>
            <button className="unfollowButton">UnFollow</button>
            <button className="followButton">Follow</button>
            
            
        </div>
        
    </div>
   )
}
