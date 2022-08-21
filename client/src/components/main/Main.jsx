import React from "react";
import './main.css';
import { Link } from "react-router-dom";

export default function Main(){
    return(
        <div className="mainContainer">
            <div className="mainWrapper">
                <div className="mainBox">
                    <button className="writemem">Write memories</button>
                
                    <button className="readmem">
                        <Link to='/membook' className="link">Your SlamBook</Link></button>
                </div>
            </div>
        </div>
    )
    
}