import React from "react";
import { useState } from "react";
import './writemem.css';

export default function Writemem(){
    const [qn1,setQn1] = useState("");
    const [qn2,setQn2] = useState("");
    const [qn3,setQn3] = useState("");
    const [qn4,setQn4] = useState("");

    const handleSubmit =(event)=>{
        event.preventDefault();
        
    }
   
    return(
        <div className="writeMemBox">
            <h1 className="memBoxHead">Weave a Note</h1>
            <form className="memForm" onSubmit={handleSubmit}>
                <label htmlFor="qn1" className="label">
                    <h3>Describe me in one Sentence</h3>
                </label>
                <textarea type="text" id="qn1" className="writeInput writeText" onChange={(e)=>{setQn1(e.target.value)}}></textarea>
                <label htmlFor="qn2" className="label">
                    <h3>What did you think of me when we first met?</h3>
                </label>
                <textarea type="text" id="qn2" className="writeInput writeText" onChange={(e)=>{setQn2(e.target.value)}}></textarea>
                <label htmlFor="qn3" className="label">
                    <h3>One weird food combination you would recommend me trying</h3>
                </label>
                <textarea type="text" id="qn3" className="writeInput writeText" onChange={(e)=>{setQn3(e.target.value)}}></textarea>
                <label htmlFor="qn4" className="label">
                    <h3>Your most memorable experiences with me</h3>
                </label>
                <textarea type="text" id="qn4" className="writeInput writeText memories" onChange={(e)=>{setQn4(e.target.value)}}></textarea>
                <label htmlFor="qn5" className="label">
                    <h3>Upload your Images Here</h3>
                </label>
                <input type="file" id="qn5" className="uploadPictureLink"/>
                <center>
                    <div>
                        <button className="writeSubmit" type="submit">Finish</button>
                    </div>
                </center>
                   
            </form>
        </div>
    )
}