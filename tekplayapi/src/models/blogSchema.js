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
    author:{
        type:String,
        required:true,
    },
})

export default mongoose.model("Blog",blogSchema);