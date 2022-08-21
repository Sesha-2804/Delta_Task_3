import mongoose from "mongoose";

const UserSchema = new  mongoose.Schema({
    username:{
        type:String,
        // required:true
    },
    
    email:{
        type:String,
        // required:true
    },
    webmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    desc:{
        type:String,
        max:100
    },
    
    dept:{
        type:String,
        max:50
    },
    hostel:{
        type:String,
        max:20
    },
    passout:{
        type:String
    },
    mobno:{
        type:String,
        default:""
    },
    chapters:{
        type:Array,
        default:[]
    }
},{timestamps:true})
export default mongoose.model("User",UserSchema)