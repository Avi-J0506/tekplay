import bcrypt from "bcryptjs"
import User from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import conf from "../conf/conf.js"

const createToken = (id)=>{
    return jwt.sign({id},conf["jwtkey"]);
}

export const signin = async (req, res) => {
    const {email , password } = req.body;
    const user = await User.findOne({email});
    if(user){
        const authOK = await bcrypt.compare(password,user.password);
        if(authOK){
            const token = createToken(user._id);
            res.cookie('jwt',token,{httpOnly:true})
            res.status(201).send({jwt:token});
        }else{
            res.status(400).send("incorrect password")
        }
    }else{
        res.status(400).send("incorrect email")
    }
}

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new User({ email, password: hashedPassword, name });
        await newuser.save();
        const token = createToken(newuser._id)
        res.cookie('jwt',token,{httpOnly:true})
        res.status(201).send({jwt:token});
    }
    else {
        res.status(409).send({message:"User already exists"});
    }
}