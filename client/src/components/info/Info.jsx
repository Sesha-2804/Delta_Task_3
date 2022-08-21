import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import './info.css';
import { useState,useEffect } from "react";
import axios from "axios";

export default function Info(props){
    // const [user,setUser]=useState({})
    const user=props.id
    // useEffect(()=>{
    //     const fetchUser=async()=>{
    //         const userfetched= await axios.get(`../user/${props.id}`) || await axios.get(`user/${props.id}`)
    //         setUser(userfetched.data);
    //         console.log("user fetched in followers bar")
    //         console.log(user);
    //     }
    //     fetchUser()
    // },[props.id])
    return(
        <div className="infoBox">
            <div className="infoHead">
                <h1>Info</h1>
            </div>
            <div className="infoWrapper">
                {
                    user.email &&(<div className="infoItem">
                    <span className="InfoItemKey">Email:</span>
                    <span className="InfoItemValue">{user.email}</span>
                </div>)}
                {   user.follower &&(<div className="infoItem">
                    <span className="InfoItemKey">Followers : </span>
                    <span className="InfoItemValue">{user.followers}</span>
                </div>)}
                {   user.followings &&(<div className="infoItem">
                    <span className="InfoItemKey">Following : </span>
                    <span className="InfoItemValue">{user.followings.length}</span>
                </div>)}

                {   user.dept &&(<div className="infoItem">
                    <span className="InfoItemKey">Dept : </span>
                    <span className="InfoItemValue">{user.dept}</span>
                </div>)}
                {   user.hostel &&(<div className="infoItem">
                    <span className="InfoItemKey">Hostel : </span>
                    <span className="InfoItemValue">{user.hostel}</span>
                </div>)}
                {   user.passout &&(<div className="infoItem">
                    <span className="InfoItemKey">Batch : </span>
                    <span className="InfoItemValue">{user.passout}</span>
                </div>)}
                {   user.mobno &&(<div className="infoItem">
                    <span className="InfoItemKey">Phone : </span>
                    <span className="InfoItemValue">{user.mobno}</span>
                </div>)}
                
                
            </div>
            
            

            
        </div>
    )
}