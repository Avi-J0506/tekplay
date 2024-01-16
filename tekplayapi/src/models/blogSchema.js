import mongoose,{ Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true,
    },
    authorID:{
        type:String,
        required:true
    }
},{timestamps:true})

export default mongoose.model("Blog",blogSchema);