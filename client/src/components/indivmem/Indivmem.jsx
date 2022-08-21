import React from "react";
import './indivmem.css';

export default function Indivmem(){
    return(
        <div className="memBox">
            
            <img className="memPicdiv" src="assets/mempic.jpg" alt="" />
            
            
            <div className="qn1 wrapper">
                <h3>Describe me in one Sentence</h3>
                <p>Pellentesque habitant morbi tristique senectus et 
                    netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className="qn2 wrapper">
                <h3>What did you think of me when we first met?</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada 
                    fames ac turpis egestas. Vestibulum tortor quam, 
                    feugiat vitae, ultricies eget, tempor sit amet, 
                    ante. Donec eu libero sit amet quam egestas semper. Aenean 
                    ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
            <div className="qn3 wrapper">
                <h3>One weird food combination you would recommend me trying</h3>
                <p>Pellentesque habitant morbi tristique senectus et 
                    netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className="qn4 wrapper">
                <h3>Your most memorable experiences with me</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
                    egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante
                    . Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris 
                    placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum 
                    erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit 
                    eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec 
                    non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, 
                    tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, 
                    tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
            </div>
        </div>
    )
}