import React from "react";
import { useState,useContext,useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import './leftbar.css';
import { Link } from "react-router-dom";

export default function Leftbar(props) {
    const [followinglist,setFollowinglist]=useState([])
    
    useEffect(()=>{
        const fetchfollowings=async()=>{
            try{
                const followingsList = await axios.get(`../user/followings/${props.id}`)|| await axios.get(`/user/followings/${props.id}`)
                
                setFollowinglist(followingsList.data)
            }catch(err){
                console.log(err);
            }
       
        }
        fetchfollowings()
    },[props.id])

    
    const PF = "http://localhost:3000/assets"
    return (
        <div className="leftbarContainer">
            <div className="leftbarWrapper">
                <div className="leftbarHead">
                    <h1>People You follow</h1>
                </div>
                <div className="followingsList">
                    {followinglist.map((follow) => (
                        <Link to={`/profile/${follow._id}`} className="followingIndiv">
                            <div className="followingIndiv">
                                <img src={PF + "/profilepic.jpg"} alt="" className="indivPic" />
                                <span className="followingIndivName">{follow.username}</span>
                            </div>
                        </Link>
                        

                    )
                    )}
                    
                    
                </div>
            </div>

        </div>
    )

}
