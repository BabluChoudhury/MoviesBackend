import mongoose from "mongoose";
const MongooseSchema = mongoose.Schema({
    name:String,
    imgUrl:String,
    title:String
})
export const MovieModel= mongoose.model("movies",MongooseSchema)