import mongoose from "mongoose";

const MemSchema = new mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type:String
    },
    qn1:{
        type:String
    },
    qn2:{
        type:String
    },
    qn3:{
        type:String
    },
    qn4:{
        type:String
    }
},{timestamps:true})
export default mongoose.model("Mem",MemSchema)