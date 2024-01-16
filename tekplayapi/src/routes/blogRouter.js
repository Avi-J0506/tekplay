import { Router } from "express";
import paginatedBlogs from "../controllers/paginatedBlogs.js";
import { createNewBlog,
        getOneBlog,
        deleteBlog,
        patchExistingBlog } from "../controllers/blogCRUD.js";

const blogRouter = Router();


blogRouter.get("/",paginatedBlogs);
blogRouter.get("/:id",getOneBlog);
blogRouter.post("/new",createNewBlog);
blogRouter.delete("/:id",deleteBlog);
blogRouter.patch("/:id",patchExistingBlog);



export default blogRouter; 