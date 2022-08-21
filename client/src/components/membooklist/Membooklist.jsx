import React from "react";
import './membooklist.css';
const PF = "http://localhost:3000/assets"
export default function Membooklist(){
    return(
        <div className="leftbarContainer">
            <div className="leftbarWrapper">
                <div className="leftbarHead">
                    <h1>Chapters</h1>
                </div>
                <div className="followingsList">
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                    <div className="followingIndiv">
                        <img src={PF+"/profilepic.jpg"} alt="" className="indivPic"/>
                        <span className="followingIndivName">Adarsh</span>
                    </div>
                </div>
            </div>
        
        </div>
    )
    
}
    