import React from "react";
import Indivmem from "../../components/indivmem/Indivmem";
import Membooklist from "../../components/membooklist/Membooklist";
import Topbar from "../../components/topbar/Topbar";
import './membook.css';

export default function Membook(){
    return(
        <>
            <Topbar/>
            <div className="MembookContainer">
                
                
                <div className="wrap">
                    <Membooklist/>
                </div>
                
                <div className="chummadiv">
                    <Indivmem/>
                </div>
                
            </div>
        </>
    )
}