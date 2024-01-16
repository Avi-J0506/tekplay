import Blog from "../models/blogSchema.js";

//number of entries per page
const pageLength = 12;


export default async function paginatedBlogs (req,res){
    const pageno = parseInt(req.query.page) || 1;
    try{
        const blogs = await Blog.find()
        .skip((pageno-1)*pageLength)
        .limit(pageLength)
        res.status(200).json(blogs)
    }
    catch(err){
        res.status(400).send(err)
    }
}