import express from 'express'
import './DB/conn.mjs'
import { MovieModel } from './DB/Model/schema.mjs'

const app=express()
const port = process.env.PORT || 3000

app.use(express.json())
// app.use(cors({
//     origin: 'https://movies-frontend-eight.vercel.app'
//   }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.get("/",(req,res)=>{
    res.send("Server Live")
})

app.post("/v1/register/movie",(req,res)=>{
    const {name,imgUrl,title}=req.body
    const result = MovieModel({
        name,
        imgUrl,
        title
    })
    result.save()
    res.status(201).json({ message: 'movie added' });
})
app.get("/v1/movies",async(req,res)=>{
    const result = await MovieModel.find()
    res.status(200).json({result})
})

app.post("/v1/movie",async(req,res)=>{
    const {name}=req.body
    const result = await MovieModel.find({name})
    res.status(200).json({result})
})
app.post("/v1/movieid",async(req,res)=>{
    const {_id}=req.body
    const result = await MovieModel.find({_id})
    res.status(200).json({result})
})
app.listen(port,()=>{
    console.log(`server run at http://localhost:${port}`);
})
