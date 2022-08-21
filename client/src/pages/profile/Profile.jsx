import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Followersbar from "../../components/followersbar/Followersbar";
import Info from "../../components/info/Info";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Writemem from "../../components/writemem/Writemem";
import { AuthContext } from "../../context/authContext";
import './profile.css';


export default function Profile(props) {
    const [user,setUser]=useState({})
    const userid=useParams().userId
    useEffect(()=>{
        const fetchUser=async()=>{
            const userfetched= await axios.get(`../user/${userid}`)
            setUser(userfetched.data);
        }
        fetchUser()
    },[userid])
    const PF =  "http://localhost:8000/images"
    
    return (
        
        <>
        
            <Topbar />
            <div className="profileContainer">
                <div className="profileTop">
                    <img src={PF+"/cover/default.jpg"} alt="" className="profileCover" />
                    <img src={PF+"/profilepic.jpg"} alt="" className="profileImg" />
                </div>

                <div className="profileBottom">

                    <div className="infoContainer">
                        <Info id={user}/>
                    </div>

                    <div className="profileBottomRight">
                        <div className="profileBottomRightUp">
                            <Followersbar id={user} />
                        </div>
                        <div className="profileBottomRightDown">


                            <div className="DescContainer">
                                <div className="descWrapper">
                                    <h1>About Me</h1>
                                    <p>{user.desc}</p>
                                </div>
                                <div>
                                    <Writemem/>
                                </div>
                            </div>
                            <div className="rightbar">
                                <Leftbar id={userid} profile={true}/>
                            </div>
                            
                        </div>
                        
                    </div>

                </div>


            </div>


        </>
    )
}