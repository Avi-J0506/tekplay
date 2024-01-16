import Blog from "../models/blogSchema.js";

export async function createNewBlog(req,res){
    const { title, desc , author } = req.body;

    try {
      const newBlog = new Blog({ title, desc , author });
      const savedBlog = await newBlog.save();
      res.status(201).json(savedBlog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

export async function getOneBlog(req,res){
    const {id} = req.params;
    try{
        const blog = await Blog.findById(id);
        res.status(201).json(blog);
    }
    catch(error){
        res.status(400).json(error)
    }
}

export async function deleteBlog(req,res){
    const {id} = req.params;
    try{
        const blog = await Blog.findByIdAndDelete(id);
        res.status(201).json(blog);
    }
    catch(error){
        res.status(400).json(error)
    }
}

export async function patchExistingBlog(req,res){
    const {id} = req.params;
    const {title , desc , author} = req.body;
    try{
        const updatedBlog = await Blog.findByIdAndUpdate(id,{title,desc,author},{new:false});
        res.status(201).json(updatedBlog);
    }
    catch(error){
        res.status(400).json(error)
    }
}