import mongoose from 'mongoose';
import 'dotenv/config'
export const conn = mongoose.connect(process.env.mongodbUrl)
.then(()=>{
    console.log("Connected");
})
.catch(()=>{
    console.log("Not Connected");
})