import React, { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/authContext";
import './editprofile.css'
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";

export default function Editprofile() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const repassword = useRef()
    const department = useRef()
    const hostel = useRef()
    const graduation = useRef()
    const about = useRef()
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(AuthContext);
    const headers = {
        'Content-Type': 'multipart/form-data'}

    const handleSubmit = async (event) => {
        console.log("clicked");
        event.preventDefault();
        console.log(user);
        dispatch({ type: "UPDATE_START" });

        const updatedUser = {
            userId: user._id,
            username: username.current.value,
            email: email.current.value,
            dept: department.current.value,
            hostel: hostel.current.value,
            passout: graduation.current.value,
            desc: about.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name
            data.append("file", file);
            data.append("name", fileName);
            updatedUser.profilePicture = fileName;
            try {
                console.log("gonna use axios");
                await axios.post("/upload",data,headers)
            } catch (err) {
                console.log("ERROR!!!!!!!!!");
                console.log(err);
            }
        }
        try {
            console.log(updatedUser);
            const res = await axios.put("user/" + user._id, updatedUser);
            console.log(res);
            setSuccess(true);
            await dispatch({ type: "UPDATE_SUCCESS", payload: res.data });

        } catch (err) {
            console.log(err);
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }

    return (
        //username,email,webmail,password,profilePicture,coverPicture,followers,followings
        //desc,dept,hostel,passout,mobno
        <>
            <Topbar />
            <div className="profileEditContainer">
                <form className="profileEditWrapper" encType="multipart/form-data" onSubmit={handleSubmit}>

                    <div className="leftPart">
                        <label htmlFor="username" className="usernameLabel label">
                            <h3>Username</h3>
                        </label>
                        <input type="text" defaultValue={user.username} onChange={() => {
                            setSuccess(false)
                        }} id="username" ref={username} className="usernameInp inpText" required />
                        <label htmlFor="email" className="emailLabel label">
                            <h3>Email</h3>
                        </label>
                        <input type="email" defaultValue={user.email} id="email" ref={email} onChange={() => {
                            setSuccess(false)
                        }} className="emailInp inpText" required />
                        <label htmlFor="password" className="passwordLabel label">
                            <h3>New Password</h3>
                        </label>
                        <input type="password" id="password" ref={password} onChange={() => {
                            setSuccess(false)
                        }} className="passwordInp inpText" />
                        <label htmlFor="repassword" className="passwordLabel label">
                            <h3>Re-enter New Password</h3>
                        </label>
                        <input type="password" id="repassword" ref={repassword} onChange={() => {
                            setSuccess(false)
                        }} className="emailInp inpText" />


                    </div>
                    <div className="rightPart">
                        <label htmlFor="dept" className="deptLabel label">
                            <h3>Department</h3>
                        </label>
                        <input type="text" defaultValue={user.dept} onChange={() => {
                            setSuccess(false)
                        }} id="dept" ref={department} className="deptInp inpText" />
                        <label htmlFor="hostel" className="hostelLabel label">
                            <h3>Hostel</h3>
                        </label>
                        <input type="text" defaultValue={user.hostel} onChange={() => {
                            setSuccess(false)
                        }} id="hostel" ref={hostel} className="hostelInp inpText" />
                        <label htmlFor="passoutyear" className="passoutLabel label">
                            <h3>Graduation Year</h3>
                        </label>
                        <input type="text" id="passoutyear" onChange={() => {
                            setSuccess(false)
                        }} defaultValue={user.passout} ref={graduation} className="passoutInp inpText" />
                        <label htmlFor="profilepic" className="passoutLabel label">
                            <h3>Profile Pic</h3>
                        </label>

                        <input type="file" accept=".png,.jpeg,.jpg" id="profilepic" onChange={(e) => {
                            setSuccess(false)
                            setFile(e.target.files[0])
                        }} className="profilePicInp" />





                    </div>
                    <div className="rightmost">
                        <label htmlFor="about" className="aboutLabel label">
                            <h3>About You</h3>
                        </label>
                        <textarea type="text" id="about" onChange={() => {
                            setSuccess(false)
                        }} defaultValue={user.desc} ref={about} className="aboutInp"></textarea>
                        <center>
                            <button className="submitbtn" type="submit">Save</button>
                        </center>
                        {success && <h3 className="updhead">Account has been updated successfully</h3>}



                    </div>

                </form>
            </div>

        </>
    )
}