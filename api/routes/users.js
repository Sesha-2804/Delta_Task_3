import express  from "express";
const router = express.Router();
import bcrypt from 'bcrypt';
import User_template from '../models/User'

//update user or edit
router.put("/:id",async (req,res)=>{
    if(req.body.userId==req.params.id){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password= await bcrypt.hash(req.body.password,salt);
            }catch(err){
                res.status(500).json(err)
            }
            
        }
        try{
            const user=await User_template.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{
                new:true
            })
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You can update onlu your account")
    }
})


//delete user
router.delete("/:id",async (req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
        try{
            await User_template.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted")
        }
        catch(err){
            return res.status(500).json(err)
        }
    }
        
    else{
        return res.status(403).json("You can delete only your account")
    }
})

//get a user
router.get("/:id", async (req,res)=>{
    try{
        const user= await User_template.findById(req.params.id);  
        const {password,updatedAt,...other}=user._doc
        
        res.status(200).json(other);
    }
    catch(err){
        res.status(500).json(err);
    }
})
//get people you follow
router.get("/followings/:userId", async (req,res)=>{
    try{
        const currentUser= await User_template.findById(req.params.userId);
        const followingdeets= await Promise.all(
            currentUser.followings.map((followingId)=>{
                return  User_template.findById(followingId)
            })
        )
        res.status(200).json(followingdeets)
        
        
    }catch(err){
        res.status(500).json(err);
    }
})
//follow a user
router.put("/:id/follow",async (req,res)=>{
    if(req.body.userId!=req.params.id){
        try{
            const user_to_be_followed= await User_template.findById(req.params.id);
            const currentUser= await User_template.findById(req.body.userId);
            if(!user_to_be_followed.followers.includes(req.body.userId)){
                await user_to_be_followed.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{followings:req.params.id}})
            }
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You can't follow yourself")
    }
})
//unfollow a user
router.put("/:id/unfollow",async (req,res)=>{
    if(req.body.userId!=req.params.id){
        try{
            const user_to_be_unfollowed= await User_template.findById(req.params.id);
            const currentUser= await User_template.findById(req.body.userId);
            if(user_to_be_unfollowed.followers.includes(req.body.userId)){
                await user_to_be_unfollowed.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{followings:req.params.id}});
                res.status(200).json("User has been unfollowed");
            }
        }catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("You are not following yourself")
    }
})

export default router;