import Blog from "../models/blogSchema.js";
import User from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import conf from "../conf/conf.js";


export async function createNewBlog(req, res) {
    const { title, desc } = req.body;
    const token = req.header("Authorization")
    jwt.verify(token, conf["jwtkey"], (err, code) => {
        if(!err){
            req.user = code;
        }
        else{
            res.status(401).send("Unauthorized")
        }
    })
    const authorID = req.user["id"];
    const authorUser = await User.findById(authorID);
    const authorName = authorUser["name"];
    

    try {
        const newBlog = new Blog({ title, desc, authorID, authorName });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function getOneBlog(req, res) {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        res.status(201).json(blog);
    }
    catch (error) {
        res.status(400).json(error)
    }
}

export async function deleteBlog(req, res) {
    const { id } = req.params;
    const token = req.header("Authorization")
    jwt.verify(token, conf["jwtkey"], (err, code) => {
        if(!err){
            req.user = code;
        }
        else{
            res.status(401).send("Unauthorized")
        }
    })
    try {
        const blog = await Blog.findById(id);
        if (req.user["id"] === blog["authorID"]) {
            await Blog.findByIdAndDelete(id);
            res.status(201).json({ message: "deleted" });
        }
        else {
            res.status(401).send("Unauthorized");
        }
    }
    catch (error) {
        res.status(400).json(error)
    }
}

export async function patchExistingBlog(req, res) {
    const { id } = req.params;
    const { title, desc } = req.body;
    const token = req.header("Authorization")
    jwt.verify(token, conf["jwtkey"], (err, code) => {
        if(!err){
            req.user = code;
        }
        else{
            res.status(401).send("Unauthorized")
        }
    })
    try {
        const blog = await Blog.findById(id);
        if (req.user["id"] === blog["authorID"]) {
            await Blog.findByIdAndUpdate(id,{title,desc},{new:false});
            res.status(201).json({ message: "updated" });
        }
        else {
            res.status(401).send("Unauthorized");
        }
    }
    catch (error) {
        res.status(400).json(error)
    }
}