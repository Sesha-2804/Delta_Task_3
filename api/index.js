import express from 'express';
const app=express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoute from './routes/auth';
import userRoute from './routes/users';
import multer from 'multer';

dotenv.config();
mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to MongoDB")
});
import path from 'path';
const __dirname = path.resolve();
//middlewares
app.use("/images",express.static(path.join(__dirname,"public/images")))
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    },
})
const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
        res.status(200).json("File Uploaded Successfully")
    }catch(err){
        console.log("Erorr!!!!!!!!!")
        console.log(err);
    }
})

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);

app.listen(8000,()=>{
    console.log("Backend server is up and running");
})

