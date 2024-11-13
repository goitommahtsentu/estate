import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose";
const app= express();
dotenv.config()

mongoose.connect(process.env.MONG_URL).then(()=>{
   console.log('connected to Db')
}).catch((err)=>{
   console.log(err)
})
app.listen(3000,(req,res)=>{
   console.log('test')
})