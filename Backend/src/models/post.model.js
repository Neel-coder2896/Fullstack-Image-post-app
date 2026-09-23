const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    image:String,
    caption:String
})

const postModel=mongoose.model("post",postSchema)
//post=collection name to idenitfy in the dataabse

module.exports=postModel
