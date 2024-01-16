import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    }
    // other fields
})


export default mongoose.model("User",userSchema);