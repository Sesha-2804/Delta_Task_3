import React from "react";
import { useContext } from "react";

import Leftbar from "../../components/leftbar/Leftbar";
import Main from "../../components/main/Main";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/authContext";
import './home.css'




export default function Home(){
    
    
    const {user}=useContext(AuthContext)
    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                <Leftbar id={user._id} profile={false}/>
                <Main/>
                
            </div>
        </>
    )
}