import { Router } from "express";
import {
    getAllBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
} from "../controllers/blogs";

const blogRouter = Router();

blogRouter.get("/", getAllBlogs).post(createBlog);

blogRouter.get('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog)

export default blogRouter;