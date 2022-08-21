import express from "express";

const router = express.Router();

import User_template from '../models/User';

import bcrypt from 'bcrypt';

//Register

router.post('/register',async (req,res)=>{
    try{
        
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        //creating new user
        const Newuser= await new User_template({
            // username:req.body.username,
            webmail:req.body.webmail,
            password:hashedPassword
        })
        //saving new user
        const user_op= await Newuser.save()
        res.status(200).json(user_op);
    }catch(err){
        res.status(500).json(err);
    }
    
    
})


// ****************************************************************************


//Login

router.post("/login",async (req,res)=>{

    try{
        
        const user= await User_template.findOne({webmail:req.body.webmail});//gets the user with given webmail
        !user&&res.status(404).json("User not found in the database");//if user not found op user not fond
        const pass_matching= await bcrypt.compare(req.body.password,user.password);//compare the hashed passwords
        !pass_matching && res.status(404).json("Password not matchiing");//if pwd isn't matching op pwd not matching
        res.status(200).json(user);//if everything goes well res with user details
        
    }catch(err){
        res.status(500).json(err);
    }
})

export default router;