
const express=require("express")
const multer=require("multer")
const cors=require("cors")
const uploadFile=require("./services/storage.service.js")
const postmodel=require("./models/post.model.js")


const app=express()

app.use(cors())

app.use(express.json())


const upload=multer({storage:multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async (req,res)=>{


    console.log(req.body);
    console.log(req.file)

    const result=await uploadFile(req.file.buffer)
    const post=await postmodel.create({
        image:result.thumbnailUrl,
        caption:req.body.caption
    })

    return res.status(201).json({
        message:"post created successfully",
        post
    })
    
    
})

app.get("/posts",async (req,res)=>{
    const posts= await postmodel.find({})

    return res.status(200).json({
        message:"post fetched successfully",
        posts
    })
        
    
})

module.exports=app

